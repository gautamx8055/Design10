# Design10

An Astro website for Shahnawaz Ahmed’s architecture and interior design practice.

## Development

Use Node 22.12 or newer.

```sh
npm install
npm run dev -- --background
```

Manage the background server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

```sh
npm run check
npm run build
```

## Design

The visual system pairs solid black framing (`#111111`) with gold (`#c7a261`) and white (`#ffffff`). The header, hero and footer use the stronger black-and-gold treatment; the original studio copy remains the basis of the pages. Archivo sets the headings and DM Sans carries the body text. Original headings, history, expertise, statistics and client names live in `src/data/content.ts`, `src/data/site.ts` and `src/data/clients.ts`. Update presentation without replacing this content.

The homepage combines a project walkthrough, a founder portrait space, selected work, a design-to-built comparison, expertise, and the actual Ganga Jewellers PDF sheet. The supporting pages share the same design system.

## Client assets

Original uploads are preserved locally in `public/`. Browser versions live in `public/images/`, `public/videos/`, and `public/posters/`. The large source video and TIFF are kept locally and excluded from Git; their optimised browser versions are committed, so a fresh checkout contains everything needed to build and display the website. The original camelCase meanings are retained in the asset keys in `src/data/projects.ts`.

- `Urmil.jpg`: Urmil interior.
- `UrmilBefore.jpg`: design visualisation, shown on the left side of the comparison.
- `UrmilAfter.jpg`: built exterior photograph, shown on the right.
- `Urmilmap.jpg`: three-dimensional spatial plan, kept with the Urmil project.
- `GiriZevarMahal.jpg`, `PrabhuDayal.jpg`, and `KamalJewl.tif`: their respective projects. The TIFF has a browser-compatible WebP derivative.
- `ArchitectDesignDemoVideo.mp4`: the complete uploaded walkthrough, transcoded to H.264 with fast-start delivery, muted autoplay and looping. Playback controls are intentionally absent. Reduced-motion preferences show a static frame; offscreen and hidden-tab videos pause automatically.
- `ganga jeweller lal quater 1.pdf`: displayed directly using a locally bundled PDF.js worker. The viewer supports zoom, fit-to-width, scrolling, opening and downloading the original. A faithful image of the PDF page remains visible if JavaScript or PDF rendering is unavailable.

Large source masters are excluded from the generated build by the `optimisedProjectMedia` integration in `astro.config.mjs`. Their original files remain in `public/`; the PDF is included in the build.

## Founder photograph

The client has not supplied the owner’s photograph yet. The hero gives the owner a dedicated portrait column, up to 640px wide, with a gold offset frame and large name panel. The uploaded project film runs across the hero background beneath a dark overlay. The hero uses the visible viewport height minus the header height. The portrait fills the remaining space while the original headline and primary button stay visible. On smaller screens the portrait appears above the text; short landscape screens use two columns. The studio page also reserves a labelled portrait space. To add the photograph, place the image in `public/images/` and set `studio.portrait` in `src/data/site.ts`. Both locations update together.

## Enquiries and launch

The contact page is designed and supports Formspree submission, validation, and error feedback. Enquiry submission stays disabled until a real endpoint is configured, so the site never reports a message as sent when no destination exists.

1. Set `PUBLIC_FORMSPREE_ENDPOINT` in `.env` to the studio’s real Formspree endpoint, then restart/rebuild.
2. Add the approved founder portrait.
3. Set the production domain in `astro.config.mjs` and update `public/robots.txt`.
4. Review and replace the residential reference image in `public/posters/residence.jpg` when a client-owned residential image is available.
5. Confirm the client’s preferred project spellings and contact details before launch.

## Pages

- `/`: Studio introduction and selected work.
- `/portfolio`: Named projects, transformation study, PDF layout and client directory.
- `/about`: The founder and practice.
- `/services`: Residential, jewellery showroom, commercial and architectural design.
- `/journey`: The practice since 1996.
- `/contact`: Project enquiry.
