/** Enhance the normal project-card grid into a keyboard-accessible desktop deck. */
export function initProjectDeck(deck: HTMLElement, signal: AbortSignal) {
 const cards = Array.from(deck.querySelectorAll<HTMLAnchorElement>("[data-project-card]"));
 const buttons = Array.from(deck.querySelectorAll<HTMLButtonElement>("[data-deck-select]"));
 const controls = deck.querySelector<HTMLElement>("[data-deck-controls]");
 const status = deck.querySelector<HTMLElement>("[data-deck-status]");
 const desktop = window.matchMedia("(min-width: 1001px)");
 if (!cards.length || !controls) return;
 let activeIndex = 0;
 const selectProject = (index: number, announce = true) => {
  activeIndex = (index + cards.length) % cards.length;
  cards.forEach((card, cardIndex) => {
   let position = (cardIndex - activeIndex + cards.length) % cards.length;
   if (position > Math.floor((cards.length - 1) / 2)) position -= cards.length;
   card.dataset.position = String(position);
  });
  buttons.forEach((button, buttonIndex) => button.setAttribute("aria-pressed", String(buttonIndex === activeIndex)));
  if (status && announce) status.textContent = `${cards[activeIndex].dataset.projectName}. Project ${activeIndex + 1} of ${cards.length}.`;
 };
 buttons.forEach((button, index) => button.addEventListener("click", () => selectProject(index), { signal }));
 deck.querySelector("[data-deck-previous]")?.addEventListener("click", () => selectProject(activeIndex - 1), { signal });
 deck.querySelector("[data-deck-next]")?.addEventListener("click", () => selectProject(activeIndex + 1), { signal });
 cards.forEach((card, index) => card.addEventListener("focus", () => selectProject(index, false), { signal }));
 deck.addEventListener("keydown", (event) => {
  if (!desktop.matches || !cards.includes(event.target as HTMLAnchorElement)) return;
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const next = event.key === "Home" ? 0 : event.key === "End" ? cards.length - 1 : activeIndex + (event.key === "ArrowRight" ? 1 : -1);
  selectProject(next);
  cards[activeIndex].focus({ preventScroll: true });
 }, { signal });
 selectProject(0, false);
 deck.classList.add("isEnhanced");
 controls.hidden = false;
 signal.addEventListener("abort", () => { deck.classList.remove("isEnhanced"); controls.hidden = true; }, { once: true });
}
