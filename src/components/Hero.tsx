"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { CloudHalos } from "./CloudHalos";
import { FloatingShapes } from "./FloatingShapes";
import { WavingHand } from "./WavingHand";

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
      className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32"
    >
      <CloudHalos />
      <FloatingShapes />
      <div className="container relative">
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
              Available <span aria-hidden className="ml-1">🟢</span>
            </p>
          </div>
        </motion.div>

        {/* Main hero: text left, portrait right */}
        <div className="mt-12 grid items-center gap-12 md:mt-16 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Left: headline + copy + CTAs */}
          <div className="md:col-span-8">
            <h1
              id="hero-heading"
              className="font-serif text-display-md text-balance leading-[0.95] md:text-display-lg lg:text-display-xl"
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

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 md:mt-8"
            >
              <p className="max-w-prose text-balance text-base text-fg-muted md:text-lg">
                <WavingHand className="mr-2 text-xl md:text-2xl" />
                Hi, I&rsquo;m {site.name} — a {site.role.toLowerCase()} working with founders and
                product teams on the surface area of digital products. Independent practice,
                currently {site.location.split("·")[0].trim().toLowerCase()}.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
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
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:col-span-4 md:justify-self-end"
          >
            <span
              aria-hidden
              className="absolute -right-2 -top-2 hidden h-full w-full rounded-3xl border border-border md:block"
            />
            <motion.span
              aria-hidden
              animate={
                reduce
                  ? undefined
                  : { opacity: [0.45, 0.7, 0.45], scale: [0.97, 1.03, 0.97] }
              }
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 via-fuchsia-300/25 to-sky-300/25 blur-2xl"
            />
            <motion.div
              whileHover={reduce ? undefined : { rotate: -1.5, scale: 1.01 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-border bg-bg-subtle shadow-lg"
            >
              <Image
                src="/personal.JPG"
                alt={`Portrait of ${site.fullName}`}
                width={720}
                height={900}
                priority
                sizes="(min-width: 768px) 32vw, 80vw"
                className="h-auto w-full object-cover"
              />
            </motion.div>

            <motion.div
              aria-hidden
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-6 hidden rounded-2xl border border-border bg-bg px-3 py-2 shadow-md md:block"
            >
              <span className="text-2xl">✨</span>
            </motion.div>
            <motion.div
              aria-hidden
              animate={reduce ? undefined : { y: [0, 6, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-3 bottom-10 hidden rounded-full border border-border bg-bg px-3 py-2 shadow-md md:block"
            >
              <span className="text-xl">🎨</span>
            </motion.div>
          </motion.div>
        </div>

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
