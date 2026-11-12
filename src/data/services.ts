import { expertise } from "./content";

type ServiceId = (typeof expertise)[number]["id"];
interface ServiceImage {
 src: string;
 width: number;
 height: number;
 alt: string;
 note: string;
 credit?: { name: string; href: string };
}

/** Service illustrations; online photos are explicitly marked as demo images. */
export const serviceMedia: Record<ServiceId, ServiceImage> = {
 residential: { src: "/images/services/residentialDemo.webp", width: 1600, height: 1200, alt: "Demo residential interior with neutral sofas, warm timber furniture and full-height windows overlooking trees", note: "Residential interior / Demo inspiration", credit: { name: "Clay Banks", href: "https://unsplash.com/photos/modern-living-room-with-large-windows-overlooking-trees-A9DmoCgM5iw" } },
 jewellery: { src: "/images/projects/giriZewarMahal/giriZevarMahalInterior.webp", width: 1500, height: 1050, alt: "Giri Zevar Mahal jewellery showroom with green panelling and brass detailing", note: "Giri Zevar Mahal / Interior design visualisation" },
 commercial: { src: "/images/projects/urmilYamunaVihar/urmilInterior.webp", width: 1500, height: 1050, alt: "Urmil Jewellers showroom with curved glass displays and warm timber details", note: "Urmil Jewellers / Commercial interior design" },
 architectural: { src: "/images/services/architecturalDemo.webp", width: 1600, height: 1200, alt: "Demo architectural exterior with a timber-screened upper storey, stone facade and landscaped entrance", note: "Architectural design / Demo inspiration", credit: { name: "Alef Morais", href: "https://unsplash.com/photos/modern-house-with-wooden-facade-and-stone-accents-emnfe1YR6io" } },
};
