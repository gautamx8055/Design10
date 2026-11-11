/** Restore the overlapping desktop card fan with accessible project selection. */
export function initProjectDeck(deck: HTMLElement, signal: AbortSignal) {
 const cards = Array.from(deck.querySelectorAll<HTMLAnchorElement>("[data-project-card]"));
 const buttons = Array.from(deck.querySelectorAll<HTMLButtonElement>("[data-deck-select]"));
 const track = deck.querySelector<HTMLElement>("[data-deck-track]");
 const controls = deck.querySelector<HTMLElement>("[data-deck-controls]");
 const status = deck.querySelector<HTMLElement>("[data-deck-status]");
 const counter = deck.querySelector<HTMLElement>("[data-deck-counter]");
 if (!cards.length || !controls || !track) return;
 const desktop = window.matchMedia("(min-width: 1001px)");
 let activeIndex = 0;
 const selectProject = (index: number, announce = true) => {
  activeIndex = (index + cards.length) % cards.length;
  cards.forEach((card, cardIndex) => {
   let position = (cardIndex - activeIndex + cards.length) % cards.length;
   if (position > Math.floor((cards.length - 1) / 2)) position -= cards.length;
   card.dataset.position = String(position);
  });
  buttons.forEach((button, buttonIndex) => button.setAttribute("aria-pressed", String(buttonIndex === activeIndex)));
  if (counter) counter.textContent = String(activeIndex + 1).padStart(2, "0") + " / " + String(cards.length).padStart(2, "0");
  if (status && announce) status.textContent = cards[activeIndex].dataset.projectName + ". Project " + (activeIndex + 1) + " of " + cards.length + ".";
 };
 const syncLayout = () => {
  controls.hidden = !desktop.matches || cards.length < 2;
  if (desktop.matches) deck.setAttribute("aria-roledescription", "carousel");
  else deck.removeAttribute("aria-roledescription");
  track.setAttribute("tabindex", desktop.matches ? "0" : "-1");
 };
 buttons.forEach((button, index) => button.addEventListener("click", () => selectProject(index), { signal }));
 deck.querySelector("[data-deck-previous]")?.addEventListener("click", () => selectProject(activeIndex - 1), { signal });
 deck.querySelector("[data-deck-next]")?.addEventListener("click", () => selectProject(activeIndex + 1), { signal });
 // Pointer focus must not move a rear card before its click opens the project.
 cards.forEach((card, index) => card.addEventListener("focus", () => {
  if (card.matches(":focus-visible")) selectProject(index, false);
 }, { signal }));
 deck.addEventListener("keydown", (event) => {
  if (!desktop.matches || (event.target !== track && !cards.includes(event.target as HTMLAnchorElement))) return;
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const next = event.key === "Home" ? 0 : event.key === "End" ? cards.length - 1 : activeIndex + (event.key === "ArrowRight" ? 1 : -1);
  selectProject(next);
  cards[activeIndex].focus({ preventScroll: true });
 }, { signal });
 desktop.addEventListener("change", syncLayout, { signal });
 selectProject(0, false);
 deck.classList.add("isEnhanced");
 syncLayout();
 signal.addEventListener("abort", () => {
  deck.classList.remove("isEnhanced");
  deck.removeAttribute("aria-roledescription");
  controls.hidden = true;
  track.setAttribute("tabindex", "0");
 }, { once: true });
}
