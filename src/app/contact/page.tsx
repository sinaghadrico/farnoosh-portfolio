import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.fullName} — ${site.role}. ${site.availability}`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${site.fullName}`,
    description: site.availability,
    url: "/contact",
  },
};

const faqs = [
  {
    q: "What does an engagement look like?",
    a: "Most projects run six to twelve weeks. We start with a one-week discovery to align on the problem and what success looks like, then move into design sprints with weekly check-ins and shared Figma files.",
  },
  {
    q: "Do you work with early-stage teams?",
    a: "Yes — about half of my work is with seed and Series A startups. I can also embed for short stretches as a fractional design lead.",
  },
  {
    q: "Do you take on smaller projects?",
    a: "Selectively. If it's a focused piece of work — a marketing site, a single product surface, a brand refresh — I'm open to scoping a two- to four-week sprint.",
  },
  {
    q: "Where are you based, and which timezones do you work in?",
    a: `${site.location}. I overlap comfortably with European and US East Coast hours.`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="container pt-32 md:pt-40">
        <p className="label mb-6 flex items-center gap-3">
          <span className="text-fg-subtle">(04)</span>
          <span className="h-px w-8 bg-fg-subtle/40" />
          Contact
        </p>
        <h1 className="font-serif text-display-2xl text-balance md:max-w-[14ch]">
          Let&rsquo;s build something{" "}
          <span className="italic text-fg-muted">worth using.</span>
        </h1>
        <p className="mt-8 max-w-prose text-base text-fg-muted md:text-lg">
          The best way to start is a short note: a few sentences about your
          team, the problem, and the timeline you have in mind. I&rsquo;ll come
          back within two business days.
        </p>
      </section>

      {/* Email card */}
      <section className="container py-16 md:py-24">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-subtle p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="label mb-4">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="block font-serif text-display-lg tracking-tight transition-colors duration-300 hover:text-accent"
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

            {/* Decorative inline meta */}
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
      </section>

      {/* Elsewhere */}
      <section className="container py-12">
        <Reveal>
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
                  <span className="font-serif text-xl">{s.label}</span>
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

      {/* FAQ */}
      <section className="container py-24 md:py-32">
        <Reveal>
          <p className="label mb-6">Frequently asked</p>
          <h2 className="font-serif text-display-md text-balance md:max-w-[20ch]">
            Quick answers, in case they help.
          </h2>
        </Reveal>
        <ul className="mt-16 divide-y divide-border border-y border-border md:mt-20">
          {faqs.map((f, i) => (
            <Reveal as="li" key={f.q} delay={i * 0.04}>
              <details className="group py-6 md:py-8">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 transition-colors hover:text-accent">
                  <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden
                    className="font-mono text-xs text-fg-muted transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-fg-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </ul>
      </section>

      <JsonLd
        id="contact-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
    </>
  );
}
