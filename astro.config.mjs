// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Replace `site` with the real domain before launch. Canonical URLs and the sitemap use it.
export default defineConfig({
	site: "https://shahnawaz.example",
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/404"),
		}),
	],
});
