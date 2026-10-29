import { siteConfig } from "@/data/siteConfig";

export type EnquiryDetails = {
  name: string;
  mobile: string;
  email?: string;
  projectType?: string;
  projectTypeLabel?: string; // defaults to "Project Type"
  location?: string;
  budget?: string;
  timeline?: string;
  requirements: string;
};

export function buildWhatsAppUrl(
  message: string,
  number: string = siteConfig.whatsapp.number,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildEnquiryMessage(d: EnquiryDetails) {
  const lines: string[] = [
    "Hello KeyNest Interiors,",
    "",
    "I would like to enquire about an interior design project.",
    "",
    `Name: ${d.name}`,
    `Mobile: ${d.mobile}`,
  ];

  if (d.email) lines.push(`Email: ${d.email}`);
  if (d.projectType) {
    lines.push(`${d.projectTypeLabel ?? "Project Type"}: ${d.projectType}`);
  }
  if (d.location) lines.push(`Location: ${d.location}`);
  if (d.budget) lines.push(`Budget: ${d.budget}`);
  if (d.timeline) lines.push(`Preferred Timeline: ${d.timeline}`);

  lines.push(
    "",
    "Project Requirements:",
    d.requirements,
    "",
    "Please contact me to discuss my requirements.",
    "",
    "Thank you.",
  );

  return lines.join("\n");
}