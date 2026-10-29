"use client";

import { motion } from "motion/react";

type Variant = "up" | "left" | "right" | "zoom" | "fade";

const hidden = {
  up: { opacity: 0, y: 28 },
  left: { opacity: 0, x: -40 },
  right: { opacity: 0, x: 40 },
  zoom: { opacity: 0, scale: 0.94 },
  fade: { opacity: 0 },
} as const;

const shown = { opacity: 1, x: 0, y: 0, scale: 1 };

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={hidden[variant]}
      whileInView={shown}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Thin line that draws itself from left to right (used in the process section).
export function GrowLine({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      style={{ originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    />
  );
}