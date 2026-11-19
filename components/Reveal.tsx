"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Fades content up gently the first time it scrolls into view.
 * - LazyMotion + `m` loads only the small animation bundle (good for page speed).
 * - reducedMotion="user" turns animations off for people who ask their OS for less motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <m.div
          className={className}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
          {children}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
