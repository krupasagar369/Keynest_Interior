"use client";

import { MotionConfig } from "motion/react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // Respects the visitor's "reduce motion" setting automatically.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}