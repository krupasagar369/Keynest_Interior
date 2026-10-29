import { images } from "./images";
import type { projectTypes } from "./enquiryOptions";

export type ServiceDetail = {
  slug: string; // section id, used by /services#slug links
  title: string;
  description: string;
  features: string[]; // possible scope of work
  image: string;
  imageAlt: string;
  projectType: (typeof projectTypes)[number];
};

// EDIT: keep only the services the business has confirmed it offers.
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "residential-interiors",
    title: "Residential Interior Design",
    description:
      "Turn your home into a space that reflects your personality. We plan residential interiors around your layout, lifestyle, and taste, balancing aesthetics, comfort, and everyday function.",
    features: [
      "Complete home interior planning",
      "Material and color coordination",
      "Furniture selection",
      "Lighting design",
    ],
    image: images.residential,
    imageAlt: "Illustrative residential bedroom and living interior with a chandelier",
    projectType: "Full Home Interiors",
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchen Design",
    description:
      "Modern kitchens planned for efficiency and elegance. We design layouts that make cooking a pleasure, with smart storage solutions and carefully chosen finishes.",
    features: [
      "Smart storage solutions",
      "Efficient workflow layout",
      "Modern hardware and finishes",
      "Countertop and backsplash selection",
    ],
    image: images.kitchen,
    imageAlt: "Illustrative modern modular kitchen with dark cabinetry and light worktops",
    projectType: "Modular Kitchen",
  },
  {
    slug: "bedroom-interiors",
    title: "Bedroom and Wardrobe Design",
    description:
      "Create a restful retreat with thoughtfully designed bedrooms and wardrobes. We balance ambiance, storage, and design for a space that feels personal and calming.",
    features: [
      "Custom wardrobe design",
      "Ambient lighting",
      "Space-optimized storage",
      "Considered finishes",
    ],
    image: images.bedroom,
    imageAlt: "Illustrative bedroom with a seating stool, wardrobes and soft lighting",
    projectType: "Bedroom and Wardrobes",
  },
  {
    slug: "living-room-interiors",
    title: "Living Room Interiors",
    description:
      "Your living room is the heart of your home. We create inviting spaces that work for both relaxing and entertaining, with carefully curated furniture, lighting, and decor.",
    features: [
      "Furniture layout and selection",
      "Accent lighting",
      "Wall treatments",
      "Decor styling",
    ],
    image: images.livingBlue,
    imageAlt: "Illustrative living room with a blue sofa and warm wall lighting",
    projectType: "Living Room",
  },
  {
    slug: "space-planning-styling",
    title: "Space Planning and Interior Styling",
    description:
      "Make the most of every square foot. Our space planning improves flow and function, while our styling brings together colors, textures, and decor for a cohesive look.",
    features: [
      "Functional layout planning",
      "Color and material palettes",
      "Decor and accessory styling",
      "Circulation and flow planning",
    ],
    image: images.styling,
    imageAlt: "Illustrative styled living space with neutral tones and tall curtains",
    projectType: "Other",
  },
  {
    slug: "commercial-interiors",
    title: "Commercial Interior Design",
    description:
      "From offices to other work and customer-facing spaces, we design commercial interiors that reflect your brand and support your team and visitors.",
    features: [
      "Brand-aligned design",
      "Ergonomic planning",
      "Reception and common areas",
      "Professional lighting",
    ],
    image: images.office,
    imageAlt: "Illustrative modern office with desks and glass partitions",
    projectType: "Commercial Interiors",
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation and Remodeling",
    description:
      "Give your existing space new life. We plan renovation and remodeling updates that improve how a space looks and works, with a fresh, modern result.",
    features: [
      "Room-by-room or full renovations",
      "Layout updates",
      "Surface and finish upgrades",
      "Coordination of the agreed scope",
    ],
    image: images.renovation,
    imageAlt: "Illustrative renovated interior with a tufted sofa and marble floor",
    projectType: "Renovation",
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture and Storage Solutions",
    description:
      "When standard sizes won't do, we design custom furniture and storage tailored to your space, style, and requirements, planned for both beauty and everyday use.",
    features: [
      "Bespoke furniture design",
      "Built-in storage solutions",
      "Custom cabinetry",
      "Material and finish selection",
    ],
    image: images.furniture,
    imageAlt: "Illustrative custom wooden cabinet with a decorative vase",
    projectType: "Other",
  },
  {
    slug: "false-ceilings-lighting",
    title: "False Ceilings and Lighting Design",
    description:
      "Elevate your space with thoughtfully designed false ceilings and lighting plans. We create ambiance, define zones, and add architectural interest.",
    features: [
      "False ceiling design",
      "Layered lighting plans",
      "Ambient and accent lighting",
      "Architectural detail",
    ],
    image: images.detailLights,
    imageAlt: "Illustrative ceiling with warm recessed spotlights",
    projectType: "Other",
  },
  {
    slug: "wardrobes-storage",
    title: "Wardrobes and Storage",
    description:
      "Make the most of your storage with intelligently designed wardrobes and built-in solutions. From walk-in closets to compact wardrobes, we plan storage that is both functional and beautiful.",
    features: [
      "Walk-in closet design",
      "Sliding wardrobe options",
      "Built-in shelving",
      "Smart organization systems",
    ],
    image: images.wardrobe,
    imageAlt: "Illustrative open wardrobe with shelving and warm interior lighting",
    projectType: "Bedroom and Wardrobes",
  },
];