import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { AnimatedPortrait } from "@/components/AnimatedPortrait";
import { getFeaturedProjects } from "@/content/projects";
import { aboutCopy } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.fullName} — ${site.role}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const services = [
  {
    no: "01",
    emoji: "✏️",
    title: "Product design",
    body: "End-to-end design for software products: from research and IA to interaction design and shipped UI.",
  },
  {
    no: "02",
    emoji: "🧩",
    title: "Design systems",
    body: "Tokens, components, and documentation that scale with the team — built to be easy to extend and easy to leave.",
  },
  {
    no: "03",
    emoji: "🎨",
    title: "Brand & identity",
    body: "The verbal and visual surface of the product — names, voice, type, color, and the marketing site that introduces them.",
  },
  {
    no: "04",
    emoji: "🧭",
    title: "Advisory",
    body: "Embedded design leadership for early-stage teams: hiring, process, design reviews, and roadmap shaping.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />

      {/* Marquee transition */}
      <section aria-hidden className="border-y border-border bg-bg-subtle">
        <Marquee
          items={[
            "Product Design",
            "Design Systems",
            "Interaction",
            "Strategy",
            "Independent Practice",
            "Available 2026",
          ]}
        />
      </section>

      {/* Selected work */}
      <section
        aria-labelledby="work-heading"
        className="container py-24 md:py-36"
      >
        <SectionHeading
          number="(02)"
          eyebrow="Selected Work"
          title={
            <>
              A small body of work,{" "}
              <span className="italic text-fg-muted">made carefully.</span>
            </>
          }
          description="A handful of projects I'm proud to have shipped. Most are full case studies — a few are quieter."
        />

        <h2 id="work-heading" className="sr-only">
          Selected Work
        </h2>

        <ul className="mt-16 grid gap-x-8 gap-y-20 md:mt-24 md:grid-cols-2">
          {featured.map((project, i) => (
            <li key={project.slug} className={i % 2 ? "md:mt-24" : ""}>
              <ProjectCard project={project} index={i} priority={i < 2} />
            </li>
          ))}
        </ul>

        <Reveal className="mt-20 flex justify-center">
          <ButtonLink href="/projects" variant="secondary" size="lg">
            View all projects
          </ButtonLink>
        </Reveal>
      </section>

      {/* Services */}
      <section
        aria-labelledby="services-heading"
        className="border-t border-border bg-bg-subtle"
      >
        <div className="container py-24 md:py-36">
          <SectionHeading
            number="(03)"
            eyebrow="Practice"
            title={
              <>
                What I do,{" "}
                <span className="italic text-fg-muted">how I work.</span>
              </>
            }
            description="Engagements typically run six to twelve weeks. I work with a small number of teams at a time so I can stay close to the build."
          />
          <h2 id="services-heading" className="sr-only">
            Services
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-20 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal
                key={s.no}
                delay={i * 0.05}
                className="bg-bg-subtle p-8 transition-colors duration-300 hover:bg-bg md:p-10"
              >
                <div className="flex items-baseline gap-3 text-fg-muted">
                  <span className="font-mono text-xs">{s.no}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span aria-hidden className="text-2xl">
                    {s.emoji}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-fg-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-2">
            <span className="label mr-3">Capabilities</span>
            {aboutCopy.capabilities.map((c) => (
              <Tag key={c} variant="outline">
                {c}
              </Tag>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section
        aria-labelledby="about-preview-heading"
        className="container py-24 md:py-36"
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="label mb-6 flex items-center gap-3">
              <span className="text-fg-subtle">(04)</span>
              <span className="h-px w-8 bg-fg-subtle/40" />
              About
            </p>
            <h2
              id="about-preview-heading"
              className="font-serif text-display-lg text-balance"
            >
              A short note from{" "}
              <span className="italic text-fg-muted">the studio.</span>
            </h2>
            <AnimatedPortrait
              src="/profile.jpeg"
              alt={`Portrait of ${site.fullName}`}
              sizes="(min-width: 768px) 24rem, 100vw"
              className="mt-10 md:mt-12 md:max-w-sm"
            />
          </Reveal>
          <Reveal delay={0.05} className="md:col-span-7">
            <div className="space-y-5 text-pretty text-base text-fg md:text-lg">
              {aboutCopy.intro.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <Link
              href="/about"
              className="link-hover mt-8 inline-flex items-center gap-2 text-sm"
            >
              Read more about me
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
