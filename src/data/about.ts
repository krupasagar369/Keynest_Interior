import { Eye, Heart, Palette, Ruler, type LucideIcon } from "lucide-react";

// EDIT: replace with the owner's real story when available.
// Kept free of founding dates, numbers, and unverified claims.
export const story = {
  title: "How KeyNest Interiors Began",
  paragraphs: [
    "KeyNest Interiors is built on a simple belief: everyone deserves a space that feels truly their own. We believe good design should feel approachable, personal, and practical for the way people actually live and work.",
    "We work on residential and commercial interiors, and our focus stays the same: creating spaces that are beautiful, functional, and deeply personal.",
  ],
};

export const philosophy: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: Eye,
    title: "Aesthetics",
    text: "Beautiful design that feels timeless, not trendy.",
  },
  {
    icon: Heart,
    title: "Comfort",
    text: "Spaces that feel good to live and work in.",
  },
  {
    icon: Ruler,
    title: "Functionality",
    text: "Layouts that work as well as they look.",
  },
  {
    icon: Palette,
    title: "Thoughtful Detailing",
    text: "The small choices that make a big difference.",
  },
];

export const approachSteps = [
  {
    title: "Listen",
    text: "We start by understanding your space, lifestyle, preferences, and goals.",
  },
  {
    title: "Plan",
    text: "We develop layouts, material palettes, and a design direction tailored to your needs.",
  },
  {
    title: "Design",
    text: "We refine the concept with your input, creating a cohesive plan for your space.",
  },
  {
    title: "Coordinate",
    text: "We work through implementation, coordinating materials and execution.",
  },
];

export const values = [
  "Quality in materials and execution",
  "Thoughtful design that serves real life",
  "Transparency in scope and process",
  "Open communication throughout the project",
];