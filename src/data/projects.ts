import { images } from "./images";

export type ProjectCategory =
  | "Living Rooms"
  | "Kitchens"
  | "Bedrooms"
  | "Wardrobes"
  | "Commercial"
  | "Other Interiors";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
};

// Illustrative inspiration only. Replace with real client projects when available.
export const projects: Project[] = [
  {
    id: "contemporary-living",
    title: "Contemporary Living Room",
    category: "Living Rooms",
    image: images.heroLiving,
    alt: "Illustrative contemporary living room with a teal sofa and marble floor",
  },
  {
    id: "modern-kitchen",
    title: "Modern Modular Kitchen",
    category: "Kitchens",
    image: images.kitchen,
    alt: "Illustrative modern kitchen with dark cabinetry and light worktops",
  },
  {
    id: "elegant-bedroom",
    title: "Elegant Bedroom",
    category: "Bedrooms",
    image: images.bedroom,
    alt: "Illustrative elegant bedroom with wardrobes and a chandelier",
  },
  {
    id: "wardrobe-storage",
    title: "Walk-in Wardrobe Storage",
    category: "Wardrobes",
    image: images.wardrobe,
    alt: "Illustrative open wardrobe with shelving and warm interior lighting",
  },
  {
    id: "office-interior",
    title: "Modern Office Interior",
    category: "Commercial",
    image: images.office,
    alt: "Illustrative modern office with desks and glass partitions",
  },
  {
    id: "lounge-interior",
    title: "Luxury Lounge",
    category: "Other Interiors",
    image: images.lounge,
    alt: "Illustrative lounge with a tufted sofa and a chandelier",
  },
];