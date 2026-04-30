"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { CloudHalos } from "./CloudHalos";
import { FloatingShapes } from "./FloatingShapes";
import { Marquee } from "./Marquee";
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

  const headlineWords = ["Hi,", "I'm", "Farnoosh."];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 md:pt-32"
    >
      <CloudHalos />
      <FloatingShapes />
      <div className="container relative flex flex-1 flex-col">
        {/* Main hero: text left, portrait right */}
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Left: headline + copy + CTAs */}
          <div className="md:col-span-9">
            <h1
              id="hero-heading"
              className="font-serif text-balance leading-[0.95] tracking-[-0.025em] text-[clamp(2.5rem,8vw,5.75rem)]"
            >
              {headlineWords.map((word, i) => {
                const isName = i === headlineWords.length - 1;
                return (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <motion.span
                      className={
                        isName
                          ? "inline-block bg-gradient-to-r from-[#F97316] via-[#E94BA4] to-[#9333EA] bg-clip-text pr-[0.18em] italic text-transparent"
                          : "inline-block pr-[0.18em]"
                      }
                      custom={i}
                      initial={reduce ? false : "hidden"}
                      animate="visible"
                      variants={wordVariants}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </h1>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 md:mt-8"
            >
              <p className="max-w-prose text-balance text-base text-fg-muted md:text-lg">
                <WavingHand className="mr-2 text-xl md:text-2xl" />A{" "}
                {site.role.toLowerCase()}, based in{" "}
                {site.location.split("·")[0].trim()}, specializing in
                simplifying complex workflows and turning ambiguous problems
                into intuitive, scalable solutions through UX strategy and
                systems thinking.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
                <Link
                  href="/#work"
                  className="group inline-flex items-center gap-2 rounded-full border border-fg bg-fg px-5 py-3 text-sm text-bg transition-colors duration-300 hover:bg-bg hover:text-fg"
                >
                  View my work
                  <span className="inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <a
                  href="/FarnooshBagheri-Resume(Product Designer).pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors duration-300 hover:border-fg"
                >
                  Download CV
                  <span aria-hidden>↓</span>
                </a>
              </div>

              <div className="mt-10 md:mt-14">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                  Industries
                </p>
                <ul className="flex flex-wrap gap-2">
                  {[
                    { label: "Fintech", dot: "#7B6BF0" },
                    { label: "B2B SaaS", dot: "#F97BAA" },
                    { label: "Marketplaces", dot: "#FFB060" },
                    { label: "Media", dot: "#9333EA" },
                  ].map((tag, i) => (
                    <motion.li
                      key={tag.label}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.9 + i * 0.06,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle px-3.5 py-1.5 text-sm text-fg"
                    >
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: tag.dot }}
                      />
                      {tag.label}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[260px] md:col-span-3 md:max-w-none md:justify-self-end"
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
                width={560}
                height={700}
                priority
                sizes="(min-width: 768px) 22vw, 60vw"
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-auto flex justify-center pb-6 pt-12 md:pt-16"
        >
          <Link
            href="/#work"
            className="group inline-flex items-center gap-3 text-fg-muted transition-colors duration-300 hover:text-fg"
          >
            <span className="font-sans text-base uppercase tracking-[0.3em] md:text-lg">
              Explore my work
            </span>
            <ArrowDown
              size={24}
              className="animate-bounce transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>

      {/* Marquee strip — sits at the bottom of the hero viewport */}
      <div
        aria-hidden
        className="relative mt-auto border-y border-border bg-bg-subtle"
      >
        <Marquee
          items={[
            "Interaction Design",
            "Critical Thinking",
            "UX Research Skills",
            "Design Systems",
            "User Testing",
            "Information Architecture",
            "Persona Development",
            "User Journey Mapping",
            "UX Writing",
            "Prototyping",
          ]}
        />
      </div>
    </section>
  );
}
