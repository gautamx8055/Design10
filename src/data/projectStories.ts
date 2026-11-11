import type { ProjectId } from "./projects";

export interface StoryImage {
 src: string;
 width: number;
 height: number;
 alt: string;
 caption: string;
}

export interface StoryChapter {
 id: string;
 title: string;
 paragraphs: string[];
 image?: StoryImage;
}

export interface ProjectStory {
 location?: string;
 representation: string;
 lead: string;
 materials: string[];
 chapters: StoryChapter[];
 evolution?: { concept: StoryImage; built: StoryImage };
 film?: { src: string; poster: string; width: number; height: number; caption: string };
 outcome: { title: string; text: string; details: string[] };
}

const urmilInterior: StoryImage = {
 src: "/images/projects/urmilYamunaVihar/urmilInterior.webp", width: 1500, height: 1050,
 alt: "Urmil interior design showing curved glass displays, cream seating, timber ceiling details and illuminated jewellery niches",
 caption: "Urmil / Interior design visualisation",
};
const urmilSpatialPlan: StoryImage = {
 src: "/images/projects/urmilYamunaVihar/urmilSpatialPlan.webp", width: 1500, height: 1050,
 alt: "Three-dimensional spatial study of Urmil showing the display counters, visitor seating, circulation and rooms behind the showroom",
 caption: "Urmil / Three-dimensional spatial study",
};
const giriInterior: StoryImage = {
 src: "/images/projects/giriZewarMahal/giriInterior1.webp", width: 1280, height: 720,
 alt: "Giri Zewar Mahal interior visualisation with a central curved counter, flowing ceiling, warm lighting and perimeter display niches",
 caption: "Giri Zewar Mahal / Interior design visualisation",
};

/** Client-authorised draft narratives, interpreted from the supplied images.
 * Do not add dates, areas, budgets, testimonials or undocumented site events.
 * Add another project's entry here and in projects.ts to create its story page.
 */
