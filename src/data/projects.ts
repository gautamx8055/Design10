/** Original asset names retain their project meaning; web derivatives use camelCase. */
export const projects = [
 { id: "urmil", name: "Urmil Jewellers", category: "Jewellery showroom", image: "/images/projects/urmilYamunaVihar/urmilInterior.webp", width: 1500, height: 1050, alt: "Urmil Jewellers interior with curved display counters, white seating and warm timber details", cardImage: { kind: "elevation", src: "/images/projects/urmilYamunaVihar/urmilElevation.webp", width: 1348, height: 1455, alt: "Urmil Jewellers elevation concept with illuminated branding and tall showroom windows" }, text: "An inviting setting for a personal purchase. Warm timber, sculpted ceilings and carefully lit displays bring a sense of ease to the showroom." },
 { id: "giriZevarMahal", name: "Giri Zevar Mahal", category: "Jewellery showroom", image: "/images/projects/giriZewarMahal/giriZevarMahalInterior.webp", width: 1500, height: 1050, alt: "Giri Zevar Mahal showroom with deep green panelling, brass details and marble flooring", cardImage: { kind: "elevation", src: "/images/projects/giriZewarMahal/giriZewarMahalElevation.webp", width: 1594, height: 1800, alt: "Giri Zewar Mahal elevation concept with an ornate symmetrical facade, columns and a grand entrance" }, text: "Deep green panelling meets delicate brass detailing. A composed interior that gives every piece of jewellery its own moment." },
 { id: "gangaJewellers", name: "Ganga Jewellers", category: "Jewellery showroom", image: "/images/projects/gangaJewellers/ganga2.webp", width: 1800, height: 688, alt: "Ganga Jewellers interior visualisation showing a long row of jewellery display counters, pale seating and geometric ceiling lighting", cardImage: { kind: "interior", src: "/images/projects/gangaJewellers/ganga3.webp", width: 1600, height: 1008, alt: "Ganga Jewellers private consultation room with cream seating, a timber table, sculptural lights and a black-framed glass partition" }, text: "An open showroom and quieter places for conversation. Pale surfaces, dark frames and considered lighting connect the different experiences within Ganga Jewellers." },
 { id: "guruKripaJewellers", name: "Guru Kripa Jewellers", category: "Jewellery showroom", image: "/images/projects/guruKripaJewellers/guruKripaInterior1.webp", width: 1500, height: 1125, alt: "Guru Kripa Jewellers interior concept with glass display counters, cream seating, a geometric brand wall and chandelier lighting", cardImage: { kind: "elevation", src: "/images/projects/guruKripaJewellers/guruKripaElevation1.webp", width: 1600, height: 1493, alt: "Guru Kripa Jewellers elevation concept with a dark architectural frame, illuminated signage and an open showroom frontage" }, text: "A framed presence on the street and a welcoming interior within. Cream tones, geometric detailing and carefully placed lighting give Guru Kripa Jewellers a clear, connected identity." },
] as const;

export type Project = (typeof projects)[number];
export type ProjectId = Project["id"];
export const projectHref = (id: ProjectId) => `/portfolio/${id}`;
export const projectAssets = {
 urmilBefore: "/images/projects/urmilYamunaVihar/urmilElevation.webp",
 urmilAfter: "/images/projects/urmilYamunaVihar/urmilElevationIRL.webp",
 urmilMap: "/images/projects/urmilYamunaVihar/urmilSpatialPlan.webp",
 architectDesignDemoVideo: "/videos/architectDesignDemoVideo.mp4",
 architectDesignDemoPoster: "/posters/architectDesignDemoVideo.jpg",
} as const;
