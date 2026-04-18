"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();

  const wordVariants = {
    hidden: { y: "110%" },
    visible: (i: number) => ({
      y: "0%",
      transition: {
        delay: 0.05 + i * 0.06,
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const headlineWords = [
    "Designing",
    "calm,",
    "considered",
    "software",
    "for",
    "people.",
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] pt-28 md:pt-32"
    >
      <div className="container">
        {/* Top meta strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 border-b border-border pb-6 text-xs md:grid-cols-4"
        >
          <div>
            <p className="label mb-1.5">Designer</p>
            <p className="text-fg">{site.fullName}</p>
          </div>
          <div>
            <p className="label mb-1.5">Based in</p>
            <p className="text-fg">{site.location}</p>
          </div>
          <div>
            <p className="label mb-1.5">Index</p>
            <p className="font-mono text-fg-muted">No. 04 / 2026</p>
          </div>
          <div>
            <p className="label mb-1.5">Status</p>
            <p className="inline-flex items-center text-fg">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available
            </p>
          </div>
        </motion.div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="mt-12 font-serif text-display-2xl text-balance md:mt-20"
        >
          <span className="block">
            {headlineWords.slice(0, 3).map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block pr-[0.18em]"
                  custom={i}
                  initial={reduce ? false : "hidden"}
                  animate="visible"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
          <span className="block">
            {headlineWords.slice(3).map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block pr-[0.18em] italic text-fg-muted last:text-accent"
                  custom={i + 3}
                  initial={reduce ? false : "hidden"}
                  animate="visible"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        {/* Sub copy + CTA */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid items-end gap-8 md:mt-14 md:grid-cols-12"
        >
          <p className="max-w-prose text-balance text-base text-fg-muted md:col-span-7 md:text-lg">
            I&rsquo;m {site.name} — a {site.role.toLowerCase()} working with founders and
            product teams on the surface area of digital products. Independent practice,
            currently {site.location.split("·")[0].trim().toLowerCase()}.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-fg bg-fg px-5 py-3 text-sm text-bg transition-colors duration-300 hover:bg-bg hover:text-fg"
            >
              View selected work
              <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-border px-5 py-3 text-sm transition-colors duration-300 hover:border-fg"
            >
              About me
            </Link>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 flex items-center justify-center gap-3 pb-8 text-fg-muted md:mt-32"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Selected work below
          </span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
