import assert from "node:assert/strict";
import test from "node:test";
import { initProjectDeck } from "../src/lib/projectDeck.ts";

// EventTarget exercises the actual controller's click, focus and cleanup paths.
// Layout and the fan transforms remain browser-verification concerns.
class ElementStub extends EventTarget {
 dataset = {};
 attributes = new Map();
 hidden = true;
 textContent = "";
 focused = false;
 classNames = new Set();
 classList = {
  add: (name) => this.classNames.add(name),
  remove: (name) => this.classNames.delete(name),
  contains: (name) => this.classNames.has(name),
 };
 setAttribute(name, value) { this.attributes.set(name, value); }
 getAttribute(name) { return this.attributes.get(name); }
 click() { this.dispatchEvent(new Event("click")); }
 focus() { this.focused = true; this.dispatchEvent(new Event("focus")); }
}

function setup(t, desktop = true) {
 const previousWindow = globalThis.window;
 globalThis.window = { matchMedia: () => ({ matches: desktop }) };
 t.after(() => { if (previousWindow === undefined) delete globalThis.window; else globalThis.window = previousWindow; });
 const deck = new ElementStub();
 const cards = ["Urmil", "Giri", "Ganga"].map((name) => {
  const card = new ElementStub(); card.dataset.projectName = name; return card;
 });
 const buttons = cards.map(() => new ElementStub());
 const controls = new ElementStub(), status = new ElementStub();
 const previous = new ElementStub(), next = new ElementStub();
 deck.querySelectorAll = (selector) => selector === "[data-project-card]" ? cards : buttons;
 deck.querySelector = (selector) => ({ "[data-deck-controls]": controls, "[data-deck-status]": status, "[data-deck-previous]": previous, "[data-deck-next]": next })[selector];
 const abort = new AbortController();
 t.after(() => abort.abort());
 initProjectDeck(deck, abort.signal);
 const selectedIndex = () => cards.findIndex((card) => card.dataset.position === "0");
 const key = (key, target) => {
  const event = new Event("keydown", { cancelable: true });
  Object.defineProperties(event, { key: { value: key }, target: { value: target } });
  deck.dispatchEvent(event);
  return event;
 };
 return { deck, cards, buttons, controls, status, previous, next, abort, selectedIndex, key };
}

test("card controls select projects and wrap in both directions", (t) => {
 const f = setup(t);
 assert.equal(f.controls.hidden, false);
 assert.equal(f.selectedIndex(), 0);
 f.previous.click();
 assert.equal(f.selectedIndex(), 2);
 assert.equal(f.buttons[2].getAttribute("aria-pressed"), "true");
 assert.match(f.status.textContent, /Ganga.*3 of 3/);
 f.next.click();
 assert.equal(f.selectedIndex(), 0);
 f.buttons[1].click();
 assert.equal(f.selectedIndex(), 1);
 assert.equal(f.buttons.filter((button) => button.getAttribute("aria-pressed") === "true").length, 1);
});

test("keyboard focus brings an obscured card to the front", (t) => {
 const f = setup(t);
 f.cards[2].focus();
 assert.equal(f.selectedIndex(), 2);
 assert.equal(f.key("ArrowRight", f.cards[2]).defaultPrevented, true);
 assert.equal(f.selectedIndex(), 0);
 assert.equal(f.cards[0].focused, true);
 f.key("Home", f.cards[0]);
 assert.equal(f.selectedIndex(), 0);
 f.key("End", f.cards[0]);
 assert.equal(f.selectedIndex(), 2);
});

test("mobile cards retain normal keyboard scrolling", (t) => {
 const f = setup(t, false);
 assert.equal(f.key("ArrowRight", f.cards[0]).defaultPrevented, false);
 assert.equal(f.selectedIndex(), 0);
});

test("Astro page cleanup removes controls and event listeners", (t) => {
 const f = setup(t);
 f.buttons[1].click();
 f.abort.abort();
 assert.equal(f.controls.hidden, true);
 assert.equal(f.deck.classList.contains("isEnhanced"), false);
 f.next.click();
 assert.equal(f.selectedIndex(), 1);
 const replacement = new AbortController();
 t.after(() => replacement.abort());
 initProjectDeck(f.deck, replacement.signal);
 f.next.click();
 assert.equal(f.selectedIndex(), 1, "only the new controller should handle the click");
});
