/** Pair native step disclosures with the illustrative drafting board. */
export function initWorkProcess(workspace: HTMLElement, signal: AbortSignal) {
 const steps = Array.from(workspace.querySelectorAll<HTMLDetailsElement>("[data-process-step]"));
 const layers = Array.from(workspace.querySelectorAll<SVGGElement>("[data-draft-stage]"));
 const markers = Array.from(workspace.querySelectorAll<HTMLElement>("[data-process-marker]"));
 const counter = workspace.querySelector<HTMLElement>("[data-process-counter]");
 const title = workspace.querySelector<HTMLElement>("[data-process-draft-title]");
 const outcome = workspace.querySelector<HTMLElement>("[data-process-draft-outcome]");
 if (!steps.length) return;
 const showStage = (index: number) => {
  layers.forEach((layer, layerIndex) => {
   layer.classList.toggle("isReached", layerIndex <= index);
   layer.classList.toggle("isCurrent", layerIndex === index);
  });
  markers.forEach((marker, markerIndex) => marker.classList.toggle("isReached", markerIndex <= index));
  if (counter) { counter.hidden = false; counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")}`; }
  if (title) title.textContent = steps[index].dataset.processTitle || "";
  if (outcome) outcome.textContent = steps[index].dataset.processOutcome || "";
 };
 steps.forEach((step, index) => step.addEventListener("toggle", () => {
  if (!step.open) return;
  steps.forEach((other) => { if (other !== step) other.open = false; });
  showStage(index);
 }, { signal }));
 showStage(Math.max(0, steps.findIndex((step) => step.open)));
 workspace.classList.add("isInteractive");
 signal.addEventListener("abort", () => workspace.classList.remove("isInteractive"), { once: true });
}
