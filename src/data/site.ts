export const studio = {
	name: "Design10 Entire Interior Pvt. Ltd.",
	shortName: "Design10",
	disciplines: "Architecture | Interior | Design",
	principal: "Mr. Shahnawaz Ahmed",
	founderTitle: "Founder & Principal Designer",
	role: "Founder & Principal Designer",
	// Set this path when the client supplies the founder portrait.
	portrait: "",
	since: 1996,
	founded: "6 October 1996",
	email: "studio@design10.example",
	phone: "+91 00000 00000",
	phoneHref: "tel:+910000000000",
	city: "Studio address to be added",
	statement: "Three Decades of Design Excellence. A Legacy Built on Trust.",
	summary:
		"Design10 Entire Interior Pvt. Ltd. is the architecture and interior practice of Shahnawaz Ahmed, founded on 6 October 1996. The studio has completed 1000+ residential and commercial projects across India.",
	quote:
		"Every space should have a purpose. Every detail should tell a story. And every design should stand the test of time.",
};

export const nav = [
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/journey", label: "Our Journey" },
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
