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

The homepage combines a project walkthrough, the founder portrait, selected work, a design-to-built comparison and expertise. The supporting pages share the same design system.

The studio introduction pairs the original story with a black-and-gold milestone panel inspired by an architectural title block. The first-project date spans the panel, with the other four facts below it. The two columns stack below 800px; the journey page retains its existing facts layout.

## Project stories

Immediately after the introduction, the homepage presents the projects as a layered card deck. Each card opens its own project story. Previous/next controls and project-name buttons bring a card forward; keyboard focus also reveals the selected card, with arrow, Home and End navigation on desktop. Tablets and phones use a normal card grid, which is also the no-JavaScript fallback.

Only the three supplied client folders are featured as projects: Urmil Jewellers, Giri Zevar Mahal and Ganga Jewellers. Urmil and Giri cards use their elevation concepts, shown in full without cropping. Ganga has no supplied elevation, so its card uses an interior still. All cards contain images only. The full original client directory remains on `/portfolio`. The story copy is client-authorised draft writing based on the images, rather than a record of approved project briefs. Urmil and Giri show their elevation concepts alongside the built exterior photographs. Ganga includes all three supplied images and its own full design walkthrough. Other project images across the site also come from these folders.

To add the next client's project after its folder is supplied, add a camelCase ID, interior hero metadata and a still `cardImage` to `src/data/projects.ts`, then a matching entry in `src/data/projectStories.ts`. Set the card image `kind` to `elevation` when an elevation is supplied, or `interior` when using an interior still. Optional project-specific video belongs in the story's `film` entry, never in a card. The typed story record requires an entry for every listed project. The homepage cards, portfolio cards, individual routes and next-project links are generated from this data. Keep the original client names; use camelCase for code and derivative asset paths. Each image needs its real dimensions, alternative text and a caption that distinguishes a concept from a site photograph.

The original `architectDesignDemoVideo` film is used only as the homepage hero background. The About page replaces the repeated video with an architectural photo composition. The Urmil story uses still imagery and no longer repeats that film. Ganga's separate `gangaJewelers` video appears only on its project page, with muted looping playback, no playback controls, and the shared reduced-motion and offscreen-pause behaviour.

## Work process

The homepage includes an eight-stage process section, from the first conversation and site study through planning, design, execution, final review and handover. Draft demonstration copy is stored as `workProcessSteps` in `src/data/content.ts`; confirm the stages and scope with the client before treating them as the studio’s final process.

The presentation pairs native expandable steps with a black-and-gold architectural drafting board. Opening a stage updates the drawing, stage counter and outcome; eight layers gradually assemble an illustrative building. The board stays beside the steps on taller desktop screens and stacks above them on phones. Native details controls preserve keyboard access and work without JavaScript; the diagram is decorative and all original descriptions remain in the HTML. Reduced-motion preferences make changes immediate. Interaction listeners are cleaned up during Astro navigation.

## Header and motion

The header overlays the top of each page transparently. Its text is white and light gold over the dark homepage hero, and black and deeper gold over the light inner pages. It becomes solid from the first scroll movement, hides after deliberate downward scrolling, and returns when scrolling upward. An open mobile menu or keyboard-focused navigation keeps it visible; pointer focus left on the menu button does not prevent it hiding after the menu closes. Scroll listeners use animation frames, handle history restores, and are removed between Astro page transitions.

The hero has one entrance sequence, project images reveal as they enter view, and selected section headings and controls use restrained motion. Studio facts, expertise links and featured client groups reveal in a short stagger, and the mobile menu opens with a brief entrance animation. Reduced-motion preferences show all content immediately and remove the animations. The fixed header is included in the homepage's single-viewport layout.

Run the header, project-deck and process interaction tests with `npm test`.

## Client assets

Original uploads are preserved locally in `public/`. Browser versions live in `public/images/`, `public/videos/`, and `public/posters/`. The large source video and TIFF are kept locally and excluded from Git; their optimised browser versions are committed, so a fresh checkout contains everything needed to build and display the website. The original camelCase meanings are retained in the asset keys in `src/data/projects.ts`.

- `Urmil.jpg`: Urmil interior.
- `UrmilBefore.jpg`: design visualisation, shown on the left side of the comparison.
- `UrmilAfter.jpg`: built exterior photograph, shown on the right.
- `Urmilmap.jpg`: three-dimensional spatial plan, kept with the Urmil project.
- Earlier individual project uploads are retained as local sources; current project imagery uses only the three supplied client folders.
- `ArchitectDesignDemoVideo.mp4`: the complete uploaded walkthrough, transcoded to H.264 with fast-start delivery, muted autoplay and looping. Playback controls are intentionally absent. Reduced-motion preferences show a static frame; offscreen and hidden-tab videos pause automatically.
- `ganga jeweller lal quater 1.pdf`: retained as a source upload; the layout-plan viewer has been removed from the website.
- `Urmil Yamuna Vihar/`: interior, three-dimensional spatial study, elevation concept and built exterior; optimised copies live in `public/images/projects/urmilYamunaVihar/`.
- `Giri Zewar Mahal/`: two interior views, elevation concept and built exterior; optimised copies live in `public/images/projects/giriZewarMahal/`.
- `Ganga Jewellers/`: three interior/spatial visualisations and `GangaJewelers.mp4`. Optimised stills live in `public/images/projects/gangaJewellers/`. The complete 199.57-second HEVC source is converted to browser-compatible H.264 at 1280×720 with fast-start delivery in `public/videos/gangaJewelers.mp4`; its poster lives in `public/posters/`.
- `Mr.ShahnawazDesign10Owner.png`: the supplied owner photograph, with responsive WebP versions at 640, 960 and 1440px wide.

Large source masters, the original client image folders, the source portrait and the retired PDF layout drawing are excluded from the generated build by the `optimisedProjectMedia` integration in `astro.config.mjs`. Original uploads remain in `public/`.

## Founder photograph

The supplied owner photograph appears in the hero and on the about page. The hero gives the owner a dedicated portrait column, up to 640px wide, with a gold offset frame and large name panel. The photograph has responsive WebP sources and priority loading in the hero; the about-page version loads lazily. The uploaded project film runs across the hero background beneath a dark overlay. The header and hero together fit the visible viewport. On smaller screens the portrait appears above the text; short landscape screens use two columns. The primary portrait path is `studio.portrait` in `src/data/site.ts`; responsive sources are set in `FounderPortrait.astro`.

## Enquiries and launch

The contact page is designed and supports Formspree submission, validation, and error feedback. Enquiry submission stays disabled until a real endpoint is configured, so the site never reports a message as sent when no destination exists.

1. Set `PUBLIC_FORMSPREE_ENDPOINT` in `.env` to the studio’s real Formspree endpoint, then restart/rebuild.
2. Review the new image-based project narratives with the client.
3. Set the production domain in `astro.config.mjs` and update `public/robots.txt`.
4. Add residential project photography when the client supplies it; the residential service currently uses a text layout.
5. Confirm the client’s preferred project spellings and contact details before launch.

## Pages

- `/`: Studio introduction and selected work.
- `/portfolio`: Named projects, transformation study and client directory.
- `/portfolio/[projectId]`: Individual project stories, generated for every project in `projects.ts`.
- `/about`: The founder and practice.
- `/services`: Residential, jewellery showroom, commercial and architectural design.
- `/journey`: The practice since 1996.
- `/contact`: Project enquiry.