export const projectStories: Record<ProjectId, ProjectStory> = {
 urmil: {
  representation: "Design & built exterior",
  lead: "A jewellery showroom shaped around a simple idea: make a significant purchase feel personal. From the street-facing identity to the conversation at the counter, Urmil brings display, comfort and a sense of occasion together.",
  materials: ["Warm timber", "Cream tones", "Glass displays", "Layered light"],
  chapters: [
   {
    id: "startingPoint", title: "A personal experience, from the first step.",
    paragraphs: ["Jewellery is often chosen slowly, through conversation and close attention. The starting point for this design story is the relationship between the visitor, the piece and the person presenting it.", "The showroom brings those three elements into a shared setting. A clear arrival, comfortable seating and an open view of the displays give the experience a calm, welcoming structure."],
   },
   {
    id: "inspiration", title: "Inspired by warmth and rhythm.", image: urmilInterior,
    paragraphs: ["The interior takes its character from warm timber, soft cream surfaces and a repeating rhythm of illuminated display niches. These elements give the room depth without competing with the jewellery.", "Curved counters and rounded ceiling forms soften the geometry. Their relationship creates a continuous visual language, carrying the eye from the display to the space above it."],
   },
   {
    id: "spacePlanning", title: "A place for every conversation.", image: urmilSpatialPlan,
    paragraphs: ["The spatial study makes the organisation of the showroom easy to read. Counters define the visitor experience, seating supports longer conversations, and a clear route connects the entrance with the rest of the space.", "The quieter rooms sit behind the main showroom. Thinking about public and working areas together gives the customer-facing interior a practical foundation."],
   },
   {
    id: "materialsAndLight", title: "Details that let the jewellery lead.",
    paragraphs: ["Glass keeps the display visually open. Pale seating and floor finishes hold the room together, while timber accents introduce warmth and definition.", "Lighting works at different scales: a general layer makes the room comfortable, while focused illumination gives the display niches and counters their own presence. The aim is a space that feels considered from the whole room down to the individual piece."],
   },
  ],
  evolution: {
   concept: { src: "/images/projects/urmilYamunaVihar/urmilElevation.webp", width: 1348, height: 1455, alt: "Urmil facade concept at dusk with dark cladding, illuminated branding and tall glazed display windows", caption: "Elevation concept / Design visualisation" },
   built: { src: "/images/projects/urmilYamunaVihar/urmilElevationIRL.webp", width: 1200, height: 1600, alt: "Photograph of the built Urmil Jewellers exterior with pale cladding and vertical showroom windows", caption: "Built exterior / Site photograph" },
  },
  outcome: {
   title: "An identity, inside and out.",
   text: "The supplied concept and built photograph show different expressions of the street-facing facade. Together with the interior and spatial study, they reveal the relationship between a recognisable jewellery house and the experience within it.",
   details: ["A welcoming showroom setting", "A clear relationship between display and seating", "An identity that extends to the street"],
  },
 },
 giriZevarMahal: {
  representation: "Design & built exterior",
  lead: "A jewellery house with a ceremonial presence. Giri Zevar Mahal brings together a richly framed exterior, flowing interior forms and intimate display settings, balancing the scale of the building with the detail of the piece.",
  materials: ["Deep green", "Brass detailing", "Pale marble tones", "Sculpted ceilings"],
  chapters: [
   {
    id: "startingPoint", title: "A presence worth arriving at.",
    paragraphs: ["The exterior sets the tone before a visitor steps inside. Its symmetry, framed openings and layered architectural details give the jewellery house a strong, recognisable address.", "The interior story works at a different scale. Here the focus moves from the building to the visitor, creating places to pause, sit and spend time with a collection."],
   },
   {
    id: "inspiration", title: "The room as a jewellery box.",
    paragraphs: ["Deep green panelling, warm metallic edges and carefully framed displays suggest the qualities of a jewellery box: a rich lining, a precise frame and an object given space to stand out.", "The facade uses a more ceremonial architectural language, with decorative crowns and strong vertical elements. Inside, the same attention to framing appears in a quieter, more personal form."],
   },
   {
    id: "spacePlanning", title: "An interior with a clear centre.", image: giriInterior,
    paragraphs: ["The wider interior visualisation is organised around a curved central counter. The ceiling follows its movement, giving the room a focal point and a sense of continuity.", "Perimeter displays make use of the edges, while open space around the centre keeps circulation legible. Seating and counters become places for conversation rather than interruptions to the room."],
   },
   {
    id: "materialsAndLight", title: "A consistent language, in every detail.",
    paragraphs: ["Green panels and brass accents give the display walls a distinctive rhythm. Pale stone-like surfaces keep the floor visually calm, allowing those details to carry the identity.", "Illuminated niches and layered ceiling light define the collection and the wider room separately. Decorative fixtures add a sense of occasion while the display lighting keeps attention close to the jewellery."],
   },
  ],
  evolution: {
   concept: { src: "/images/projects/giriZewarMahal/giriZewarMahalElevation.webp", width: 1594, height: 1800, alt: "Giri Zewar Mahal elevation visualisation showing an ornate symmetrical facade, decorative columns and a grand entrance", caption: "Elevation concept / Design visualisation" },
   built: { src: "/images/projects/giriZewarMahal/giriZewarElevationIRL.webp", width: 1200, height: 1600, alt: "Photograph of the built Giri Zewar Mahal facade with illuminated columns, decorative details and a street-level entrance", caption: "Built exterior / Site photograph" },
  },
  outcome: {
   title: "Grandeur, brought down to a personal scale.",
   text: "The project imagery connects a prominent exterior with thoughtfully framed interiors. Its character comes from that change in scale: a jewellery house seen from the street, and a personal experience discovered at the counter.",
   details: ["A recognisable architectural frontage", "A strong central showroom composition", "Richly detailed settings for individual pieces"],
  },
 },
 gangaJewellers: {
  representation: "Interior design & walkthrough",
  lead: "A jewellery showroom with room for different kinds of conversation. Ganga Jewellers connects a welcoming arrival, focused display areas and a quieter consultation room through a consistent language of light finishes, dark frames and warm accents.",
  materials: ["Pale stone tones", "Timber accents", "Black-framed glazing", "Sculptural lighting"],
  chapters: [
   {
    id: "startingPoint", title: "One showroom, different ways to meet.",
    paragraphs: ["Choosing jewellery can involve a quick visit to a display or a longer conversation in a quieter setting. The starting point for this design story is making room for both within one connected interior.", "The supplied views present the space at several scales: the overall arrangement, the display counters and a more private room. Each contributes to a visitor experience that moves from arrival towards closer attention."],
   },
   {
    id: "inspiration", title: "A calm backdrop with a precise frame.",
    image: { src: "/images/projects/gangaJewellers/ganga3.webp", width: 1600, height: 1008, alt: "Ganga Jewellers consultation room with pale chairs around a timber table, sculptural pendant lights and a glazed black partition", caption: "Ganga Jewellers / Consultation room visualisation" },
    paragraphs: ["Light wall finishes and soft seating give the interior a calm foundation. Black-framed glazing introduces a clear outline, while timber brings warmth to the places where visitors pause.", "The sculptural pendant lighting gives the consultation room a distinct character. It is a more intimate setting within the wider showroom, with a shared table and a quieter atmosphere."],
   },
   {
    id: "spacePlanning", title: "The whole space, considered together.",
    image: { src: "/images/projects/gangaJewellers/ganga1.webp", width: 1600, height: 1002, alt: "Ganga Jewellers three-dimensional cutaway showing the arrival, staircase, showroom counters and a separate consultation room", caption: "Ganga Jewellers / Three-dimensional spatial study" },
    paragraphs: ["The three-dimensional study reveals how the arrival, stair and display areas relate to the rooms beyond them. It makes the division between open browsing and quieter conversation easy to understand.", "Glazed partitions give definition to the consultation space while retaining a visual connection with the showroom. The arrangement balances distinct settings with a sense of continuity."],
   },
   {
    id: "materialsAndLight", title: "A rhythm of display and illumination.",
    paragraphs: ["The panoramic showroom view is organised through a repeating line of counters, seating and illuminated wall displays. That rhythm gives the larger room an ordered, readable character.", "Geometric ceiling lighting supports the wider composition, while warmer accents and individual display settings introduce detail closer to the jewellery. The walkthrough brings these relationships into view as a connected sequence."],
   },
  ],
  film: { src: "/videos/gangaJewelers.mp4", poster: "/posters/gangaJewelers.jpg", width: 1280, height: 720, caption: "Ganga Jewellers / Interior design walkthrough" },
  outcome: {
   title: "Different spaces. One considered experience.",
   text: "The spatial study, interior views and walkthrough present a coordinated design direction for Ganga Jewellers. Together, they show how a clear arrival, a focused showroom and a private conversation can belong to the same architectural language.",
   details: ["A connected arrangement of arrival and display", "A separate setting for private consultation", "A consistent material and lighting language"],
  },
 },
 guruKripaJewellers: {
  representation: "Interior & elevation concepts",
  lead: "A jewellery house expressed through a strong outer frame and a softer interior. The Guru Kripa Jewellers concepts bring together a recognisable frontage, carefully arranged displays and a comfortable setting for conversation.",
  materials: ["Cream surfaces", "Dark facade framing", "Warm metallic accents", "Layered lighting"],
  chapters: [
   {
    id: "startingPoint", title: "An invitation, framed from the street.",
    image: { src: "/images/projects/guruKripaJewellers/guruKripaElivation.webp", width: 1500, height: 1800, alt: "Guru Kripa Jewellers elevation visualisation with a tall dark frame, illuminated entrance and vertical brand signage", caption: "Guru Kripa Jewellers / Elevation concept" },
    paragraphs: ["The starting point for this design story is the connection between a jewellery house and its address. The elevation concepts use a clear architectural frame to make the entrance and the brand easy to recognise.", "Glazed openings reveal something of the interior before the visitor steps inside. The strong exterior composition gives way to a brighter, more intimate setting at the counter."],
   },
   {
    id: "inspiration", title: "A room shaped around the brand.",
    image: { src: "/images/projects/guruKripaJewellers/guruKripaInterior3.webp", width: 1500, height: 1125, alt: "Guru Kripa Jewellers interior looking towards the glazed entrance, with jewellery displays, cream chairs and geometric wall panels", caption: "Guru Kripa Jewellers / Showroom interior concept" },
    paragraphs: ["Geometric wall panels and the central brand motif give the interior a distinct focal point. Their angled lines contrast with the softer seating and pale finishes around them.", "The design draws its character from that balance: a precise identity for the jewellery house, expressed within a room that feels comfortable and welcoming."],
   },
   {
    id: "spacePlanning", title: "Making the arrangement easy to understand.",
    image: { src: "/images/projects/guruKripaJewellers/guruKripaInterior2.webp", width: 1600, height: 1280, alt: "Elevated cutaway view of Guru Kripa Jewellers showing the glass counter arrangement, visitor chairs and a separate seating area", caption: "Guru Kripa Jewellers / Spatial arrangement study" },
    paragraphs: ["The elevated view reveals the relationship between the counters, visitor chairs and a separate seating area. The arrangement gives each activity a place while keeping movement through the room clear.", "Transparent display counters maintain an open view across the showroom. Seating supports both time at the counter and quieter pauses within the wider space."],
   },
   {
    id: "materialsAndLight", title: "One language, across the whole project.",
    image: { src: "/images/projects/guruKripaJewellers/guruKripaElevation1.webp", width: 1600, height: 1493, alt: "Front elevation concept for Guru Kripa Jewellers showing the illuminated showroom, dark frame and vertical signage", caption: "Guru Kripa Jewellers / Alternative elevation concept" },
    paragraphs: ["The interior combines cream surfaces, reflective display glazing and warm accents. Ceiling lighting and decorative fixtures give the room a sense of occasion while drawing attention towards the collection.", "The elevation studies explore different expressions of the same recognisable frame. Together with the interior views, they present a coordinated design direction rather than a record of a completed site."],
   },
  ],
  outcome: {
   title: "A clear identity. A considered experience.",
   text: "The five supplied concepts connect the street-facing architecture with the experience inside. The design story is carried by a strong frame, an ordered display arrangement and a softer setting for the people who use it.",
   details: ["A recognisable showroom frontage", "A clear arrangement of display and seating", "A consistent relationship between identity, material and light"],
  },
 },
};
