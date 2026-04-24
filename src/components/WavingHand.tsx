"use client";

import { motion, useReducedMotion } from "framer-motion";

export function WavingHand({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      role="img"
      className={`inline-block origin-[70%_70%] ${className}`}
      initial={reduce ? false : { rotate: 0 }}
      animate={
        reduce
          ? undefined
          : {
              rotate: [0, 14, -8, 14, -4, 10, 0, 0, 0, 0],
            }
      }
      transition={{
        duration: 2.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2.5,
      }}
    >
      👋
    </motion.span>
  );
}
