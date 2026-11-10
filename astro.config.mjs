// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { rm } from "node:fs/promises";

// Keep the uploaded masters in public/ for the client, but publish their
// optimised derivatives. Only generated build copies are removed here.
const sourceMasters = [
	"ArchitectDesignDemoVideo.mp4", "KamalJewl.tif", "Urmil.jpg",
	"UrmilBefore.jpg", "UrmilAfter.jpg", "Urmilmap.jpg",
	"GiriZevarMahal.jpg", "PrabhuDayal.jpg",
];

// Replace `site` with the real domain before launch. Canonical URLs and the sitemap use it.
export default defineConfig({
	site: "https://shahnawaz.example",
	integrations: [
		{
			name: "optimisedProjectMedia",
			hooks: {
				"astro:build:done": async ({ dir }) => {
					await Promise.all(sourceMasters.map((filename) => rm(new URL(filename, dir), { force: true })));
				},
			},
		},
		sitemap({
			filter: (page) => !page.includes("/404"),
		}),
	],
});
