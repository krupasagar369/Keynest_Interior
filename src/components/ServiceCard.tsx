import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EnquiryButton } from "./EnquiryButton";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-brand-charcoal/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-gold transition-transform duration-500 group-hover:scale-x-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-brand-charcoal">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/65">
          {service.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <Link
            href={`/services#${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal"
          >
            Explore Service
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <EnquiryButton
            variant="text"
            size="none"
            projectType={service.projectType}
            className="text-xs font-medium text-brand-charcoal/50 hover:text-brand-teal"
          >
            Enquire
          </EnquiryButton>
        </div>
      </div>
    </article>
  );
}