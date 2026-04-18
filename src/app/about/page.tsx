import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { aboutCopy, experience, recognition } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.fullName} — ${site.role}. ${aboutCopy.intro[0]}`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${site.fullName}`,
    description: aboutCopy.intro[0],
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="container pt-32 md:pt-40">
        <p className="label mb-6 flex items-center gap-3">
          <span className="text-fg-subtle">(03)</span>
          <span className="h-px w-8 bg-fg-subtle/40" />
          About
        </p>
        <h1 className="font-serif text-display-xl text-balance md:max-w-[18ch]">
          A designer working{" "}
          <span className="italic text-fg-muted">close to the build.</span>
        </h1>

        <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <div className="space-y-6 text-pretty text-base text-fg md:text-lg">
              {aboutCopy.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <aside className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
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
                <div>
                  <p className="label mb-2">Elsewhere</p>
                  <ul className="space-y-1">
                    {site.socials.map((s) => (
                      <li key={s.href}>
                        <a
                          className="link-hover inline-flex items-center gap-1"
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {s.label}
                          <ArrowUpRight size={11} className="opacity-50" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container py-24 md:py-36">
        <SectionHeading
          number="(01)"
          eyebrow="Philosophy"
          title={
            <>
              Four ideas that{" "}
              <span className="italic text-fg-muted">guide the work.</span>
            </>
          }
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-20 md:grid-cols-2">
          {aboutCopy.philosophy.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.05}
              className="bg-bg p-8 md:p-10"
            >
              <p className="font-mono text-xs text-fg-muted">
                P/{String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl tracking-tight md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-fg-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="container py-24 md:py-32">
        <Reveal>
          <p className="label mb-6">(02) Capabilities</p>
          <h2 className="font-serif text-display-md text-balance md:max-w-[20ch]">
            From early sketches to shipped UI — and the brand and motion that
            tie it all together.
          </h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {aboutCopy.capabilities.map((c) => (
              <Tag key={c} variant="outline" className="px-4 py-2 text-xs">
                {c}
              </Tag>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="border-t border-border bg-bg-subtle">
        <div className="container py-24 md:py-32">
          <SectionHeading
            number="(03)"
            eyebrow="Experience"
            title="Where I've worked."
          />
          <ul className="mt-16 space-y-px md:mt-20">
            {experience.map((e, i) => (
              <Reveal
                as="li"
                key={e.company + e.period}
                delay={i * 0.04}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-border bg-bg-subtle py-6 md:py-8"
              >
                <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-widest text-fg-muted">
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
        </div>
      </section>

      {/* Recognition */}
      <section className="container py-24 md:py-32">
        <SectionHeading
          number="(04)"
          eyebrow="Recognition"
          title="A few notable mentions."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {recognition.map((r, i) => (
            <Reveal
              as="li"
              key={r.title + r.year}
              delay={i * 0.05}
              className="bg-bg p-6 md:p-8"
            >
              <p className="font-mono text-xs text-accent">{r.year}</p>
              <h3 className="mt-3 font-serif text-lg tracking-tight">{r.title}</h3>
              <p className="text-sm text-fg-muted">{r.source}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container py-24 md:py-32">
        <Reveal className="grid gap-8 rounded-2xl border border-border bg-bg-subtle p-10 md:grid-cols-12 md:items-end md:p-16">
          <div className="md:col-span-8">
            <p className="label mb-3">Working together</p>
            <h2 className="font-serif text-display-md text-balance">
              Got a project that deserves the time?{" "}
              <span className="italic text-fg-muted">Let&rsquo;s talk.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <ButtonLink href="/contact" size="lg">
              Get in touch
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <JsonLd
        id="about-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
    </>
  );
}
