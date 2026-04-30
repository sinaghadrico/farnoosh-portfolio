"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  id?: string;
  className?: string;
};

export function UnderlinedTitle({ children, icon, id, className }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const text = typeof children === "string" ? children : String(children);
  const letters = text.split("");

  return (
    <div ref={ref} className={cn("inline-flex flex-col gap-1", className)}>
      <div className="inline-flex items-center gap-3">
        {icon && (
          <motion.span
            aria-hidden
            className="text-2xl leading-none md:text-3xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {icon}
          </motion.span>
        )}
        <h2
          id={id}
          aria-label={text}
          className="font-sans text-lg font-semibold uppercase tracking-[0.18em] text-fg md:text-xl"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              aria-hidden
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "inline-block",
                whiteSpace: letter === " " ? "pre" : undefined,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
      </div>
    </div>
  );
}
