export const studio = {
	name: "Design 10 Entire Interior",
	shortName: "Design 10",
	principal: "Mr. Shahnawaz",
	role: "Architect",
	since: 1996,
	email: "studio@design10.example",
	phone: "+91 00000 00000",
	phoneHref: "tel:+910000000000",
	city: "Studio address to be added",
	statement:
		"Complete interiors for jewelry showrooms, homes, and banquet halls.",
	summary:
		"Design 10 Entire Interior completes jewelry showrooms, residences, and banquet halls. Mr. Shahnawaz has led the studio since 1996.",
};

export const nav = [
	{ href: "/work", label: "Work" },
	{ href: "/journey", label: "Journey" },
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/testimonials", label: "Testimonials" },
	{ href: "/contact", label: "Contact" },
] as const;

/** Replace with the real Formspree form URL, or set PUBLIC_FORMSPREE_ENDPOINT in `.env`. */
export const formEndpoint =
	import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ||
	"https://formspree.io/f/replace-me";

export const films = {
	hall: {
		src: "/videos/hall.mp4",
		poster: "/posters/hall.jpg",
		caption: "Reference film of a stair hall in daylight.",
	},
	jewelry: {
		src: "/videos/jewelry.mp4",
		poster: "/posters/jewelry.jpg",
		caption: "Reference film of a jewelry display.",
	},
	residence: {
		src: "/videos/residence.mp4",
		poster: "/posters/residence.jpg",
		caption: "Reference film of a dining room opening toward the kitchen.",
	},
	kitchen: {
		src: "/videos/kitchen.mp4",
		poster: "/posters/kitchen.jpg",
		caption: "Reference film of a working kitchen.",
	},
} as const;

export type FilmKey = keyof typeof films;
