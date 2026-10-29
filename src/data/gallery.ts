import { images } from "./images";
import type { ProjectCategory } from "./projects";

export const galleryFilters = [
  "All",
  "Living Rooms",
  "Kitchens",
  "Bedrooms",
  "Wardrobes",
  "Commercial",
  "Other Interiors",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export type GalleryItem = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  aspect: "landscape" | "portrait" | "square";
};

// EDIT: all images below are illustrative inspiration, not completed KeyNest
// projects. Replace them with genuine client project photos when available.
export const galleryItems: GalleryItem[] = [
  {
    id: "living-teal-sofa",
    title: "Bright Contemporary Living Room",
    category: "Living Rooms",
    image: images.heroLiving,
    alt: "Illustrative bright living room with a teal sofa, marble floor and sheer curtains",
    aspect: "landscape",
  },
  {
    id: "kitchen-white",
    title: "Minimal White Kitchen",
    category: "Kitchens",
    image: images.galleryKitchenWhite,
    alt: "Illustrative minimal white kitchen with integrated appliances and a slim light strip",
    aspect: "portrait",
  },
  {
    id: "living-beige",
    title: "Warm Neutral Living Space",
    category: "Living Rooms",
    image: images.galleryLivingBeige,
    alt: "Illustrative living and dining area in warm neutral tones with a wood-panelled wall",
    aspect: "landscape",
  },
  {
    id: "kitchen-modular",
    title: "Modular Kitchen with Pattern Tiles",
    category: "Kitchens",
    image: images.kitchen,
    alt: "Illustrative modular kitchen with dark upper cabinets and patterned backsplash tiles",
    aspect: "landscape",
  },
  {
    id: "bedroom-dark",
    title: "Moody Bedroom with Storage",
    category: "Bedrooms",
    image: images.galleryBedroomDark,
    alt: "Illustrative bedroom with dark wardrobes, a wall-mounted TV and draped curtains",
    aspect: "landscape",
  },
  {
    id: "kitchen-red",
    title: "Kitchen with Bold Accent Cabinets",
    category: "Kitchens",
    image: images.galleryKitchenRed,
    alt: "Illustrative kitchen with a stone island, pendant lights and terracotta-red cabinets",
    aspect: "portrait",
  },
  {
    id: "bedroom-ring-chandelier",
    title: "Bedroom with Ring Chandelier",
    category: "Bedrooms",
    image: images.detailBedroom,
    alt: "Illustrative bedroom with glass-front wardrobes and a ring chandelier",
    aspect: "portrait",
  },
  {
    id: "wardrobe-light-wood",
    title: "Light Wood Walk-in Wardrobe",
    category: "Wardrobes",
    image: images.galleryWardrobeLight,
    alt: "Illustrative walk-in wardrobe in light wood with drawers and open shelving",
    aspect: "portrait",
  },
  {
    id: "bedroom-classic",
    title: "Classic Wooden Bedroom",
    category: "Bedrooms",
    image: images.galleryBedroomClassic,
    alt: "Illustrative classic bedroom with carved wooden wardrobes and a crystal chandelier",
    aspect: "portrait",
  },
  {
    id: "wardrobe-dark-open",
    title: "Dark Open Wardrobe",
    category: "Wardrobes",
    image: images.wardrobe,
    alt: "Illustrative dark wardrobe with open shelving and warm interior lighting",
    aspect: "landscape",
  },
  {
    id: "office-open-plan",
    title: "Open-Plan Workspace",
    category: "Commercial",
    image: images.galleryOfficeOpen,
    alt: "Illustrative open-plan office with glass partitions and carpet flooring",
    aspect: "landscape",
  },
  {
    id: "corridor-white",
    title: "Clean White Passage",
    category: "Other Interiors",
    image: images.galleryCorridor,
    alt: "Illustrative white corridor with built-in storage and a dark floor strip",
    aspect: "portrait",
  },
  {
    id: "office-desks",
    title: "Modern Office Interior",
    category: "Commercial",
    image: images.office,
    alt: "Illustrative modern office with desks, a whiteboard and large windows",
    aspect: "landscape",
  },
  {
    id: "ceiling-spotlights",
    title: "Warm Ceiling Lighting",
    category: "Other Interiors",
    image: images.detailLights,
    alt: "Illustrative ceiling with warm recessed spotlights",
    aspect: "landscape",
  },
  {
    id: "meeting-room",
    title: "Meeting Room",
    category: "Commercial",
    image: images.galleryMeeting,
    alt: "Illustrative meeting room with a wooden table, green chairs and a patterned rug",
    aspect: "landscape",
  },
  {
    id: "lounge-chesterfield",
    title: "Luxury Lounge",
    category: "Living Rooms",
    image: images.lounge,
    alt: "Illustrative lounge with a tufted sofa, chandelier and marble floor",
    aspect: "portrait",
  },
  {
    id: "dining-marble",
    title: "Marble Dining Detail",
    category: "Other Interiors",
    image: images.detailDining,
    alt: "Illustrative dining area with a marble table and warm wall lighting",
    aspect: "landscape",
  },
  {
    id: "curved-ceiling",
    title: "Curved Ceiling Detail",
    category: "Other Interiors",
    image: images.galleryCurvedCeiling,
    alt: "Illustrative curved ceiling feature with warm linear lighting",
    aspect: "landscape",
  },
];