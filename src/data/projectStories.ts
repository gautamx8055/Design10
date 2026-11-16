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
    navLabel?: string;
    title: string;
    paragraphs: string[];
    image?: StoryImage;
}

export interface ProjectStory {
    location?: string;
    enquiryType?: "Residential" | "Jewellery Showroom" | "Commercial" | "Architectural";
    representation: string;
    lead: string;
    materials: string[];
    chapters: StoryChapter[];
    evolution?: { concept: StoryImage; built: StoryImage };
    film?: { src: string; poster: string; width: number; height: number; caption: string };
    outcome: { title: string; text: string; details: string[] };
}

const urmilMadhuInterior: StoryImage = {
    src: "/images/projects/urmilMadhuVihar/urmilInterior.webp", width: 1500, height: 1050,
    alt: "Urmil Madhu Vihar interior design showing curved glass displays, cream seating, timber ceiling details and illuminated jewellery niches",
    caption: "Urmil Jewellers Madhu Vihar / Interior design visualisation",

};
const urmilMadhuSpatialPlan: StoryImage = {
    src: "/images/projects/urmilMadhuVihar/urmilSpatialPlan.webp", width: 1500, height: 1050,
    alt: "Three-dimensional spatial study of Urmil Madhu Vihar showing the display counters, visitor seating, circulation and rooms behind the showroom",
    caption: "Urmil Jewellers Madhu Vihar / Three-dimensional spatial study",
};
const giriInterior: StoryImage = {
    src: "/images/projects/giriZewarMahal/giriInterior1.webp", width: 1280, height: 720,
    alt: "Giri Zevar Mahal interior visualisation with a central curved counter, flowing ceiling, warm lighting and perimeter display niches",
    caption: "Giri Zevar Mahal / Interior design visualisation",
};
const giriEntranceDetail: StoryImage = {
    src: "/images/projects/giriZewarMahal/giriZewarNewUpdate.webp", width: 1500, height: 1200,
    alt: "Giri Zevar Mahal interior entrance detail with an ornate gold-toned arched grille, deep green framing and a crystal ceiling light",
    caption: "Giri Zevar Mahal / Ornamental entrance detail",
};

/** Client-authorised draft narratives, interpreted from the supplied images.
 * Do not add dates, areas, budgets, testimonials or undocumented site events.
 * Add another project's entry here and in projects.ts to create its story page.
 */
