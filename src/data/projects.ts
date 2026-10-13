import type { DrawingKind } from "./drawings";
import type { FilmKey } from "./site";

export type ProjectKind = "jewelry" | "residence" | "banquet";

export interface Project {
	slug: string;
	name: string;
	kind: ProjectKind;
	kindLabel: string;
	summary: string;
	body: string[];
	film: FilmKey;
	drawings: { kind: DrawingKind; label: string }[];
}

export const kindFilters = [
	{ id: "all", label: "All rooms" },
	{ id: "jewelry", label: "Jewelry showrooms" },
	{ id: "residence", label: "Residences" },
	{ id: "banquet", label: "Banquet halls" },
] as const;

export const projects: Project[] = [
	{
		slug: "the-necklace-room",
		name: "The Necklace Room",
		kind: "jewelry",
		kindLabel: "Jewelry showroom",
		summary:
			"A showroom planned as a short street of cases, so a visitor can stop without blocking the person behind them.",
		body: [
			"The room is narrow enough to feel attended and long enough for a set to be shown one piece at a time. Wall cases take the gold that should be seen in profile. A brass-lined island holds the sets that need a private conversation.",
			"Light is aimed at the metal, not at the ceiling. The circulation lets a family stand at a case while another family passes. A smaller room behind the counter is for bridal viewing, with the door out of the main sightline.",
		],
		film: "jewelry",
		drawings: [
			{ kind: "vitrine", label: "Plan of a jewelry room" },
			{ kind: "pavilion", label: "Front of a showroom" },
		],
	},
	{
		slug: "counter-of-light",
		name: "Counter of Light",
		kind: "jewelry",
		kindLabel: "Jewelry showroom",
		summary:
			"A compact bridal room where the counter, the mirror, and the case share one pool of light.",
		body: [
			"This is the smaller commission: one counter, one seated client, and a case that can be locked without looking like a vault. The mirror is placed so the piece is seen on the person, not only in the tray.",
			"Staff move behind the counter. Clients never cross that line. Storage sits below the eye, so the wall above the case stays quiet.",
		],
		film: "jewelry",
		drawings: [
			{ kind: "vitrine", label: "Plan of the bridal counter" },
			{ kind: "stair", label: "Section through the mezzanine store" },
		],
	},
	{
		slug: "house-with-a-court",
		name: "House with a Court",
		kind: "residence",
		kindLabel: "Residence",
		summary:
			"Family rooms around an open court, so the day can cross the house without a corridor doing all the work.",
		body: [
			"The court is the centre. Morning rooms face it. The kitchen can serve both the family table and a larger gathering without sending guests through the cooking.",
			"Elders have a room on the ground floor, near the entry and clear of the stair. The upper floor is for the quieter night rooms, with a veranda back toward the court.",
		],
		film: "residence",
		drawings: [
			{ kind: "court", label: "Plan of a courtyard house" },
			{ kind: "stair", label: "Section through the stair" },
		],
	},
	{
		slug: "rooms-under-a-neem",
		name: "Rooms under a Neem",
		kind: "residence",
		kindLabel: "Residence",
		summary:
			"A house that keeps the existing tree and turns the veranda toward it.",
		body: [
			"The tree stays. The veranda is the main room for most of the year, deep enough to sit out of the rain and the sun. Bedrooms tuck behind it.",
			"The kitchen opens to a work yard, not to the front. Guests arrive at the veranda. The family can still reach the kitchen without crossing that arrival.",
		],
		film: "kitchen",
		drawings: [
			{ kind: "court", label: "Plan with the tree held in the court" },
			{ kind: "pavilion", label: "Veranda elevation" },
		],
	},
	{
		slug: "the-long-table",
		name: "The Long Table",
		kind: "banquet",
		kindLabel: "Banquet hall",
		summary:
			"A hall sequenced from the arrival court to the dining floor, with stage light kept off the guests.",
		body: [
			"The day of a wedding is a sequence, not a single room. Cars stop at a court. Guests move through a lower foyer. The hall opens only after that, so the first view is of people, not of a stage.",
			"The kitchen has its own path to the service side of the hall. The bridal room sits off the foyer, close to the entrance and clear of the serving route. Elders have a room with a view of the hall and a door of their own.",
		],
		film: "hall",
		drawings: [
			{ kind: "hall", label: "Section through a banquet hall" },
			{ kind: "pavilion", label: "Arrival front" },
		],
	},
	{
		slug: "evening-hall",
		name: "Evening Hall",
		kind: "banquet",
		kindLabel: "Banquet hall",
		summary:
			"A taller hall for an evening gathering, with the stage, the elders, and the kitchen kept in separate orders of movement.",
		body: [
			"The section is tall so the room can hold a crowd without feeling pressed. Windows sit high, which keeps the walls free for guests and keeps the afternoon sun off the table.",
			"Sound is planned with the section: the stage is a step away, not a wall of speakers aimed at the nearest table. The kitchen door is on the long side, so service does not cross the entrance photograph.",
		],
		film: "hall",
		drawings: [
			{ kind: "hall", label: "Long section of the evening hall" },
			{ kind: "stair", label: "Section at the entry stair" },
		],
	},
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
