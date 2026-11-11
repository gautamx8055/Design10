export interface HeaderState {
	scrollY: number;
	directionAnchor: number;
	direction: "up" | "down" | null;
	isAtTop: boolean;
	isHidden: boolean;
}

interface HeaderOptions {
	lockVisible?: boolean;
	hideAfter?: number;
}

export function createHeaderState(scrollY = 0): HeaderState {
	const position = Math.max(0, scrollY);
	return {
		scrollY: position,
		directionAnchor: position,
		direction: null,
		isAtTop: position === 0,
		isHidden: false,
	};
}

/** Accumulate movement in one direction so trackpad jitter does not flicker the header. */
export function updateHeaderState(
	previous: HeaderState,
	scrollY: number,
	{ lockVisible = false, hideAfter = 116 }: HeaderOptions = {},
): HeaderState {
	const position = Math.max(0, scrollY);
	if (position === 0 || lockVisible) return createHeaderState(position);

	const movement = position - previous.scrollY;
	if (movement === 0) {
		return { ...previous, isAtTop: false, isHidden: position <= hideAfter ? false : previous.isHidden };
	}

	const direction = movement > 0 ? "down" : "up";
	const directionAnchor = direction === previous.direction ? previous.directionAnchor : previous.scrollY;
	const distance = Math.abs(position - directionAnchor);
	let isHidden = previous.isHidden;

	if (position <= hideAfter) isHidden = false;
	else if (direction === "up" && distance >= 6) isHidden = false;
	else if (direction === "down" && distance >= 12) isHidden = true;

	return { scrollY: position, directionAnchor, direction, isAtTop: false, isHidden };
}
