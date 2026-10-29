import { ExternalLink, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { buttonVariants } from "./ui/Button";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function LocationMap() {
  const { embedUrl, openUrl, title } = siteConfig.map;

  // Only render a real Google Maps embed. Anything else is ignored.
  if (!embedUrl || !embedUrl.startsWith("https://www.google.com/maps/embed")) {
    return null;
  }

  return (
    <section className="section-y bg-brand-ivory">
      <div className="wrapper">
        <Reveal className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/60" />
              Find Us
            </p>
            <h2 className="mt-3 flex items-center gap-2 text-2xl font-semibold sm:text-3xl">
              <MapPin className="size-6 text-brand-teal" />
              Our Location
            </h2>
          </div>

          {openUrl && (
            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "md" }))}
            >
              Open in Google Maps
              <ExternalLink className="size-4" />
            </a>
          )}
        </Reveal>

        <Reveal variant="zoom" delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-white shadow-xl">
            <iframe
              src={embedUrl}
              title={title}
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[320px] w-full border-0 sm:h-[450px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}