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

The homepage combines a project walkthrough, the founder portrait, selected work, a design-to-built comparison and expertise. The comparison retains its original tall, edge-to-edge images and draggable divider, with a smaller spatial study alongside it and rounded corners. The supporting pages share the same design system.

The studio introduction pairs the original story with a black-and-gold milestone panel inspired by an architectural title block. The first-project date spans the panel, with the other four facts below it. The two columns stack below 800px; the journey page retains its existing facts layout.

## Project stories

Immediately after the introduction, the homepage restores the overlapping fan of vertical project cards from the original reference. The cards have white surfaces, black titles and gold accents, with rounded corners. Each keeps its image above the project name and story link. Previous/next arrows, project selectors, a position counter and keyboard arrows/Home/End bring a card forward. Controls retain focus during repeated clicks; reduced-motion preferences remove the transitions. Tablets and phones use a regular card grid, which is also the no-JavaScript fallback. There is no automatic rotation.

Only the ten supplied client folders are featured as projects: Urmil Jewellers Yamuna Vihar, Urmil Jewellers Madhu Vihar, Urmil Jewellers Durgapuri, Giri Zevar Mahal and Giri Zevar Mahal Krishna, Ganga Jewellers Corporate Office, Sona Fashion / Ganga Jewellers, Guru Kripa Jewellers, OM Shiv Giri Jewellers and Umeed Harpal Gaoshala. Cards use elevation concepts where available; Ganga Jewellers Corporate Office and Giri Zevar Mahal Krishna use interior views, while Sona Fashion uses a built storefront photograph. Homepage cards show the full images without cropping; portfolio cards fill their image frames. All cards contain images only. The full original client directory remains on `/portfolio`. The story copy is client-authorised draft writing based on the images, rather than a record of approved project briefs. The original Urmil project is titled “Urmil Jewellers Yamuna Vihar” across its homepage card, portfolio card and story heading, matching the naming of the Madhu Vihar and Durgapuri branches. It retains the `/portfolio/urmil` route. The branch name also appears in the carousel controls and accessible labels; there is no separate location badge. Its imagery includes the refreshed corner-facade concepts, storefront study and site photographs. Madhu Vihar has its own `/portfolio/urmilMadhuVihar` story with all six images from that folder; its interiors and spatial plan are kept with that branch. Durgapuri has a separate `/portfolio/urmilDurgapuri` story with its elevation concept, built exterior photograph and all five interior views. Giri shows elevation concepts alongside built exterior photography. Ganga's story uses five images, with the new Ganga7 corporate office cutaway replacing Ganga1, and its full design walkthrough. Guru Kripa includes both elevation concepts and all three interior views. OM Shiv Giri includes its elevation and all five interior views, including the overhead spatial study and glazed consultation area. Umeed Harpal Gaoshala has its own `/portfolio/umeedHarpalGaoshala` architectural story, with its gateway, exterior concepts and all four spatial studies. Design concepts and site photographs are labelled separately throughout.

To add the next client's project after its folder is supplied, add a camelCase ID, interior hero metadata and a still `cardImage` to `src/data/projects.ts`, then a matching entry in `src/data/projectStories.ts`. Set the card image `kind` to `elevation` when an elevation is supplied, or `interior` when using an interior still. Optional project-specific video belongs in the story's `film` entry, never in a card. The typed story record requires an entry for every listed project. The homepage cards, portfolio cards, individual routes and next-project links are generated from this data. Keep the original client names; use camelCase for code and derivative asset paths. Each image needs its real dimensions, alternative text and a caption that distinguishes a concept from a site photograph.

The original `architectDesignDemoVideo` film is used only as the homepage hero background. The About page replaces the repeated video with an architectural photo composition. The Urmil story uses still imagery and no longer repeats that film. Ganga's separate `gangaJewelers` video appears only on its project page, with muted looping playback, no playback controls, and the shared reduced-motion and offscreen-pause behaviour.

## Image sizing

Project stories alternate their image-and-text sections on desktop: the opening places text on the left and the image on the right, the first illustrated chapter reverses that arrangement, and subsequent illustrated chapters continue the pattern. Text-only chapters do not interrupt the image sequence. On phones, each section stacks its text above its image to keep the reading order consistent.

`ProjectImage.astro` gives project imagery a shared rounded 4:3 frame. On `/portfolio` and individual project-story pages, images fill that frame using `object-fit: cover`, cropping to its edges without distortion or empty bands. Story image links still open the full original view. This treatment is scoped through the `portfolioPage` body class; the homepage, Services, About and Journey retain their existing full-image sizing. Original image files, dimensions and camelCase derivative names remain intact.

Each Services section has media, with metadata in `src/data/services.ts`. Residential and Architectural use locally downloaded Unsplash demo photos, explicitly labelled as inspiration with photographer credits. Jewellery retains the supplied Giri interior. Commercial uses the uploaded `Commercial.mp4` walkthrough, playing silently on a loop without playback controls. All four use the same rounded 4:3 frame and alternate beside the original service copy on desktop, stacking on phones. Images and the video's poster remain visible without scroll-reveal clipping, including direct service anchors. The shared video observer pauses playback offscreen, in hidden tabs and for reduced-motion preferences.

