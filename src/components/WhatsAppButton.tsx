import { WhatsAppIcon } from "./icons";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(siteConfig.whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KeyNest Interiors on WhatsApp"
      className="group fixed right-5 z-30 bottom-[max(1.25rem,env(safe-area-inset-bottom))]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 motion-reduce:animate-none"
      />
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
        <WhatsAppIcon className="size-7" />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-md bg-brand-charcoal px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block">
        Chat with KeyNest Interiors
      </span>
    </a>
  );
}