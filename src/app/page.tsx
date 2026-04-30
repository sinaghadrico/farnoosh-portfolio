import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { UnderlinedTitle } from "@/components/UnderlinedTitle";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { AnimatedPortrait } from "@/components/AnimatedPortrait";
import { CloudHalos } from "@/components/CloudHalos";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { SocialIcon } from "@/components/SocialIcon";
import { getFeaturedProjects } from "@/content/projects";
import { aboutCopy, experience, recognition } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.fullName} — ${site.role}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <Hero />

      {/* Selected work */}
      <section
        id="work"
        aria-labelledby="work-heading"
        className="container scroll-mt-24 py-16 md:py-24"
      >
        <UnderlinedTitle id="work-heading" icon="🎨">
          My work
        </UnderlinedTitle>

        <ul className="mt-16 grid items-start gap-x-8 gap-y-20 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard project={project} index={i} priority={i < 2} disableLink />
            </li>
          ))}
        </ul>

        {/* <Reveal className="mt-20 flex justify-center">
          <ButtonLink href="/projects" variant="secondary" size="lg">
            View all projects
          </ButtonLink>
        </Reveal> */}
      </section>

      {/* About — intro + portrait */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative scroll-mt-24 overflow-hidden border-t border-border"
      >
        <CloudHalos />
        <div className="container relative py-12 md:py-16">
          <UnderlinedTitle id="about-heading" icon="👋">
            About me
          </UnderlinedTitle>

          <div className="mt-8 grid items-stretch gap-12 md:mt-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-7">
              <div className="space-y-6 text-pretty text-base text-fg md:text-lg">
                {aboutCopy.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <aside className="md:col-span-4 md:col-start-9 md:flex md:flex-col">
              <Reveal delay={0.1} className="flex-1">
                <AnimatedPortrait
                  src="/profile.jpeg"
                  alt={`Portrait of ${site.fullName}`}
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="h-full"
                />
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Experience */}
      {/* <section
        id="experience"
        aria-labelledby="experience-heading"
        className="container scroll-mt-24 py-24 md:py-32"
      >
        <UnderlinedTitle id="experience-heading" icon="🚀">
          My experience
        </UnderlinedTitle>
        <ul className="mt-20 space-y-px md:mt-24">
          {experience.map((e, i) => (
            <Reveal
              as="li"
              key={e.company + e.period}
              delay={i * 0.04}
              className="grid grid-cols-12 items-baseline gap-4 border-t border-border py-6 md:py-8"
            >
              <div className="col-span-12 font-mono text-xs uppercase tracking-widest text-fg-muted md:col-span-3">
                {e.period}
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {e.company}
                </h3>
                <p className="text-sm text-fg-muted">{e.role}</p>
              </div>
              <p className="col-span-12 text-fg-muted md:col-span-5">
                {e.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </section> */}

      {/* Education & credentials */}
      {/* <section
        aria-labelledby="education-heading"
        className="border-t border-border bg-bg-subtle"
      >
        <div className="container py-24 md:py-32">
          <UnderlinedTitle id="education-heading" icon="🎓">
            Education & credentials
          </UnderlinedTitle>
          <ul className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-24 md:grid-cols-3">
            {recognition.map((r, i) => (
              <Reveal
                as="li"
                key={r.title + r.year}
                delay={i * 0.05}
                className="bg-bg p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-accent">{r.year}</p>
                  {r.emoji && (
                    <span aria-hidden className="text-2xl">
                      {r.emoji}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-serif text-lg tracking-tight">
                  {r.title}
                </h3>
                <p className="text-sm text-fg-muted">{r.source}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section> */}

    </>
  );
}