The demo assets in `public/images/services/` are 1600×1200 WebP images downloaded on 12 November 2026 under the [Unsplash License](https://unsplash.com/license):

- `residentialDemo.webp`: [Clay Banks: modern living room with large windows overlooking trees](https://unsplash.com/photos/modern-living-room-with-large-windows-overlooking-trees-A9DmoCgM5iw).
- `architecturalDemo.webp`: [Alef Morais: modern house with wooden facade and stone accents](https://unsplash.com/photos/modern-house-with-wooden-facade-and-stone-accents-emnfe1YR6io).

Related sections use equal grid columns and the same `--projectImageGap`, so image widths and heights match across repeated sections on a page. About-page images align in equal frames without offsets. Project story opening images, chapter illustrations, concept/built pairs and next-project previews share the same column width. The founder photo on About uses the same frame, while the homepage hero retains its dedicated viewport-fitting portrait. All 46 images from the eight supplied project folders are used in their corresponding stories; the supplied founder photograph appears on the homepage and About page. The Urmil comparison uses the original branch's current elevation and built photograph, while its neighbouring spatial study is explicitly labelled as Madhu Vihar.

Shared `--radiusMedia` (20px) and `--radiusCard` (28px) tokens give images, cards, the portrait frame, video frame, milestone panel and process board consistent rounded corners. Images are rounded at their actual visible bounds as well as their outer frames. The native comparison viewer follows the same treatment.

## Work process

The homepage includes an eight-stage process section, from the first conversation and site study through planning, design, execution, final review and handover. Draft demonstration copy is stored as `workProcessSteps` in `src/data/content.ts`; confirm the stages and scope with the client before treating them as the studio’s final process.

The presentation pairs native expandable steps with a black-and-gold architectural drafting board. Opening a stage updates the drawing, stage counter and outcome; eight layers gradually assemble an illustrative building. The board stays beside the steps on taller desktop screens and stacks above them on phones. Native details controls preserve keyboard access and work without JavaScript; the diagram is decorative and all original descriptions remain in the HTML. Reduced-motion preferences make changes immediate. Interaction listeners are cleaned up during Astro navigation.

## Header and motion

The header overlays the top of each page transparently. Its text is white and light gold over the dark homepage hero, and black and deeper gold over the light inner pages. It becomes solid from the first scroll movement, hides after deliberate downward scrolling, and returns when scrolling upward. An open mobile menu or keyboard-focused navigation keeps it visible; pointer focus left on the menu button does not prevent it hiding after the menu closes. Scroll listeners use animation frames, handle history restores, and are removed between Astro page transitions.

The hero has one entrance sequence, project images reveal as they enter view, and selected section headings and controls use restrained motion. Image reveals observe their unclipped parent containers, then reveal the image itself, so a clipped image cannot prevent its own intersection callback and remain blank. Shared triggers reveal all associated elements. Studio facts, expertise links and featured client groups reveal in a short stagger, and the mobile menu opens with a brief entrance animation. Reduced-motion preferences show all content immediately and remove the animations. The fixed header is included in the homepage's single-viewport layout.

The loading screen uses only the logo and a thin gold progress line on black, with a brief fade out after 750ms. It appears once per session, is skipped for reduced-motion preferences, and has a 1.5-second fallback if the page script is delayed.

Run the header, project-deck and process interaction tests with `npm test`.

## Client assets

Original uploads are preserved locally in `public/`. Browser versions live in `public/images/`, `public/videos/`, and `public/posters/`. The large source video and TIFF are kept locally and excluded from Git; their optimised browser versions are committed, so a fresh checkout contains everything needed to build and display the website. The original camelCase meanings are retained in the asset keys in `src/data/projects.ts`.

- `Urmil.jpg`: Urmil interior.
- `UrmilBefore.jpg`: design visualisation, shown on the left side of the comparison.
- `UrmilAfter.jpg`: built exterior photograph, shown on the right.
- `Urmilmap.jpg`: three-dimensional spatial plan, kept with the Urmil project.
- Earlier individual project uploads are retained as local sources; current project imagery uses only the eight supplied client folders.
- `ArchitectDesignDemoVideo.mp4`: the complete uploaded walkthrough, transcoded to H.264 with fast-start delivery, muted autoplay and looping. Playback controls are intentionally absent. Reduced-motion preferences show a static frame; offscreen and hidden-tab videos pause automatically.
- `Commercial.mp4`: the complete 346.8-second commercial-building walkthrough, preserved locally as the source master. The browser copy is H.264 at the original 1024×768 resolution in `public/videos/commercial.mp4`, with fast-start delivery and a still in `public/posters/commercial.jpg`. It appears only in the Services page's Commercial section. The large source master is excluded from Git and the generated build.
- `ganga jeweller lal quater 1.pdf`: retained as a source upload; the layout-plan viewer has been removed from the website.
- `Urmil Yamuna Vihar/`: two corner elevation concepts, a storefront concept, a nighttime site photograph and a daytime built-exterior photograph; optimised copies live in `public/images/projects/urmilYamunaVihar/`. The card is titled Urmil Jewellers Yamuna Vihar, with the location included in the title.
- `Urmil Madhu Vihar/`: a slender elevation concept, three interior views, a window-display concept and a three-dimensional spatial study; optimised copies live in `public/images/projects/urmilMadhuVihar/`. The source spelling `Interio3` is retained in the derivative filename. Previously misplaced interior and plan derivatives are removed from the other branch's directory.
- `Urmil Durgapuri/`: an elevation concept, a built exterior photograph and five interior design views; optimised copies live in `public/images/projects/urmilDurgapuri/`. The homepage and portfolio use the elevation as the branch card image. All seven views are included in its story, with concepts and site photography labelled separately.
- `Giri Zewar Mahal/`: three interior views, elevation concept and built exterior; optimised copies live in `public/images/projects/giriZewarMahal/`.
- `Giri Zevar Mahal Krishna/`: five interior views and one overall showroom view; optimised copies live in `public/images/projects/giriZevarMahalKrishna/`. Its card and project story identify the location as Omax Mall, Chandni Chowk.
- `Ganga Jewellers/`: six interior/spatial visualisations and `GangaJewelers.mp4`. Ganga7 is the new corporate-office cutaway used in the story in place of Ganga1. Optimised stills live in `public/images/projects/gangaJewellers/`. The complete 81-second, 1920×1080 H.264 source is converted to browser-compatible H.264 at 1280×720 and 30 fps with fast-start delivery in `public/videos/gangaJewelers.mp4`; its poster lives in `public/posters/gangaJewelers.jpg`.
- `Sona Fasion : Ganga Jewellers/`: one built storefront photograph and four interior visualisations; optimised copies live in `public/images/projects/sonaFashionGangaJewellers/`.
- `GuruKripaJewellers/`: two elevation concepts and three interior visualisations; optimised copies live in `public/images/projects/guruKripaJewellers/`. The source spelling `GuruKripaElivation` is retained in its camelCase derivative filename. No completed-site photograph was supplied for this project.
- `OM Shiv Giri Jewellers/`: one elevation concept and five interior visualisations; optimised copies live in `public/images/projects/omShivGiriJewellers/`. The elevation is used on the homepage and portfolio cards. The linked story includes all six supplied images; no completed-site photograph was supplied.
- `Umeed Harpal Gaoshala/`: three elevation studies, an entrance-gateway concept and four spatial/site studies; optimised copies live in `public/images/projects/umeedHarpalGaoshala/`. Its daytime elevation appears on the homepage and portfolio cards, while the nighttime view opens the story; all eight images appear across the project page. The story enquiry links to the Architecture project type. Source spellings, including `Gaoshala` and `Enterance`, are retained in the derivative paths.
- `Mr.ShahnawazDesign10Owner.png`: the supplied owner photograph, with responsive WebP versions at 640, 960 and 1440px wide.

Large source masters, the original client image folders, the source portrait and the retired PDF layout drawing are excluded from the generated build by the `optimisedProjectMedia` integration in `astro.config.mjs`. Original uploads remain in `public/`.

## Founder photograph

The supplied owner photograph appears in the hero and on the about page. The hero gives the owner a dedicated portrait column, up to 640px wide, with a gold offset frame and large name panel. The photograph has responsive WebP sources and priority loading in the hero; the about-page version loads lazily. The uploaded project film runs across the hero background beneath a dark overlay. The header and hero together fit the visible viewport. On smaller screens the portrait appears above the text; short landscape screens use two columns. The primary portrait path is `studio.portrait` in `src/data/site.ts`; responsive sources are set in `FounderPortrait.astro`.

## Enquiries and launch

The contact page is designed and supports Formspree submission, validation, and error feedback. Enquiry submission stays disabled until a real endpoint is configured, so the site never reports a message as sent when no destination exists.

1. Set `PUBLIC_FORMSPREE_ENDPOINT` in `.env` to the studio’s real Formspree endpoint, then restart/rebuild.
2. Review the new image-based project narratives with the client.
3. Set the production domain in `astro.config.mjs` and update `public/robots.txt`.
4. Replace the labelled Residential and Architectural demo photos with client project photography when supplied.
5. Confirm the client’s preferred project spellings and contact details before launch.

## Pages

- `/`: Studio introduction and selected work.
- `/portfolio`: Named projects, transformation study and client directory.
- `/portfolio/[projectId]`: Individual project stories, generated for every project in `projects.ts`.
- `/about`: The founder and practice.
- `/services`: Residential, jewellery showroom, commercial and architectural design.
- `/journey`: The practice since 1996.
- `/contact`: Project enquiry.
