import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  align = "center",
  className,
}: Props) {
  const centered = align === "center";

  return (
    <Reveal className={cn(centered && "mx-auto max-w-2xl text-center", className)}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold",
          centered && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-brand-gold/60" />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-brand-gold/60" />}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold sm:text-4xl",
          light ? "text-white" : "text-brand-charcoal",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            light ? "text-white/80" : "text-brand-charcoal/70",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}