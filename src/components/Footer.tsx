import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "./icons";
import { siteConfig, type SocialPlatform } from "@/data/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const socials: {
  key: SocialPlatform;
  label: string;
  Icon: typeof InstagramIcon;
}[] = [
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
];

const serviceLinks = [
  { label: "Residential Interiors", href: "/services#residential-interiors" },
  { label: "Modular Kitchens", href: "/services#modular-kitchens" },
  { label: "Living Room Design", href: "/services#living-room-interiors" },
  { label: "Commercial Interiors", href: "/services#commercial-interiors" },
  { label: "Renovation & Remodeling", href: "/services#renovation-remodeling" },
  { label: "View All Services", href: "/services" },
];

const linkClass = "text-sm text-white/70 transition hover:text-brand-gold";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="wrapper grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-lg bg-white p-2.5">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            Premium residential and commercial interior design. We transform
            your vision into spaces that feel uniquely yours.
          </p>

          <ul className="mt-6 flex gap-3">
            {socials.map(({ key, label, Icon }) => {
              const url = siteConfig.social[key];
              return (
                <li key={key}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-9 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-brand-gold hover:text-brand-charcoal"
                    >
                      <Icon className="size-4" />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      title={`${label} coming soon`}
                      className="flex size-9 cursor-not-allowed items-center justify-center rounded-md bg-white/5 text-white/30"
                    >
                      <Icon className="size-4" />
                      <span className="sr-only">{label} (coming soon)</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Our Services
          </h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-3">
            {siteConfig.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Phone className="size-4 text-brand-gold" />
                  {p.display}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={buildWhatsAppUrl(siteConfig.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1fb857] hover:shadow-lg"
          >
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrapper flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-brand-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-brand-gold">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}