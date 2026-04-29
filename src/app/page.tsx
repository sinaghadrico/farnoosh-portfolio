import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { UnderlinedTitle } from "@/components/UnderlinedTitle";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { AnimatedPortrait } from "@/components/AnimatedPortrait";
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
        className="container scroll-mt-24 py-24 md:py-36"
      >
        <UnderlinedTitle id="work-heading" icon="💼">
          My works
        </UnderlinedTitle>

        <ul className="mt-20 grid gap-x-8 gap-y-20 md:mt-24 md:grid-cols-2">
          {featured.map((project, i) => (
            <li key={project.slug} className={i % 2 ? "md:mt-24" : ""}>
              <ProjectCard project={project} index={i} priority={i < 2} />
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
        className="scroll-mt-24 border-t border-border bg-bg-subtle"
      >
        <div className="container py-24 md:py-36">
          <UnderlinedTitle id="about-heading" icon="👋">
            About me
          </UnderlinedTitle>

          <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-7">
              <div className="space-y-6 text-pretty text-base text-fg md:text-lg">
                {aboutCopy.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <aside className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.1}>
                <AnimatedPortrait
                  src="/profile.jpeg"
                  alt={`Portrait of ${site.fullName}`}
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="mb-10"
                />
                <div className="space-y-6 border-t border-border pt-6 text-sm">
                  <div>
                    <p className="label mb-1.5">Based in</p>
                    <p>{site.location}</p>
                  </div>
                  <div>
                    <p className="label mb-1.5">Currently</p>
                    <p>{site.availability}</p>
                  </div>
                  <div>
                    <p className="label mb-1.5">Email</p>
                    <a className="link-hover" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
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
      </section>

      {/* Education & credentials */}
      <section
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
      </section>

      {/* Contact */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="container scroll-mt-24 py-24 md:py-36"
      >
        <UnderlinedTitle id="contact-heading" icon="📬">
          Get in touch
        </UnderlinedTitle>
        <p className="mt-8 max-w-prose text-base text-fg-muted md:text-lg">
          The best way to start is a short note: a few sentences about your
          team, the problem, and the timeline you have in mind. I&rsquo;ll come
          back within two business days.
        </p>

        <Reveal className="mt-16 md:mt-20">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-subtle p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="label mb-4">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="block font-serif text-display-md tracking-tight transition-colors duration-300 hover:text-accent md:text-display-lg"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end">
                <CopyEmailButton email={site.email} />
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-fg bg-fg px-5 py-3 text-sm text-bg transition-colors duration-300 hover:bg-bg hover:text-fg"
                >
                  Compose
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
                  />
                </a>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-4">
              <div>
                <p className="label mb-1.5">Status</p>
                <p className="text-sm">
                  <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-emerald-500 align-middle" />
                  Available
                </p>
              </div>
              <div>
                <p className="label mb-1.5">Response time</p>
                <p className="text-sm">~ 2 business days</p>
              </div>
              <div>
                <p className="label mb-1.5">Location</p>
                <p className="text-sm">{site.location}</p>
              </div>
              <div>
                <p className="label mb-1.5">Booking</p>
                <p className="text-sm">{site.availability}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Elsewhere */}
        <Reveal className="mt-12">
          <p className="label mb-6">Elsewhere</p>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between bg-bg p-6 transition-colors duration-300 hover:bg-bg-subtle"
                >
                  <span className="inline-flex items-center gap-3 font-serif text-xl">
                    <SocialIcon
                      label={s.label}
                      size={18}
                      className="text-fg-muted transition-colors duration-300 group-hover:text-accent"
                    />
                    {s.label}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-fg-muted transition-all duration-500 ease-out-expo group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
