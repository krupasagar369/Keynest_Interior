import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { approachSteps, philosophy, story, values } from "@/data/about";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KeyNest Interiors: our design philosophy, our approach, and the values behind every space we design.",
  openGraph: {
    title: "About Us | KeyNest Interiors",
    description:
      "Learn about KeyNest Interiors: our design philosophy, our approach, and the values behind every space we design.",
  },
};

const detailImages = [
  {
    src: images.detailDining,
    alt: "Illustrative dining area with marble table and warm wall lighting",
  },
  {
    src: images.wardrobe,
    alt: "Illustrative open wardrobe with shelving and warm interior lighting",
  },
  {
    src: images.detailLights,
    alt: "Illustrative ceiling with warm recessed spotlights",
  },
  {
    src: images.detailBedroom,
    alt: "Illustrative bedroom with wardrobes and a ring chandelier",
  },
  {
    src: images.kitchen,
    alt: "Illustrative modern kitchen with dark cabinetry and a window",
  },
  {
    src: images.office,
    alt: "Illustrative modern office with desks and glass partitions",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-ivory">
        <div className="wrapper grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                <span className="h-px w-8 bg-brand-gold/60" />
                About KeyNest Interiors
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl">
                Designing Spaces That Feel Like You.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-charcoal/70 sm:text-lg">
                At KeyNest Interiors, we believe great interiors are more than
                beautiful spaces. They should reflect the people who live and
                work in them, balance form with function, and make everyday
                experiences better.
              </p>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={0.15} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={images.aboutHero}
                alt="Illustrative double-height living space with a statement chandelier and marble feature wall"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 size-14 rounded-full border border-brand-gold/50"
            />
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-y bg-white">
        <div className="wrapper">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={story.title}
            />
            <div className="mt-6 space-y-5">
              {story.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p className="leading-relaxed text-brand-charcoal/70">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="section-y bg-brand-ivory">
        <div className="wrapper">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Our Design Philosophy"
            description="We believe great interiors come from balancing four key elements."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="h-full">
                <div className="group h-full rounded-xl border border-brand-charcoal/5 bg-white p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="mx-auto flex size-12 items-center justify-center rounded-lg bg-brand-ivory text-brand-teal transition-colors duration-500 group-hover:bg-brand-teal group-hover:text-white">
                    <item.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/65">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section-y bg-white">
        <div className="wrapper grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Approach"
              title="How We Work"
              description="Our approach is collaborative and transparent. We listen first, then design with intention."
            />

            <ol className="mt-9 space-y-6">
              {approachSteps.map((step, i) => (
                <li key={step.title}>
                  <Reveal variant="left" delay={i * 0.12}>
                    <div className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-semibold text-white">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/65">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal variant="right" className="relative">
            <div className="relative aspect-[4/3.2] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={images.approach}
                alt="Illustrative open-plan kitchen and living area with white cabinetry and track lighting"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 size-14 rounded-full border border-brand-gold/50"
            />
          </Reveal>
        </div>
      </section>

      {/* WHAT MATTERS TO US */}
      <section className="section-y bg-brand-ivory">
        <div className="wrapper">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow="Our Values"
              title="What Matters to Us"
            />

            <ul className="mt-8 space-y-3">
              {values.map((value, i) => (
                <li key={value}>
                  <Reveal delay={i * 0.1}>
                    <div className="flex items-center gap-3 rounded-lg border border-brand-charcoal/5 bg-white px-5 py-4 text-sm shadow-sm transition-all duration-300 hover:translate-x-1 hover:border-brand-gold/40 hover:shadow-md">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                        <Check className="size-3.5" />
                      </span>
                      {value}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DESIGN DETAILS */}
      <section className="section-y bg-white">
        <div className="wrapper">
          <SectionHeading
            eyebrow="Design Details"
            title="Inspiring Interior Details"
            description="Illustrative imagery that reflects the kind of detail and finish we aim for."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {detailImages.map((img, i) => (
              <Reveal key={img.alt} variant="zoom" delay={(i % 3) * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-teal/0 transition-colors duration-500 group-hover:bg-brand-teal/20" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA
        title="Ready to Start Your Design Journey?"
        description="Let's talk about your space and how we can bring your vision to life."
        primaryLabel="Get a Free Consultation"
      />
    </>
  );
}