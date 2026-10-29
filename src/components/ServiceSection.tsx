import Image from "next/image";
import { Check, MessageCircle } from "lucide-react";
import { EnquiryButton } from "./EnquiryButton";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import type { ServiceDetail } from "@/data/serviceDetails";

type Props = {
  service: ServiceDetail;
  index: number;
};

export function ServiceSection({ service, index }: Props) {
  // Even rows: image on the left. Odd rows: image on the right (desktop only).
  const imageRight = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.slug}
      className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <Reveal
        variant={imageRight ? "right" : "left"}
        className={cn("relative", imageRight && "lg:order-2")}
      >
        <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div
          aria-hidden="true"
          className={cn(
            "absolute -top-4 size-12 rounded-full border border-brand-gold/50",
            imageRight ? "-left-4" : "-right-4",
          )}
        />
      </Reveal>

      <Reveal
        variant={imageRight ? "left" : "right"}
        delay={0.1}
        className={cn(imageRight && "lg:order-1")}
      >
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand-gold">
          {number}
          <span className="h-px w-8 bg-brand-gold/60" />
        </p>
        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-brand-charcoal/70">
          {service.description}
        </p>

        <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal/50">
          Possible scope of work
        </h3>
        <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                <Check className="size-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <EnquiryButton
          variant="teal"
          size="md"
          projectType={service.projectType}
          message={`I would like to discuss: ${service.title}.`}
          className="mt-8"
        >
          <MessageCircle className="size-4" />
          Discuss Your Requirements
        </EnquiryButton>
      </Reveal>
    </article>
  );
}