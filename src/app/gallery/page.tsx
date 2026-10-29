import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore interior design ideas, thoughtful details, material combinations, and spaces that inspire better living. Illustrative inspiration from KeyNest Interiors.",
  openGraph: {
    title: "Gallery | KeyNest Interiors",
    description:
      "Explore design ideas, thoughtful details, material combinations, and spaces that inspire better living.",
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-brand-ivory">
        <div className="wrapper py-16 text-center md:py-24">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/60" />
              Portfolio
              <span className="h-px w-8 bg-brand-gold/60" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl">
              Our Gallery of Interior Inspiration
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-charcoal/70 sm:text-lg">
              Explore design ideas, thoughtful details, material combinations,
              and spaces that inspire better living.
            </p>
            <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-brand-charcoal/50">
              Images shown are illustrative design references. They will be
              replaced with genuine KeyNest Interiors project photographs as
              they become available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section-y bg-white">
        <div className="wrapper">
          <ProjectGallery items={galleryItems} />
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA
        title="Inspired by What You See?"
        description="Let's create something beautiful together. Share your ideas and we'll help bring them to life."
        primaryLabel="Start Your Project"
      />
    </>
  );
}