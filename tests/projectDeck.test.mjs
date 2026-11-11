import assert from "node:assert/strict";
import test from "node:test";
import { initProjectDeck } from "../src/lib/projectDeck.ts";

class ElementStub extends EventTarget {
 dataset = {};
 attributes = new Map();
 attributeWrites = 0;
 hidden = true;
 textContent = "";
 focused = false;
 focusVisible = true;
 classNames = new Set();
 classList = {
  add: (name) => this.classNames.add(name),
  remove: (name) => this.classNames.delete(name),
  contains: (name) => this.classNames.has(name),
 };
 setAttribute(name, value) { this.attributeWrites++; this.attributes.set(name, value); }
 getAttribute(name) { return this.attributes.get(name); }
 removeAttribute(name) { this.attributes.delete(name); }
 matches(selector) { return selector === ":focus-visible" && this.focusVisible; }
 click() { this.dispatchEvent(new Event("click")); }
 focus() { this.focused = true; this.dispatchEvent(new Event("focus")); }
}

function setup(t, desktop = true) {
 const previousWindow = globalThis.window;
 const media = new EventTarget();
 media.matches = desktop;
 globalThis.window = { matchMedia: () => media };
 const deck = new ElementStub();
 const cards = ["Urmil", "Giri", "Ganga", "Guru Kripa"].map((name) => {
  const card = new ElementStub(); card.dataset.projectName = name; return card;
 });
 const buttons = cards.map(() => new ElementStub());
 const controls = new ElementStub(), status = new ElementStub(), counter = new ElementStub();
 const previous = new ElementStub(), next = new ElementStub(), track = new ElementStub();
 deck.querySelectorAll = (selector) => selector === "[data-project-card]" ? cards : buttons;
 deck.querySelector = (selector) => ({ "[data-deck-track]": track, "[data-deck-controls]": controls, "[data-deck-status]": status, "[data-deck-counter]": counter, "[data-deck-previous]": previous, "[data-deck-next]": next })[selector];
 const abort = new AbortController();
 t.after(() => {
  abort.abort();
  if (previousWindow === undefined) delete globalThis.window; else globalThis.window = previousWindow;
 });
 initProjectDeck(deck, abort.signal);
 const selectedIndex = () => cards.findIndex((card) => card.dataset.position === "0");
 const key = (value, target) => {
  const event = new Event("keydown", { cancelable: true });
  Object.defineProperties(event, { key: { value }, target: { value: target } });
  deck.dispatchEvent(event);
  return event;
 };
 return { deck, cards, buttons, controls, status, counter, previous, next, track, media, abort, selectedIndex, key };
}

test("fan controls bring each project forward and wrap without stealing focus", (t) => {
 const f = setup(t);
 assert.equal(f.controls.hidden, false);
 assert.equal(f.counter.textContent, "01 / 04");
 f.previous.click();
 assert.equal(f.selectedIndex(), 3);
 assert.equal(f.buttons[3].getAttribute("aria-pressed"), "true");
 assert.match(f.status.textContent, /Guru Kripa.*4 of 4/);
 assert.equal(f.cards.some((card) => card.focused), false);
 f.next.click();
 assert.equal(f.selectedIndex(), 0);
 assert.equal(new Set(f.cards.map((card) => card.dataset.position)).size, 4);
});

test("project selectors update the front card and its position counter", (t) => {
 const f = setup(t);
 f.buttons[2].click();
 assert.equal(f.selectedIndex(), 2);
 assert.equal(f.counter.textContent, "03 / 04");
 assert.equal(f.buttons.filter((button) => button.getAttribute("aria-pressed") === "true").length, 1);
});

test("keyboard focus, arrows, Home and End reveal the matching project", (t) => {
 const f = setup(t);
 f.cards[1].focus();
 assert.equal(f.selectedIndex(), 1);
 assert.equal(f.key("ArrowRight", f.cards[1]).defaultPrevented, true);
 assert.equal(f.selectedIndex(), 2);
 assert.equal(f.cards[2].focused, true);
 f.key("End", f.cards[2]);
 assert.equal(f.selectedIndex(), 3);
 f.key("Home", f.cards[3]);
 assert.equal(f.selectedIndex(), 0);
});

test("pointer focus does not move a rear card before its project can open", (t) => {
 const f = setup(t);
 f.cards[2].focusVisible = false;
 f.cards[2].focus();
 assert.equal(f.selectedIndex(), 0);
});

test("mobile shows the normal card grid and restores fan controls on desktop", (t) => {
 const f = setup(t, false);
 assert.equal(f.controls.hidden, true);
 assert.equal(f.track.getAttribute("tabindex"), "-1");
 assert.equal(f.key("ArrowRight", f.cards[0]).defaultPrevented, false);
 f.media.matches = true;
 f.media.dispatchEvent(new Event("change"));
 assert.equal(f.controls.hidden, false);
 assert.equal(f.deck.getAttribute("aria-roledescription"), "carousel");
 f.buttons[3].click();
 assert.equal(f.selectedIndex(), 3);
 f.media.matches = false;
 f.media.dispatchEvent(new Event("change"));
 assert.equal(f.controls.hidden, true);
 assert.equal(f.deck.getAttribute("aria-roledescription"), undefined);
});

test("page cleanup removes the fan and prevents duplicate control listeners", (t) => {
 const f = setup(t);
 f.abort.abort();
 assert.equal(f.controls.hidden, true);
 assert.equal(f.deck.classList.contains("isEnhanced"), false);
 f.next.click();
 assert.equal(f.selectedIndex(), 0);
 const replacement = new AbortController();
 t.after(() => replacement.abort());
 initProjectDeck(f.deck, replacement.signal);
 const writes = f.buttons[0].attributeWrites;
 f.next.click();
 assert.equal(f.selectedIndex(), 1);
 assert.equal(f.buttons[0].attributeWrites, writes + 1);
});
