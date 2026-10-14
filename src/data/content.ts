import type { DrawingKind } from "./drawings";

export const highlights = [
	{ figure: "6 Oct 1996", label: "First project, at 3:30 PM" },
	{ figure: "30+", label: "Years of experience" },
	{ figure: "Pan India", label: "Design practice" },
	{ figure: "1000+", label: "Projects completed" },
	{ figure: "Two kinds", label: "Residential and commercial" },
];

export const expertise: {
	id: string;
	title: string;
	kind: DrawingKind;
	label: string;
	text: string;
}[] = [
	{
		id: "residential",
		title: "Residential",
		kind: "court",
		label: "A residence, planned around how a family lives",
		text: "Homes shaped around the people who live in them: space, light, and a plan that belongs to that family.",
	},
	{
		id: "jewellery",
		title: "Jewellery Showroom",
		kind: "vitrine",
		label: "Plan of a jewellery showroom",
		text: "Showrooms for jewellery houses across India, planned so the piece, the counter, and the visitor all have a clear place.",
	},
	{
		id: "commercial",
		title: "Commercial",
		kind: "pavilion",
		label: "Front of a commercial interior",
		text: "Commercial interiors with a clear purpose, from the arrival to the working rooms behind.",
	},
	{
		id: "architectural",
		title: "Architectural",
		kind: "hall",
		label: "An architectural section",
		text: "Architecture that holds the interior: structure, section, and the long life of the building.",
	},
];
