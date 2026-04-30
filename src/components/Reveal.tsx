"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  /** A larger value travels further on entry */
  y?: number;
  scale?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p" | "h1" | "h2" | "h3";
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  scale,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={reduce ? false : { opacity: 0, y, scale: scale ?? 1 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
