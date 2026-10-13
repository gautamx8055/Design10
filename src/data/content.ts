import type { DrawingKind } from "./drawings";

export const journey = [
	{
		year: "1996",
		title: "The practice opens",
		text: "Mr. Shahnawaz begins the studio. The first work is measured drawing and site visits, learning how a room is actually used before it is finished.",
	},
	{
		year: "2003",
		title: "Showrooms, and the problem of light on metal",
		text: "Jewelry rooms become a steady part of the work. The lesson is simple and hard: a case has to show the piece, and the crowd has to be able to stop.",
	},
	{
		year: "2011",
		title: "Houses organised around a court",
		text: "Residential work settles into a pattern the studio still trusts. Family rooms face a court or a veranda, and the stair does not cut the elders off from the entry.",
	},
	{
		year: "2016",
		title: "Halls for a full day of gathering",
		text: "Banquet halls are planned as a sequence: arrival, foyer, hall, elders, bridal room, and a kitchen path that never crosses the door.",
	},
	{
		year: "2024",
		title: "Still on paper, still on site",
		text: "The studio remains with the same three kinds of rooms. Drawings still start by hand. The principal still walks the site.",
	},
];

export const services: {
	id: string;
	title: string;
	text: string;
	kind: DrawingKind;
	label: string;
}[] = [
	{
		id: "showrooms",
		title: "Jewelry showrooms",
		text: "Cases, counters, and a path for people who need to stop. Private viewing for bridal sets, storage out of sight, and light aimed at the metal. The front can read as a showroom from the street without giving the whole inventory away.",
		kind: "vitrine",
		label: "Plan of a jewelry room",
	},
	{
		id: "residences",
		title: "Residences",
		text: "Houses for families who share a day. Courts, verandas, a ground-floor room for elders, and a kitchen that can serve both a quiet meal and a gathering. The stair, the entry, and the work yard are drawn before the finishes.",
		kind: "court",
		label: "Plan of a courtyard house",
	},
	{
		id: "halls",
		title: "Banquet halls",
		text: "A wedding day has an order. Arrival, foyer, hall, stage, elders, bridal room, and kitchen are separate routes. The section keeps stage light and afternoon sun off the guests, and the service door stays off the entrance.",
		kind: "hall",
		label: "Section through a banquet hall",
	},
];

export const process = [
	{
		title: "Listen",
		text: "The first meeting is about the day the room has to hold: a sale, a family afternoon, or a wedding from arrival to the last table.",
	},
	{
		title: "Draw",
		text: "A plan and a section come before a material board. The drawing is how the studio and the client agree on movement, light, and what is hidden.",
	},
	{
		title: "Choose materials",
		text: "Stone, brass, timber, and plaster are chosen for the hand as much as for the photograph. In a showroom, the case lining matters as much as the facade.",
	},
	{
		title: "Stay with the site",
		text: "The studio reviews the work as it is built, so the drawing and the contractor’s sequence stay in the same conversation.",
	},
];

export const testimonials = [
	{
		quote:
			"The cases finally show the jewellery. People stop where we hoped they would, and the next family can still pass.",
		by: "Proprietor of a jewelry showroom",
	},
	{
		quote:
			"The court is where the children end up. The rooms around it stay quiet enough for the afternoon.",
		by: "A family in a courtyard house",
	},
	{
		quote:
			"Guests arrive, eat, and leave without the kitchen ever crossing the hall. That was the brief, and it is how the building works.",
		by: "Host of a banquet hall",
	},
	{
		quote:
			"He asked how the wedding day actually moves, before he asked about the ceiling.",
		by: "A client for a wedding hall",
	},
];
