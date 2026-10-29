"use client";

import { useEnquiry } from "./EnquiryProvider";
import { buttonVariants, type ButtonVariantProps } from "./ui/Button";
import { cn } from "@/lib/utils";

type Props = ButtonVariantProps & {
  projectType?: string;
  message?: string;
  className?: string;
  children: React.ReactNode;
};

export function EnquiryButton({
  projectType,
  message,
  variant,
  size,
  className,
  children,
}: Props) {
  const { openEnquiry } = useEnquiry();

  return (
    <button
      type="button"
      onClick={() => openEnquiry({ projectType, message })}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
}