/** Original asset names retain their project meaning; web derivatives use camelCase. */
export const projects = [
 { id: "urmil", name: "Urmil Jewellers", category: "Jewellery showroom", image: "/images/urmil.webp", width: 1500, height: 1050, alt: "Urmil Jewellers interior with curved display counters, white seating and warm timber details", text: "An inviting setting for a personal purchase. Warm timber, sculpted ceilings and carefully lit displays bring a sense of ease to the showroom." },
 { id: "giriZevarMahal", name: "Giri Zevar Mahal", category: "Jewellery showroom", image: "/images/giriZevarMahal.webp", width: 1500, height: 1050, alt: "Giri Zevar Mahal showroom with deep green panelling, brass details and marble flooring", text: "Deep green panelling meets delicate brass detailing. A composed interior that gives every piece of jewellery its own moment." },
 { id: "kamalJewl", name: "Kamal Jewellers", category: "Architecture & retail", image: "/images/kamalJewl.webp", width: 1200, height: 1800, alt: "Kamal Jewellers architectural visualisation with a patterned facade and three illuminated retail floors", text: "A distinct presence on the street. A patterned façade frames the illuminated retail spaces across three levels." },
 { id: "prabhuDayal", name: "Prabhu Dayal", category: "Jewellery showroom", image: "/images/prabhuDayal.webp", width: 1500, height: 714, alt: "Prabhu Dayal jewellery showroom design with long glass counters and a decorative ceiling", text: "A clear rhythm of counters, light and circulation. The showroom is planned around both the visitor and the daily work of the team." },
] as const;
export const projectAssets = {
 urmilBefore: "/images/urmilBefore.webp",
 urmilAfter: "/images/urmilAfter.webp",
 urmilMap: "/images/urmilMap.webp",
 gangaJewellerPlan: "/ganga%20jeweller%20lal%20quater%201.pdf",
 architectDesignDemoVideo: "/videos/architectDesignDemoVideo.mp4",
 architectDesignDemoPoster: "/posters/architectDesignDemoVideo.jpg",
} as const;
