import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        gold: "bg-brand-gold text-brand-charcoal shadow-sm hover:-translate-y-0.5 hover:bg-brand-gold-dark hover:shadow-lg",
        teal: "bg-brand-teal text-white shadow-sm hover:-translate-y-0.5 hover:bg-brand-teal-dark hover:shadow-lg",
        outline:
          "border border-brand-charcoal/20 bg-transparent text-brand-charcoal hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal",
        outlineLight:
          "border border-white/40 bg-transparent text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10",
        text: "text-brand-teal hover:underline",
      },
      size: {
        none: "",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;