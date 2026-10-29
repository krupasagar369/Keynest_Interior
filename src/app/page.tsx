import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCheck,
  Hammer,
  Heart,
  MessageCircle,
  PencilRuler,
  Ruler,
  Search,
  Sparkles,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { EnquiryButton } from "@/components/EnquiryButton";
import { GrowLine, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { buttonVariants } from "@/components/ui/Button";
import { images } from "@/data/images";
import { projects } from "@/data/projects";
import { featuredServices } from "@/data/services";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Sparkles,
    title: "Personalized Design",
    text: "Every space is designed around your unique style and needs.",
  },
  {
    icon: Ruler,
    title: "Thoughtful Space Planning",
    text: "Layouts that maximize function and flow for everyday living.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Focused Execution",
    text: "Attention to materials, finishes, and construction details.",
  },
  {
    icon: Heart,
    title: "Customer-Centric Service",
    text: "Clear communication and collaboration at every stage.",
  },
];

const whyPoints = [
  "Design tailored to individual needs",
  "Functional layouts that make better use of space",
  "Thoughtful material and color coordination",
  "Attention to finishing details",
  "Clear communication throughout the project",
];

const processSteps = [
  {
    icon: Search,
    title: "Discover",
    text: "Understand your space, lifestyle, preferences, and requirements.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    text: "Develop the concept, layout, material palette, and design direction.",
  },
  {
    icon: Hammer,
    title: "Plan & Execute",
    text: "Coordinate the agreed scope, materials, and implementation.",
  },
  {
    icon: CheckCheck,
    title: "Final Touches",
    text: "Review finishing details and prepare the space for handover.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* A. HERO */}
      <section className="relative overflow-hidden bg-brand-ivory">
        <div className="wrapper grid items-center gap-14 py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                <span className="h-px w-8 bg-brand-gold/60" />
                Premium Interior Design
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
                Beautiful Spaces.{" "}
                <span className="text-brand-teal">Thoughtfully Designed.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-charcoal/70 sm:text-lg">
                Discover interiors that bring together style, comfort, and
                functionality. At KeyNest Interiors, we help transform your
                vision into spaces that feel uniquely yours.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-9 flex flex-col gap-4 sm:flex-row">
              <EnquiryButton variant="gold" size="lg">
                <MessageCircle className="size-4" />
                Get a Free Consultation
              </EnquiryButton>
              <Link
                href="/gallery"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                Explore Our Projects
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal variant="zoom" delay={0.2} className="relative">
            <div className="relative aspect-[4/3.3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={images.heroLiving}
                alt="Illustrative contemporary living room with a teal sofa, marble floor and soft natural light"
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

            <div className="absolute -bottom-5 left-4 animate-float rounded-xl bg-white px-4 py-3 shadow-xl sm:left-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-ivory text-brand-teal">
                  <Sparkles className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Tailored to You</p>
                  <p className="text-xs text-brand-charcoal/60">
                    Every detail, personalized
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* B. TRUST STRIP */}
      <section className="border-b border-brand-charcoal/5 bg-white py-10">
        <div className="wrapper grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-ivory text-brand-teal">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-charcoal/60">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* C. FEATURED SERVICES */}
      <section className="section-y bg-brand-ivory">
        <div className="wrapper">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Interior Design Services"
            description="From complete home interiors to specialized spaces, we offer design solutions tailored to your needs."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 0.08} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* D. FEATURED PROJECTS */}
      <section className="section-y bg-white">
        <div className="wrapper">
          <SectionHeading
            eyebrow="Portfolio"
            title="Spaces Designed to Inspire"
            description="A selection of interior design concepts and inspiration. Images shown are illustrative design references."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.1}>
                <Link
                  href="/gallery"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-sm:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
                    <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold text-brand-charcoal">
                      {project.category}
                    </span>
                    <p className="mt-2 text-base font-semibold">{project.title}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/gallery"
              className={cn(buttonVariants({ variant: "outline", size: "md" }))}
            >
              View All Projects
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* E. WHY CHOOSE */}
      <section className="section-y bg-brand-ivory">
        <div className="wrapper grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={images.whyChoose}
                alt="Illustrative living room with a chandelier, tall curtains and warm wooden accents"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 size-16 rounded-full border border-brand-gold/50"
            />
          </Reveal>

          <Reveal variant="right">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              <span className="h-px w-8 bg-brand-gold/60" />
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Why Choose KeyNest Interiors?
            </h2>
            <p className="mt-4 leading-relaxed text-brand-charcoal/70">
              We believe great interiors come from understanding how you live
              and what matters to you. Our approach combines design sensibility
              with practical execution.
            </p>

            <ul className="mt-7 space-y-3.5">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                    <Check className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "teal", size: "md" }), "mt-9")}
            >
              Learn More About Us
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* F. DESIGN PROCESS */}
      <section className="section-y bg-white">
        <div className="wrapper">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Design Process"
            description="A clear, collaborative approach that keeps you informed at every step."
          />

          <div className="relative mt-14">
            <GrowLine className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold/20 md:block" />

            <ol className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {processSteps.map((step, i) => (
                <li key={step.title}>
                  <Reveal delay={i * 0.15} className="text-center">
                    <div className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-brand-gold/40 bg-white text-brand-teal shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lg">
                      <step.icon className="size-6" />
                      <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-brand-charcoal">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-brand-charcoal/65">
                      {step.text}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* G. GALLERY PREVIEW */}
      <section className="section-y bg-brand-ivory">
        <div className="wrapper">
          <SectionHeading
            eyebrow="Gallery"
            title="A Glimpse of Our Design World"
            description="Explore kitchens, bedrooms, living rooms, and storage solutions designed with care."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
            {projects.map((project, i) => (
              <Reveal key={project.id} variant="zoom" delay={i * 0.07}>
                <Link
                  href="/gallery"
                  aria-label={`View gallery: ${project.title}`}
                  className="group relative block aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-teal/0 transition-colors duration-500 group-hover:bg-brand-teal/25" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/gallery"
              className={cn(buttonVariants({ variant: "outline", size: "md" }))}
            >
              Explore Full Gallery
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* H. CONSULTATION CTA */}
      <ConsultationCTA />
    </>
  );
}