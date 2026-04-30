"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function AnimatedPortrait({
  src,
  alt,
  className = "",
  sizes,
  priority,
}: Props) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Pulsing accent halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/0 to-accent/20 blur-2xl"
        initial={{ opacity: 0.35, scale: 0.96 }}
        animate={
          reduce
            ? { opacity: 0.4 }
            : { opacity: [0.3, 0.55, 0.3], scale: [0.96, 1.04, 0.96] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Portrait container */}
      <motion.div
        className="relative h-full overflow-hidden rounded-2xl border border-border bg-bg-subtle"
        animate={reduce ? {} : { scale: hover ? 1.015 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />

        {/* Sparkle on hover */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 text-2xl"
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={
            hover
              ? { opacity: 1, scale: 1, rotate: [0, 14, -8, 0] }
              : { opacity: 0, scale: 0.6, rotate: -20 }
          }
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="rgb(var(--accent))">
            <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
          </svg>
        </motion.span>
      </motion.div>
    </div>
  );
}
