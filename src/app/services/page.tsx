import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceSection } from "@/components/ServiceSection";
import { faqs } from "@/data/faqs";
import { serviceDetails } from "@/data/serviceDetails";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore KeyNest Interiors' interior design services: residential interiors, modular kitchens, bedrooms, wardrobes, commercial interiors, renovation, and custom furniture.",
  openGraph: {
    title: "Services | KeyNest Interiors",
    description:
      "Explore thoughtfully planned interior solutions designed to balance beauty, practicality, and your individual preferences.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-brand-ivory">
        <div className="wrapper py-16 text-center md:py-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/60" />
              Our Services
              <span className="h-px w-8 bg-brand-gold/60" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Interior Design Solutions for Every Space.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-charcoal/70 sm:text-lg">
              Explore thoughtfully planned interior solutions designed to
              balance beauty, practicality, and your individual preferences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y bg-white">
        <div className="wrapper space-y-16 md:space-y-24">
          {serviceDetails.map((service, i) => (
            <ServiceSection key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-brand-ivory">
        <div className="wrapper">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about our design process, consultations, and projects."
          />
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
            <FAQ items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA />
    </>
  );
}