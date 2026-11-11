import assert from "node:assert/strict";
import test from "node:test";
import { initWorkProcess } from "../src/lib/workProcess.ts";
import { workProcessSteps } from "../src/data/content.ts";

class ElementStub extends EventTarget {
 dataset = {};
 open = false;
 hidden = true;
 textContent = "";
 classes = new Set();
 classList = {
  add: (name) => this.classes.add(name),
  remove: (name) => this.classes.delete(name),
  toggle: (name, force) => force ? this.classes.add(name) : this.classes.delete(name),
  contains: (name) => this.classes.has(name),
 };
}

function setup(t) {
 const workspace = new ElementStub();
 const steps = workProcessSteps.map((step) => {
  const element = new ElementStub();
  element.dataset = { processTitle: step.title, processOutcome: step.outcome };
  return element;
 });
 steps[0].open = true;
 const layers = steps.map(() => new ElementStub());
 const markers = steps.map(() => new ElementStub());
 const counter = new ElementStub(), title = new ElementStub(), outcome = new ElementStub();
 workspace.querySelectorAll = (selector) => ({ "[data-process-step]": steps, "[data-draft-stage]": layers, "[data-process-marker]": markers })[selector];
 workspace.querySelector = (selector) => ({ "[data-process-counter]": counter, "[data-process-draft-title]": title, "[data-process-draft-outcome]": outcome })[selector];
 const abort = new AbortController();
 t.after(() => abort.abort());
 initWorkProcess(workspace, abort.signal);
 const openStep = (index) => { steps[index].open = true; steps[index].dispatchEvent(new Event("toggle")); };
 return { workspace, steps, layers, markers, counter, title, outcome, abort, openStep };
}

test("opening a process step reveals its outcome and assembles the matching drawing layers", (t) => {
 const f = setup(t);
 assert.equal(f.counter.textContent, "01 / 08");
 f.openStep(4);
 assert.equal(f.counter.textContent, "05 / 08");
 assert.equal(f.title.textContent, workProcessSteps[4].title);
 assert.equal(f.outcome.textContent, workProcessSteps[4].outcome);
 assert.equal(f.steps[0].open, false);
 assert.equal(f.steps.filter((step) => step.open).length, 1);
 assert.equal(f.layers.filter((layer) => layer.classList.contains("isReached")).length, 5);
 assert.equal(f.layers[4].classList.contains("isCurrent"), true);
});

test("returning to an earlier stage removes the later drawing layers", (t) => {
 const f = setup(t);
 f.openStep(7);
 assert.equal(f.counter.textContent, "08 / 08");
 f.openStep(1);
 assert.equal(f.counter.textContent, "02 / 08");
 assert.equal(f.markers.filter((marker) => marker.classList.contains("isReached")).length, 2);
 assert.equal(f.layers[7].classList.contains("isReached"), false);
 assert.equal(f.layers[7].classList.contains("isCurrent"), false);
});

test("collapsing the selected step keeps its last drawing visible", (t) => {
 const f = setup(t);
 f.openStep(2);
 f.steps[2].open = false;
 f.steps[2].dispatchEvent(new Event("toggle"));
 assert.equal(f.counter.textContent, "03 / 08");
 assert.equal(f.layers[2].classList.contains("isCurrent"), true);
});

test("page cleanup stops the old process controls updating the drawing", (t) => {
 const f = setup(t);
 f.abort.abort();
 f.openStep(7);
 assert.equal(f.counter.textContent, "01 / 08");
 assert.equal(f.workspace.classList.contains("isInteractive"), false);
});