export const projectStories: Record<ProjectId, ProjectStory> = {
    urmil: {
        representation: "Facade concepts & site photography",
        lead: "A jewellery house with a presence on two streets. The Urmil archive brings together corner elevation concepts, a detailed storefront study and site photographs, exploring how a recognisable identity becomes part of the architecture.",
        materials: ["Pale facade surfaces", "Angular glazing", "Illuminated edges", "Warm display details"],
        chapters: [
            {
                id: "startingPoint", title: "An identity that turns the corner.",
                paragraphs: ["The corner gives the building more than one public face. The elevation concepts connect those faces through a common roofline, carefully placed branding and large openings towards the street.", "The entrance and vertical signage give the arrival a clear address, while the broader surfaces create room for the jewellery house's name and identity to be read from a distance."],
            },
            {
                id: "inspiration", title: "A frame with a distinctive silhouette.",
                image: { src: "/images/projects/urmilYamunaVihar/urmilYamunaViharElevation2.webp", width: 1668, height: 1412, alt: "Urmil Jewellers evening elevation concept with dark angular frames, illuminated glazing edges and a large central brand emblem", caption: "Urmil Jewellers / Evening elevation concept" },
                paragraphs: ["The evening study gives the glazing a strong geometric outline. Dark frames and illuminated edges turn the windows into a recognisable feature of the facade.", "The larger brand emblem, wall lettering and vertical sign work at different scales. Together they connect the wider street presence with the detail of the storefront."],
            },
            {
                id: "spacePlanning", title: "The display begins at the street.",
                image: { src: "/images/projects/urmilYamunaVihar/urmilYamunaViharStore.webp", width: 1800, height: 1350, alt: "Urmil Jewellers storefront concept with jewellery displays behind wide glass bays, patterned metallic screens and planted edges", caption: "Urmil Jewellers / Street-facing display concept" },
                paragraphs: ["The storefront study brings the architecture down to the scale of the individual display. Jewellery stands sit behind broad glazed bays, with patterned screens and warm finishes providing a layered backdrop.", "A sheltered edge, lighting and planting frame the windows without closing off the view inside. The display becomes part of the visitor's first encounter with the jewellery house."],
            },
            {
                id: "materialsAndLight", title: "A presence after dark.",
                image: { src: "/images/projects/urmilYamunaVihar/urmilYamunaViharElevation3.webp", width: 1159, height: 1253, alt: "Nighttime site photograph of the Urmil corner building with illuminated horizontal facade bands and signage, with scaffolding still visible", caption: "Urmil Jewellers / On-site exterior lighting photograph" },
                paragraphs: ["The nighttime site photograph shows how light gives the building another reading. Horizontal bands, glazing edges and signage establish the main lines of the exterior.", "The concept views and site photographs show different expressions of the facade. They offer a useful record of the relationship between the jewellery house's visual identity, its display windows and its presence on the street."],
            },
        ],
        evolution: {
            concept: { src: "/images/projects/urmilYamunaVihar/urmilYamunaViharElevation.webp", width: 1800, height: 1350, alt: "Urmil Jewellers daytime corner elevation concept with angular glass openings and a pale illuminated facade", caption: "Elevation concept / Design visualisation" },
            built: { src: "/images/projects/urmilYamunaVihar/urmilElevationIRL.webp", width: 1200, height: 1600, alt: "Daytime site photograph of the built Urmil Jewellers corner exterior with pale cladding, tall glazing and vertical signage", caption: "Built exterior / Site photograph" },
        },
        outcome: {
            title: "A recognisable address, from every approach.",
            text: "The five supplied images connect architectural scale with the detail of the display. Elevation concepts, a storefront study and site photography reveal a jewellery house whose identity reaches across both faces of the corner.",
            details: ["A connected identity across two street-facing elevations", "Display windows shaped as architectural features", "A facade defined by glazing, signage and light"],
        },
    },
    urmilMadhuVihar: {
        representation: "Interior & elevation concepts",
        lead: "A jewellery showroom shaped around a simple idea: make a significant purchase feel personal. From the street-facing identity to the conversation at the counter, Urmil brings display, comfort and a sense of occasion together.",
        materials: ["Warm timber", "Cream tones", "Glass displays", "Layered light"],
        chapters: [
            {
                id: "startingPoint", title: "A personal experience, from the first step.",
                image: { src: "/images/projects/urmilMadhuVihar/urmilElevation.webp", width: 745, height: 1787, alt: "Urmil Jewellers Madhu Vihar narrow elevation concept with layered white framing, gold signage and tall display windows", caption: "Urmil Jewellers Madhu Vihar / Elevation concept" },
                paragraphs: ["Jewellery is often chosen slowly, through conversation and close attention. The starting point for this design story is the relationship between the visitor, the piece and the person presenting it.", "The showroom brings those three elements into a shared setting. A clear arrival, comfortable seating and an open view of the displays give the experience a calm, welcoming structure."],
            },
            {
                id: "inspiration", title: "Inspired by warmth and rhythm.", image: urmilMadhuInterior,
                paragraphs: ["The interior takes its character from warm timber, soft cream surfaces and a repeating rhythm of illuminated display niches. These elements give the room depth without competing with the jewellery.", "Curved counters and rounded ceiling forms soften the geometry. Their relationship creates a continuous visual language, carrying the eye from the display to the space above it."],
            },
            {
                id: "spacePlanning", title: "A place for every conversation.", image: urmilMadhuSpatialPlan,
                paragraphs: ["The spatial study makes the organisation of the showroom easy to read. Counters define the visitor experience, seating supports longer conversations, and a clear route connects the entrance with the rest of the space.", "The quieter rooms sit behind the main showroom. Thinking about public and working areas together gives the customer-facing interior a practical foundation."],
            },
            {
                id: "materialsAndLight", title: "Details that let the jewellery lead.",
                image: { src: "/images/projects/urmilMadhuVihar/urmilMadhuViharInterior2.webp", width: 1500, height: 900, alt: "Urmil Jewellers Madhu Vihar showroom concept with warm timber branding, illuminated wall niches, glass counters and pale visitor chairs", caption: "Urmil Jewellers Madhu Vihar / Materials and lighting concept" },
                paragraphs: ["Glass keeps the display visually open. Pale seating and floor finishes hold the room together, while timber accents introduce warmth and definition.", "Lighting works at different scales: a general layer makes the room comfortable, while focused illumination gives the display niches and counters their own presence. The aim is a space that feels considered from the whole room down to the individual piece."],
            },
            {
                id: "displayDetail", title: "An invitation in the window.",
                image: { src: "/images/projects/urmilMadhuVihar/urmilMadhuViharInterio3.webp", width: 1800, height: 1080, alt: "Urmil Jewellers Madhu Vihar window-display concept with jewellery busts on illuminated plinths, hanging bulbs and a flowing patterned backdrop", caption: "Urmil Jewellers Madhu Vihar / Window-display concept" },
                paragraphs: ["The window study gives the collection a setting of its own. Jewellery stands rise on illuminated plinths against a flowing patterned backdrop, with hanging lights adding another layer of rhythm.", "The same pale surfaces and warm light used inside continue into the display. The result is a visual connection between the architecture, the collection and the visitor's first view from outside."],
            },
        ],
        outcome: {
            title: "An identity, inside and out.",
            text: "The six supplied design views connect the slender facade, window display and showroom interior. Together with the spatial study, they reveal a welcoming setting shaped around the collection and the conversations it inspires.",
            details: ["A welcoming showroom setting", "A clear relationship between display and seating", "An identity that extends to the street"],
        },
    },
    urmilDurgapuri: {
        representation: "Interior concepts & built exterior",
        lead: "A jewellery house framed by light. The Urmil Durgapuri concepts connect a layered street-facing elevation with a calm showroom, where pale finishes, dark outlines and carefully lit displays give each piece a place to stand out.",
        materials: ["Pale textured surfaces", "Dark display frames", "Warm metallic accents", "Linear crystal lighting"],
        chapters: [
            {
                id: "startingPoint", title: "A clear welcome, from the entrance.",
                image: { src: "/images/projects/urmilDurgapuri/urmilInterior1.webp", width: 1250, height: 1000, alt: "Urmil Jewellers Durgapuri entrance-area concept with glazed doors, a reception counter, jewellery display boxes and a rectangular chandelier", caption: "Urmil Jewellers Durgapuri / Entrance and reception concept" },
                paragraphs: ["The glazed entrance offers an immediate view into the jewellery house. A reception setting, comfortable seating and framed display boxes organise the first encounter with the space.", "The design introduces its material language at the doorway: pale surfaces, slender metallic edges and dark frames that give the displays definition. Those details continue through the showroom."],
            },
            {
                id: "inspiration", title: "Giving the room its own character.",
                image: { src: "/images/projects/urmilDurgapuri/urmilInterior3.webp", width: 1250, height: 1000, alt: "Urmil Jewellers Durgapuri interior concept with fluted wall panels, a decorative oval feature, framed artwork and a long crystal ceiling light", caption: "Urmil Jewellers Durgapuri / Feature wall and interior character concept" },
                paragraphs: ["Framing provides a consistent theme, from the decorative facade panels to the illuminated settings inside. Fluted wall sections and patterned surfaces introduce texture while the darker outlines keep the composition clear.", "The oval feature and framed imagery give visitors places to pause away from the counter. They add a more personal layer to a room whose main purpose remains the presentation of the collection."],
            },
            {
                id: "spacePlanning", title: "A rhythm of display and pause.",
                image: { src: "/images/projects/urmilDurgapuri/urmilInterior2.webp", width: 1600, height: 533, alt: "Wide interior concept for Urmil Jewellers Durgapuri showing a feature wall, visitor seating, jewellery display plinths and repeated framed wall panels", caption: "Urmil Jewellers Durgapuri / Panoramic interior study" },
                paragraphs: ["The wide interior study shows how seating, display plinths and wall features relate along the room. Repeated frames and vertical panels give the different elements a shared rhythm.", "The counter view continues that arrangement through a line of visitor chairs and glass displays. Clear views across the room help connect the entrance, the collection and the places where visitors spend time."],
            },
            {
                id: "materialsAndLight", title: "The piece, within a precise frame.",
                image: { src: "/images/projects/urmilDurgapuri/urmilInterior4.webp", width: 1500, height: 1250, alt: "Urmil Jewellers Durgapuri display-detail concept with jewellery busts in glass boxes, a textured illuminated brand panel and dark architectural framing", caption: "Urmil Jewellers Durgapuri / Display and lighting detail concept" },
                paragraphs: ["Glass display boxes give individual pieces their own setting, while textured backdrops and illuminated borders create depth around them. Dark frames draw a clear boundary between the collection and the surrounding wall.", "The lighting combines focused display illumination with softer ceiling lines and decorative crystal fixtures. Pale finishes and warm metallic details carry that light through the room without overwhelming the jewellery."],
            },
        ],
        evolution: {
            concept: { src: "/images/projects/urmilDurgapuri/urmilElevation.webp", width: 893, height: 1151, alt: "Urmil Jewellers Durgapuri facade concept with decorative screen panels, a framed brand emblem, vertical signage and a glazed entrance", caption: "Urmil Jewellers Durgapuri / Elevation concept" },
            built: { src: "/images/projects/urmilDurgapuri/urmilElevationIRL.webp", width: 960, height: 1280, alt: "Nighttime site photograph of Urmil Jewellers Durgapuri with illuminated rectangular facade frames, a brand emblem and vertical lettering", caption: "Urmil Jewellers Durgapuri / Built exterior photograph" },
        },
        outcome: {
            title: "A consistent identity, from facade to display.",
            text: "The elevation concept, exterior photograph and five interior views connect the jewellery house at several scales. A shared language of framing, texture and light gives the building a recognisable presence and the collection a considered setting.",
            details: ["A layered facade with illuminated branding", "A clear relationship between display and visitor seating", "A consistent palette of pale surfaces, dark frames and warm light"],
        },
    },
    urmilRamNagar: {
        location: "Ram Nagar",
        representation: "Elevation & interior concepts",
        lead: "A clear street presence meets a warmly lit showroom. The Ram Nagar design views bring together a symmetrical facade, a distinct arched entrance and considered settings for jewellery display.",
        materials: ["Pale facade finishes", "Deep blue display panels", "Warm metallic accents", "Layered lighting"],
        chapters: [
            {
                id: "startingPoint", title: "A recognisable welcome from the street.",
                image: { src: "/images/projects/urmilRamNagar/urmilRamNagar1.webp", width: 1092, height: 1600, alt: "Evening elevation concept for Urmil Jewellers Ram Nagar with illuminated signage, a central arched entrance and tall display windows", caption: "Urmil Jewellers Ram Nagar / Evening elevation concept" },
                paragraphs: ["The facade is arranged around a central entrance, with tall display windows on either side. An illuminated brand panel sits above the entrance and gives the elevation a clear focal point.", "A second, evening view shows how the lighting outlines the entrance and brings the signage forward after dark."],
            },
            {
                id: "inspiration", title: "A calm setting for the collection.",
                image: { src: "/images/projects/urmilRamNagar/urmilRamNagar2.webp", width: 1920, height: 1080, alt: "Urmil Jewellers Ram Nagar interior concept with pale finishes, blue-backed jewellery displays and glass counters", caption: "Urmil Jewellers Ram Nagar / Interior concept" },
                paragraphs: ["Pale finishes keep the showroom bright, while deep blue display panels give the jewellery a distinct backdrop. Warm metallic detailing connects the counters with the illuminated wall displays.", "The long view through the room makes the relationship between customer seating, counters and the collection easy to read."],
            },
            {
                id: "spacePlanning", title: "Display arranged around the visit.",
                image: { src: "/images/projects/urmilRamNagar/urmilRamNagar3.webp", width: 1920, height: 1080, alt: "Wide Urmil Jewellers Ram Nagar showroom concept with glass display counters, visitor seating and illuminated ceiling features", caption: "Urmil Jewellers Ram Nagar / Showroom view" },
                paragraphs: ["Counters and seating are arranged to support a clear path through the showroom. The open central area keeps the different display settings connected without making the room feel crowded.", "Ceiling features draw the eye along the length of the space and add another layer to the showroom's lighting."],
            },
            {
                id: "materialsAndLight", title: "Light brings the details forward.",
                image: { src: "/images/projects/urmilRamNagar/urmilRamNagar4.webp", width: 1920, height: 1080, alt: "Urmil Jewellers Ram Nagar interior concept showing illuminated blue display niches, glass counters and pale stone-look finishes", caption: "Urmil Jewellers Ram Nagar / Display and lighting concept" },
                paragraphs: ["Focused lighting gives the jewellery displays their own presence against the blue panels. Softer ceiling light supports the wider room, while the pale floor and wall finishes keep the composition balanced.", "Together, the views show a consistent palette carried from the facade into the showroom."],
            },
        ],
        outcome: {
            title: "One identity, from facade to showroom.",
            text: "The supplied elevation and interior concepts connect the jewellery house's street presence with the experience inside. A clear entrance, illuminated displays and a consistent palette carry the design through each view.",
            details: ["A symmetrical facade with a distinct central entrance", "Blue-backed displays set against pale finishes", "Layered lighting across the showroom"],
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
                id: "spacePlanning", title: "An interior with a clear centre.", image: giriEntranceDetail,
                paragraphs: ["The wider interior visualisation is organised around a curved central counter. The ceiling follows its movement, giving the room a focal point and a sense of continuity.", "Perimeter displays make use of the edges, while open space around the centre keeps circulation legible. Seating and counters become places for conversation rather than interruptions to the room."],
            },
            {
                id: "materialsAndLight", title: "A consistent language, in every detail.",
                paragraphs: ["Green panels and brass accents give the display walls a distinctive rhythm. Pale stone-like surfaces keep the floor visually calm, allowing those details to carry the identity.", "Illuminated niches and layered ceiling light define the collection and the wider room separately. Decorative fixtures add a sense of occasion while the display lighting keeps attention close to the jewellery."],
            },
        ],
        evolution: {
            concept: { src: "/images/projects/giriZewarMahal/giriZewarMahalElevation.webp", width: 1594, height: 1800, alt: "Giri Zevar Mahal elevation visualisation showing an ornate symmetrical facade, decorative columns and a grand entrance", caption: "Elevation concept / Design visualisation" },
            built: { src: "/images/projects/giriZewarMahal/giriZewarElevationIRL.webp", width: 1200, height: 1600, alt: "Photograph of the built Giri Zevar Mahal facade with illuminated columns, decorative details and a street-level entrance", caption: "Built exterior / Site photograph" },
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
                image: { src: "/images/projects/gangaJewellers/gangaJewellers.webp", width: 1800, height: 1127, alt: "Ganga Jewellers cutaway concept showing reception, office workstations, a consultation table and rooms connected by black-framed glass partitions", caption: "Ganga Jewellers / Reception, workspaces and consultation concept" },
                paragraphs: ["Choosing jewellery can involve a quick visit to a display or a longer conversation in a quieter setting. The starting point for this design story is making room for both within one connected interior.", "The supplied views present the space at several scales: the overall arrangement, the display counters and a more private room. Each contributes to a visitor experience that moves from arrival towards closer attention."],
            },
            {
                id: "inspiration", title: "A calm backdrop with a precise frame.",
                image: { src: "/images/projects/gangaJewellers/ganga3.webp", width: 1600, height: 1008, alt: "Ganga Jewellers consultation room with pale chairs around a timber table, sculptural pendant lights and a glazed black partition", caption: "Ganga Jewellers / Consultation room visualisation" },
                paragraphs: ["Light wall finishes and soft seating give the interior a calm foundation. Black-framed glazing introduces a clear outline, while timber brings warmth to the places where visitors pause.", "The sculptural pendant lighting gives the consultation room a distinct character. It is a more intimate setting within the wider showroom, with a shared table and a quieter atmosphere."],
            },
            {
                id: "spacePlanning", title: "The whole space, considered together.",
                image: { src: "/images/projects/gangaJewellers/ganga7.webp", width: 1600, height: 1008, alt: "Ganga Jewellers corporate office cutaway showing reception, open workstations, a meeting table and enclosed rooms", caption: "Ganga Jewellers / Corporate office spatial study" },
                paragraphs: ["Seen from above, the cutaway brings the reception, open workstations and meeting areas into one view. It shows how focused daily work and shared conversations sit within the same connected plan.", "Glazed partitions define the enclosed rooms while keeping them visually connected to the wider office. The workstations and meeting table support different ways to collaborate."],
            },
            {
                id: "materialsAndLight", title: "A rhythm of display and illumination.",
                image: { src: "/images/projects/gangaJewellers/gangaJewellers2.webp", width: 1800, height: 1134, alt: "Ganga Jewellers consultation room viewed towards the branded wall, with cream chairs, a timber table, black-framed shelving and sculptural ceiling lights", caption: "Ganga Jewellers / Consultation room lighting concept" },
                paragraphs: ["The panoramic showroom view is organised through a repeating line of counters, seating and illuminated wall displays. That rhythm gives the larger room an ordered, readable character.", "Geometric ceiling lighting supports the wider composition, while warmer accents and individual display settings introduce detail closer to the jewellery. The walkthrough brings these relationships into view as a connected sequence."],
            },
        ],
        film: { src: "/videos/gangaJewelers.mp4?v=20261116", poster: "/posters/gangaJewelers.jpg?v=20261116", width: 1280, height: 720, caption: "Ganga Jewellers / Interior design walkthrough" },
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
    omShivGiriJewellers: {
        representation: "Interior & elevation concepts",
        lead: "A jewellery house with a graceful exterior and a warmly detailed interior. The OM Shiv Giri Jewellers concepts connect a recognisable entrance with an open showroom, comfortable seating and quieter spaces for conversation.",
        materials: ["Warm timber", "Green display linings", "Cream seating", "Reflective gold details"],
        chapters: [
            {
                id: "startingPoint", title: "A distinct presence, from the street.",
                image: { src: "/images/projects/omShivGiriJewellers/shivGiriElevation.webp", width: 1200, height: 1800, alt: "OM Shiv Giri Jewellers elevation visualisation with pale horizontal cladding, gold signage, slender balconies and a decorative arched entrance", caption: "OM Shiv Giri Jewellers / Elevation concept" },
                paragraphs: ["The elevation gives the jewellery house a clear architectural identity. Pale horizontal bands, framed openings and slender balcony railings organise the facade, while illuminated lettering makes the name part of the composition.", "At street level, an ornamental arched doorway marks the entrance between two display windows. The change from the building's wider rhythm to the detail of the doorway sets the scene for the experience inside."],
            },
            {
                id: "inspiration", title: "The display as a carefully framed object.",
                image: { src: "/images/projects/omShivGiriJewellers/shivGiriInterior1.webp", width: 1500, height: 1125, alt: "OM Shiv Giri Jewellers display wall with green-lined jewellery niches, timber panels, gold geometric mirrors and glass display plinths", caption: "OM Shiv Giri Jewellers / Display and material concept" },
                paragraphs: ["Green-lined niches give each piece a defined setting. Timber surrounds and fine gold borders bring warmth to the display walls, while mirrored geometric panels introduce reflection and depth.", "The same idea of framing appears at several scales: around a single necklace, around a group of displays and within the decorative panels themselves. Cream seating and pale floor finishes give those richer details room to stand out."],
            },
            {
                id: "spacePlanning", title: "A clear path through the showroom.",
                image: { src: "/images/projects/omShivGiriJewellers/shivGiriInterior4.webp", width: 1000, height: 1200, alt: "Overhead spatial visualisation of OM Shiv Giri Jewellers showing opposing counter rows, visitor sofas, an open central aisle and a room behind a glass partition", caption: "OM Shiv Giri Jewellers / Spatial arrangement study" },
                paragraphs: ["The overhead view reveals two rows of counters arranged along the edges of the room. Visitor seating faces the displays, leaving a generous central route through the showroom.", "A waiting area sits near the entrance, while a glass partition defines a quieter room at the far end. Considering arrival, browsing and conversation together gives the decorative interior a practical structure."],
            },
            {
                id: "materialsAndLight", title: "Warmth, reflection and a sense of occasion.",
                image: { src: "/images/projects/omShivGiriJewellers/shivGiriInterior2.webp", width: 1500, height: 1125, alt: "OM Shiv Giri Jewellers interior concept with illuminated niches, timber and cream wall panels, gold mirrored latticework and glass counters", caption: "OM Shiv Giri Jewellers / Interior lighting and detailing concept" },
                paragraphs: ["Illuminated niches and concealed strips outline the displays, while ceiling downlights provide a wider layer of light. The chandeliers give the room a more ceremonial focal point.", "Timber, cream upholstery and green display linings balance the reflective surfaces. Gold details connect the wall panels, counter edges and lighting into one visual language."],
            },
            {
                id: "privateConsultation", title: "A quieter place to talk.",
                image: { src: "/images/projects/omShivGiriJewellers/shivGiriInterior5.webp", width: 1500, height: 900, alt: "OM Shiv Giri Jewellers showroom looking towards a glazed consultation room with a table and chairs, flanked by illuminated display counters", caption: "OM Shiv Giri Jewellers / Consultation area concept" },
                paragraphs: ["At the end of the showroom, a table and chairs sit behind a glazed partition. Horizontal frosted bands give the room a degree of separation while preserving its connection with the main interior.", "The transition introduces another pace within the jewellery house: an open setting for browsing and a more enclosed place for focused conversation. The surrounding finishes and lighting keep the two spaces visually connected."],
            },
        ],
        outcome: {
            title: "An identity carried through every space.",
            text: "The six supplied visualisations connect the facade, showroom and consultation area. Together, they express a design direction built around clearly framed displays, comfortable conversations and a consistent material palette.",
            details: ["A recognisable arched entrance and street-facing identity", "An open central route between the display counters", "A connected setting for browsing, waiting and consultation"],
        },
    },
    umeedHarpalGaoshala: {
        enquiryType: "Architectural",
        representation: "Architectural & site planning concepts",
        lead: "A shared green at the heart of a wider architectural composition. The Umeed Harpal Gaoshala studies bring together rooms, open grounds and a recognisable entrance, exploring the relationship between the building, its landscape and the everyday movement through the site.",
        materials: ["Pale facade finishes", "Framed openings", "Landscaped edges", "Warm exterior lighting"],
        chapters: [
            {
                id: "startingPoint", title: "A place organised around a shared centre.",
                image: { src: "/images/projects/umeedHarpalGaoshala/umeedHarpalGaoshalaElevation.webp", width: 1000, height: 750, alt: "Elevated architectural concept of Umeed Harpal Gaoshala showing connected building wings, arched entrances, a central tower and an enclosed green court", caption: "Umeed Harpal Gaoshala / Overall elevation concept" },
                paragraphs: ["The elevation study brings the different wings into one composition. A central tower and a sequence of tall arches give the building a clear front, with a green court set between the entrance and the main rooms.", "The design story begins with that relationship between enclosure and openness. The building defines the edges, while the court provides a common point of reference within the site."],
            },
            {
                id: "inspiration", title: "The entrance as a moment of arrival.",
                image: { src: "/images/projects/umeedHarpalGaoshala/umeedHarpalGaoshalaEnterance.webp", width: 1000, height: 488, alt: "Umeed Harpal Gaoshala gateway concept with classical columns, layered cornices, stepped pointed crowns and decorative metal doors", caption: "Umeed Harpal Gaoshala / Entrance gateway concept" },
                paragraphs: ["Columns, layered cornices and stepped crowns give the gateway a ceremonial character. Its smaller scale introduces the architectural language before the visitor reaches the larger building.", "Decorative metal doors, planted edges and lighting add detail close to the ground. These elements make arrival part of the wider composition rather than a separate feature."],
            },
            {
                id: "spacePlanning", title: "Reading the site as a connected whole.",
                image: { src: "/images/projects/umeedHarpalGaoshala/umeedHarpalGaoshalaMap2.webp", width: 1600, height: 720, alt: "Overhead spatial concept for Umeed Harpal Gaoshala showing room groups, connecting corridors, a green court, a water feature and perimeter circulation", caption: "Umeed Harpal Gaoshala / Overhead spatial arrangement" },
                paragraphs: ["The overhead view reveals the relationship between the room groups, the central green and the routes around them. Corridors connect the building wings, while the outer circulation follows the boundary of the grounds.", "The water feature and planted margins give the larger site a recognisable structure. Looking at these elements together makes the transition from the entrance to the different parts of the complex easier to understand."],
            },
            {
                id: "sitePlanning", navLabel: "Site planning", title: "Bringing the rooms and grounds together.",
                image: { src: "/images/projects/umeedHarpalGaoshala/umeedHarpalGaoshalaMap.webp", width: 1600, height: 720, alt: "Cutaway site concept for Umeed Harpal Gaoshala showing rooms facing a landscaped green, connecting passages, boundary planting and a long water feature", caption: "Umeed Harpal Gaoshala / Site and circulation study" },
                paragraphs: ["The cutaway study opens up the building to show how the rooms face the wider grounds. Open passages and changes in level connect the enclosed spaces with the central landscape.", "Trees, paths and boundary walls form a second layer around the architecture. The study considers the building as part of its site, with the outdoor spaces carrying the design between the different wings."],
            },
            {
                id: "landscape", navLabel: "Landscape", title: "A green centre, with active edges.",
                image: { src: "/images/projects/umeedHarpalGaoshala/umeedHarpalGaoshalaOuterMap.webp", width: 1600, height: 720, alt: "Umeed Harpal Gaoshala landscape and room-layout concept with a central lawn, trees, a covered pavilion, a water feature and cattle enclosures along one edge", caption: "Umeed Harpal Gaoshala / Landscape and outer grounds concept" },
                paragraphs: ["The green court gives the site a quieter centre. A covered pavilion, planted borders and trees define its edges, while the long water feature introduces another outdoor setting beside the building.", "The view also shows the cattle enclosures along the outer edge of the complex. Keeping the different parts of the grounds visible in one study helps explain how the gaoshala and its supporting spaces relate."],
            },
            {
                id: "buildingForm", navLabel: "Building form", title: "A rhythm that continues around the building.",
                image: { src: "/images/projects/umeedHarpalGaoshala/umeedHarpalGaoshalaElevation2.webp", width: 1600, height: 1200, alt: "Rear and side elevation concept for Umeed Harpal Gaoshala with pale facades, repeated window bays, external stairs and tall columns", caption: "Umeed Harpal Gaoshala / Rear and side elevation study" },
                paragraphs: ["The side and rear study shows a more regular rhythm of window bays, horizontal bands and pale wall surfaces. External stairs and recessed openings make the building's arrangement visible beyond the main facade.", "The repeated framing connects these elevations with the more expressive entrance. It gives the architecture continuity as the view moves from the ceremonial front to the quieter sides."],
            },
            {
                id: "materialsAndLight", title: "Another reading, after dark.",
                image: { src: "/images/projects/umeedHarpalGaoshala/umeedHarpalGaoshalaMap3.webp", width: 1600, height: 900, alt: "Illuminated spatial concept of Umeed Harpal Gaoshala showing the green court, internal room arrangement, perimeter paths, trees and cattle enclosures", caption: "Umeed Harpal Gaoshala / Illuminated spatial study" },
                paragraphs: ["The lighting studies give definition to the arches, tower and facade edges. Warm illumination draws out the pale surfaces, while smaller lights mark the landscape and the routes around the building.", "The illuminated spatial view brings the court, rooms and outer grounds into the same scene. Together with the exterior concepts, it shows how the design can be read at both the scale of the site and the detail of the entrance."],
            },
        ],
        outcome: {
            title: "Architecture, landscape and arrival in one composition.",
            text: "The eight supplied visualisations present a connected design direction for Umeed Harpal Gaoshala. Elevations, gateway details and spatial studies describe a complex shaped around a shared green, with a consistent relationship between the building and its grounds.",
            details: ["A recognisable entrance and illuminated architectural identity", "Connected rooms arranged around a shared green", "Landscape and circulation considered with the wider gaoshala grounds"],
        },
    },
};
