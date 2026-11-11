import assert from "node:assert/strict";
import test from "node:test";
import { createHeaderState, updateHeaderState } from "../src/lib/headerState.ts";

test("starts transparent and becomes solid when scrolling begins", () => {
	const initial = createHeaderState();
	assert.equal(initial.isAtTop, true);
	assert.equal(initial.isHidden, false);
	const scrolled = updateHeaderState(initial, 1);
	assert.equal(scrolled.isAtTop, false);
	assert.equal(scrolled.isHidden, false);
});

test("hides after scrolling down past the header", () => {
	const scrolled = updateHeaderState(createHeaderState(), 150);
	assert.equal(scrolled.isHidden, true);
	assert.equal(scrolled.isAtTop, false);
});

test("reveals after a deliberate upward scroll", () => {
	const hidden = updateHeaderState(createHeaderState(), 500);
	assert.equal(updateHeaderState(hidden, 495).isHidden, true);
	assert.equal(updateHeaderState(hidden, 494).isHidden, false);
});

test("small direction changes do not flicker the header", () => {
	let state = updateHeaderState(createHeaderState(), 500);
	for (const position of [498, 501, 499, 500]) {
		state = updateHeaderState(state, position);
		assert.equal(state.isHidden, true);
	}
	state = updateHeaderState(state, 490);
	assert.equal(state.isHidden, false);
});

test("a fresh downward movement hides it again after revealing", () => {
	const hidden = updateHeaderState(createHeaderState(), 500);
	const visible = updateHeaderState(hidden, 400);
	const smallMovement = updateHeaderState(visible, 405);
	assert.equal(smallMovement.isHidden, false);
	assert.equal(updateHeaderState(smallMovement, 412).isHidden, true);
});

test("an open menu or focused navigation keeps the header visible", () => {
	const hidden = updateHeaderState(createHeaderState(), 500);
	const locked = updateHeaderState(hidden, 500, { lockVisible: true });
	assert.equal(locked.isHidden, false);
	assert.equal(updateHeaderState(locked, 505, { lockVisible: true }).isHidden, false);
	assert.equal(updateHeaderState(locked, 500).isHidden, false);
});

test("restored scroll positions start solid and visible", () => {
	const restored = createHeaderState(600);
	assert.equal(restored.isAtTop, false);
	assert.equal(restored.isHidden, false);
	assert.equal(updateHeaderState(restored, 612).isHidden, true);
});

test("returning to the top and overscroll restore transparency", () => {
	const hidden = updateHeaderState(createHeaderState(), 500);
	for (const position of [0, -30]) {
		const top = updateHeaderState(hidden, position);
		assert.equal(top.isAtTop, true);
		assert.equal(top.isHidden, false);
		assert.equal(top.scrollY, 0);
	}
});

test("a fractional scroll position uses the solid header", () => {
	const scrolled = updateHeaderState(createHeaderState(), 0.5);
	assert.equal(scrolled.isAtTop, false);
	assert.equal(scrolled.isHidden, false);
});

test("closing the menu allows downward scrolling to hide the header again", () => {
	const menuOpen = updateHeaderState(createHeaderState(), 500, { lockVisible: true });
	const menuClosed = updateHeaderState(menuOpen, 500);
	assert.equal(updateHeaderState(menuClosed, 512).isHidden, true);
});
