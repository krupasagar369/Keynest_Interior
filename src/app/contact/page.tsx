import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons";
import { LocationMap } from "@/components/LocationMap";
import { Reveal } from "@/components/Reveal";
import { SocialChips } from "@/components/SocialChips";
import { siteConfig } from "@/data/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact KeyNest Interiors to begin a conversation about your interior design project. Call us or send your requirements on WhatsApp.",
  openGraph: {
    title: "Contact Us | KeyNest Interiors",
    description:
      "Share your ideas and requirements with us. Contact our team to begin a conversation about your interior design project.",
  },
};

const phoneLabels = ["Primary", "Secondary"];

export default function ContactPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-brand-ivory">
        <div className="wrapper py-16 text-center md:py-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/60" />
              Contact
              <span className="h-px w-8 bg-brand-gold/60" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Let&apos;s Talk About Your Space.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-charcoal/70 sm:text-lg">
              Share your ideas and requirements with us. Contact our team to
              begin a conversation about your interior design project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-y bg-white">
        <div className="wrapper grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10">
          {/* LEFT: contact options */}
          <div className="space-y-6">
            <Reveal variant="left">
              <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-6 sm:p-7">
                <h2 className="text-lg font-semibold">Call Us</h2>
                <p className="mt-1 text-sm text-brand-charcoal/65">
                  Speak directly with our team.
                </p>
                <ul className="mt-5 space-y-3">
                  {siteConfig.phones.map((phone, i) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="group flex items-center gap-4 rounded-xl bg-brand-ivory p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-teal/10 text-brand-teal transition-colors duration-300 group-hover:bg-brand-teal group-hover:text-white">
                          <Phone className="size-5" />
                        </span>
                        <span>
                          <span className="block text-xs text-brand-charcoal/55">
                            {phoneLabels[i] ?? "Phone"}
                          </span>
                          <span className="block text-base font-semibold">
                            {phone.display}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="left" delay={0.1}>
              <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-6 sm:p-7">
                <h2 className="text-lg font-semibold">WhatsApp</h2>
                <p className="mt-1 text-sm text-brand-charcoal/65">
                  Quick and convenient: chat with us directly.
                </p>
                <a
                  href={buildWhatsAppUrl(siteConfig.whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex h-12 items-center justify-center gap-2 rounded-md bg-[#128C7E] text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f7a6c] hover:shadow-lg"
                >
                  <WhatsAppIcon className="size-5" />
                  Chat on WhatsApp
                </a>
                <p className="mt-3 text-center text-xs text-brand-charcoal/55">
                  {siteConfig.whatsapp.display}
                </p>
              </div>
            </Reveal>

            <Reveal variant="left" delay={0.2}>
              <div className="rounded-2xl bg-brand-teal p-6 text-white sm:p-7">
                <h2 className="text-lg font-semibold">Social Media</h2>
                <p className="mt-1 mb-5 text-sm text-white/80">
                  Follow us for design inspiration and updates.
                </p>
                <SocialChips />
              </div>
            </Reveal>
          </div>

          {/* RIGHT: form */}
          <Reveal variant="right" delay={0.1}>
            <div className="rounded-2xl border border-brand-charcoal/10 bg-white p-6 shadow-sm sm:p-9">
              <h2 className="text-2xl font-semibold">Send Us Your Details</h2>
              <p className="mt-2 mb-7 text-sm leading-relaxed text-brand-charcoal/65">
                Fill out the form below and we&apos;ll open a WhatsApp
                conversation with your details prefilled.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* GOOGLE MAP (appears only after siteConfig.map.embedUrl is set) */}
      <LocationMap />
    </>
  );
}