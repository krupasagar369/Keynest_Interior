import { images } from "./images";
import type { projectTypes } from "./enquiryOptions";

export type Service = {
  slug: string; // matches the section id on /services
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  projectType: (typeof projectTypes)[number];
};

// Editable: only list services the business confirms it offers.
export const featuredServices: Service[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interior Design",
    description:
      "Complete home interiors designed around your lifestyle and personal taste.",
    image: images.residential,
    imageAlt: "Illustrative residential living room interior",
    projectType: "Full Home Interiors",
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchen Design",
    description:
      "Sleek, efficient kitchens with smart storage and modern finishes.",
    image: images.kitchen,
    imageAlt: "Illustrative modern modular kitchen",
    projectType: "Modular Kitchen",
  },
  {
    slug: "bedroom-interiors",
    title: "Bedroom and Wardrobe Design",
    description:
      "Serene bedrooms and custom wardrobes that maximize space and comfort.",
    image: images.bedroom,
    imageAlt: "Illustrative bedroom interior with wardrobes",
    projectType: "Bedroom and Wardrobes",
  },
  {
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    description:
      "Inviting living spaces designed for relaxation and entertaining.",
    image: images.livingBlue,
    imageAlt: "Illustrative living room with a blue sofa",
    projectType: "Living Room",
  },
  {
    slug: "space-planning-styling",
    title: "Space Planning and Interior Styling",
    description:
      "Optimized layouts and curated styling for a cohesive, polished look.",
    image: images.styling,
    imageAlt: "Illustrative styled living space",
    projectType: "Other",
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interior Design",
    description:
      "Professional spaces that impress clients and inspire your team.",
    image: images.office,
    imageAlt: "Illustrative modern office interior",
    projectType: "Commercial Interiors",
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation and Remodeling",
    description: "Refresh and transform existing spaces with a modern update.",
    image: images.renovation,
    imageAlt: "Illustrative renovated interior with wooden finishes",
    projectType: "Renovation",
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture and Storage Solutions",
    description:
      "Bespoke furniture and storage designed for your specific needs.",
    image: images.furniture,
    imageAlt: "Illustrative custom wooden cabinetry",
    projectType: "Other",
  },
];