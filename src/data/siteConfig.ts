export type SocialPlatform = "instagram" | "facebook" | "linkedin";

export const siteConfig = {
  name: "KeyNest Interiors",
  tagline: "Beautiful Spaces. Thoughtfully Designed.",
  description:
    "KeyNest Interiors creates thoughtfully designed residential and commercial interiors that balance style, comfort, and functionality.",

  logo: {
    src: "/images/keynest-interiors-logo.png",
    // Set these to your real logo's pixel size so the proportions stay correct.
    width: 160,
    height: 56,
    alt: "KeyNest Interiors logo",
  },

  phones: [
    { display: "+91 96205 99987", href: "tel:+919620599987" },
    { display: "+91 97018 71837", href: "tel:+919701871837" },
  ],

  whatsapp: {
    number: "919620599987",
    display: "+91 96205 99987",
    defaultMessage:
      "Hello KeyNest Interiors, I would like to know more about your interior design services.",
  },

  // Add real URLs later, e.g. instagram: "https://instagram.com/yourhandle".
  // Platforms with null are shown disabled, never as broken links.
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
  } as Record<SocialPlatform, string | null>,

  // GOOGLE MAP (leave null until you have the links; the map section stays hidden)
  // embedUrl: Google Maps > Share > "Embed a map" > copy ONLY the src="..." URL.
  //           It must start with https://www.google.com/maps/embed
  // openUrl:  any normal Google Maps share link (https://maps.app.goo.gl/... works),
  //           used for the "Open in Google Maps" button.
  map: {
    embedUrl: null as string | null,
    openUrl: null as string | null,
    title: "KeyNest Interiors location map",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};