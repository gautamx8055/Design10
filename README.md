# Shahnawaz

Architecture studio site for Mr. Shahnawaz, practising since 1996. Built with Astro.

## Run

```bash
npm install
npm run dev
```

## Before launch

1. Copy `.env.example` to `.env` and set `PUBLIC_FORMSPREE_ENDPOINT` to the Formspree form URL (`https://formspree.io/f/…`). Restart the dev server after changing it.
2. Replace the placeholder email, phone, and city in `src/data/site.ts`.
3. Replace sample projects, journey entries, and testimonials in `src/data/projects.ts` and `src/data/content.ts`.
4. Swap the reference films in `public/videos` and posters in `public/posters` for the studio’s own footage.
5. Set `site` in `astro.config.mjs` to the real domain, and match it in `public/robots.txt`.

## Pages

- `/` Home, with a film in the hero and a note on Mr. Shahnawaz
- `/work` and `/work/[slug]` Jewelry showrooms, residences, and banquet halls
- `/journey`
- `/about`
- `/services`
- `/testimonials`
- `/contact` Formspree form
# Design10
