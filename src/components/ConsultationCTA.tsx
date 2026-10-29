import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { EnquiryButton } from "./EnquiryButton";
import { Reveal } from "./Reveal";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  description?: string;
  primaryLabel?: string;
};

export function ConsultationCTA({
  title = "Let's Create a Space You'll Love.",
  description = "Tell us about your dream home or workspace. Let's discuss your ideas and explore the possibilities.",
  primaryLabel = "Start Your Project",
}: Props) {
  return (
    <section className="section-y relative overflow-hidden bg-gradient-to-br from-brand-teal-dark via-brand-teal to-brand-teal-dark">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 size-72 animate-float rounded-full border border-brand-gold/30"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-20 size-96 animate-float rounded-full border border-brand-gold/20 [animation-delay:2s]"
      />

      <div className="wrapper relative text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            <span className="h-px w-8 bg-brand-gold/60" />
            Get Started
            <span className="h-px w-8 bg-brand-gold/60" />
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80">
            {description}
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <EnquiryButton variant="gold" size="lg">
            <MessageCircle className="size-4" />
            {primaryLabel}
          </EnquiryButton>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outlineLight", size: "lg" }))}
          >
            Contact Us
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}