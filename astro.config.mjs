// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { rm } from "node:fs/promises";

// Keep uploaded masters and retired drawings locally. Only active browser
// assets are published; this removes generated build copies, never source files.
const excludedPublicAssets = [
	"ArchitectDesignDemoVideo.mp4", "KamalJewl.tif", "Urmil.jpg",
	"UrmilBefore.jpg", "UrmilAfter.jpg", "Urmilmap.jpg",
	"GiriZevarMahal.jpg", "PrabhuDayal.jpg",
	"ganga jeweller lal quater 1.pdf", "images/gangaJewellerPlan.webp",
	"Urmil Yamuna Vihar/", "Giri Zever Mahal/", "Giri Zevar Mahal Krishna/", "Mr.ShahnawazDesign10Owner.png",
	"Ganga Jewellers/", "Sona Fasion : Ganga Jewellers/",
	"GuruKripaJewellers/",
	"OM Shiv Giri Jewellers/",
	"Urmil jewellers Ram Nagar/",
	"Urmil Madhu Vihar/",
	"Urmil Durgapuri/",
	"Umeed Harpal Gaoshala/",
	"Commercial.mp4",
];

// Replace `site` with the real domain before launch. Canonical URLs and the sitemap use it.
export default defineConfig({
	site: "https://shahnawaz.example",
	integrations: [
		{
			name: "optimisedProjectMedia",
			hooks: {
				"astro:build:done": async ({ dir }) => {
					await Promise.all(excludedPublicAssets.map((filename) => rm(new URL(filename, dir), { force: true, recursive: true })));
				},
			},
		},
		sitemap({
			filter: (page) => !page.includes("/404"),
		}),
	],
});
