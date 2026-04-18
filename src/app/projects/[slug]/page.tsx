import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/jsonld";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — ${project.tagline}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      publishedTime: `${project.year}-01-01`,
      authors: [site.fullName],
      images: project.cover.src
        ? [{ url: project.cover.src, alt: project.cover.alt }]
        : [{ url: site.ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
  ];

  return (
    <article>
      {/* Header */}
      <section className="container pt-32 md:pt-40">
        <Link
          href="/projects"
          className="link-hover inline-flex items-center gap-2 text-sm text-fg-muted"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t} variant="outline">
                  {t}
                </Tag>
              ))}
            </div>
            <h1 className="mt-6 font-serif text-display-xl text-balance md:max-w-[18ch]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-prose text-balance text-lg text-fg-muted md:text-xl">
              {project.tagline}
            </p>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <dl className="space-y-5 border-t border-border pt-6 text-sm">
              {meta.map((m) => (
                <div key={m.label} className="grid grid-cols-2 gap-3">
                  <dt className="label">{m.label}</dt>
                  <dd>{m.value}</dd>
                </div>
              ))}
              {project.team && (
                <div className="grid grid-cols-2 gap-3">
                  <dt className="label">Team</dt>
                  <dd>
                    <ul className="space-y-0.5">
                      {project.team.map((member) => (
                        <li key={member} className="text-fg-muted">
                          {member}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              {project.tools && (
                <div className="grid grid-cols-2 gap-3">
                  <dt className="label">Tools</dt>
                  <dd className="text-fg-muted">{project.tools.join(", ")}</dd>
                </div>
              )}
              {project.link && (
                <div className="grid grid-cols-2 gap-3">
                  <dt className="label">Link</dt>
                  <dd>
                    <a
                      className="link-hover inline-flex items-center gap-1"
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.link.label}
                      <ArrowUpRight size={11} className="opacity-50" />
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      {/* Hero image */}
      <section className="container mt-16 md:mt-20">
        <PlaceholderImage
          image={project.cover}
          seed={project.slug}
          priority
          sizes="100vw"
        />
      </section>

      {/* Summary / Problem */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="label">Overview</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <p className="font-serif text-display-md text-balance">
              {project.summary}
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="label">The Problem</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <p className="text-pretty text-lg text-fg md:text-xl">
              {project.problem}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process sections */}
      <section className="border-y border-border bg-bg-subtle">
        <div className="container py-24 md:py-32">
          <Reveal className="mb-16 md:mb-20">
            <p className="label mb-6">The Process</p>
            <h2 className="font-serif text-display-lg text-balance md:max-w-[20ch]">
              How the work{" "}
              <span className="italic text-fg-muted">came together.</span>
            </h2>
          </Reveal>

          <ol className="space-y-16 md:space-y-24">
            {project.process.map((step, i) => (
              <Reveal as="li" key={step.heading} delay={i * 0.05}>
                <div className="grid gap-6 md:grid-cols-12 md:gap-16">
                  <div className="md:col-span-4">
                    <p className="font-mono text-xs text-accent">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl tracking-tight md:text-3xl">
                      {step.heading}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-pretty text-base text-fg md:text-lg">
                      {step.body}
                    </p>
                    {step.list && (
                      <ul className="mt-6 space-y-2.5 text-fg-muted">
                        {step.list.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 border-l border-border pl-4"
                          >
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Solution */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="label">The Solution</p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <p className="font-serif text-display-md text-balance">
              {project.solution}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="container pb-24 md:pb-32">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {project.gallery.map((img, i) => {
              const span = img.span ?? "wide";
              const colClass =
                span === "full"
                  ? "col-span-12"
                  : span === "wide"
                  ? "col-span-12 md:col-span-10 md:col-start-2"
                  : "col-span-12 md:col-span-6";
              return (
                <Reveal
                  key={i}
                  delay={i * 0.04}
                  className={colClass}
                >
                  <PlaceholderImage
                    image={img}
                    seed={`${project.slug}-${i}`}
                    sizes={
                      span === "full"
                        ? "100vw"
                        : span === "wide"
                        ? "(min-width: 1024px) 80vw, 100vw"
                        : "(min-width: 1024px) 50vw, 100vw"
                    }
                  />
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* Results */}
      <section className="border-t border-border bg-bg-subtle">
        <div className="container py-24 md:py-32">
          <Reveal>
            <p className="label mb-6">Results · Impact</p>
            <h2 className="font-serif text-display-lg text-balance md:max-w-[20ch]">
              The numbers,{" "}
              <span className="italic text-fg-muted">after launch.</span>
            </h2>
          </Reveal>
          <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-20 md:grid-cols-4">
            {project.results.map((r, i) => (
              <Reveal
                as="li"
                key={r.label}
                delay={i * 0.05}
                className="bg-bg-subtle p-8 md:p-10"
              >
                <p className="font-serif text-4xl tracking-tight md:text-5xl">
                  {r.value}
                </p>
                <p className="mt-4 text-sm text-fg-muted">{r.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Next project */}
      <section className="container py-24 md:py-32">
        <Reveal>
          <p className="label mb-6">Next project</p>
          <Link
            href={`/projects/${next.slug}`}
            className="group block"
          >
            <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-16">
              <div className="md:col-span-8">
                <h2 className="font-serif text-display-lg text-balance">
                  {next.title}
                  <span className="ml-3 inline-block align-middle text-fg-muted transition-transform duration-500 ease-out-expo group-hover:translate-x-2 group-hover:text-accent">
                    <ArrowUpRight size={32} strokeWidth={1.2} />
                  </span>
                </h2>
                <p className="mt-3 max-w-prose text-fg-muted">{next.tagline}</p>
              </div>
              <div className="md:col-span-4">
                <PlaceholderImage
                  image={next.cover}
                  seed={`next-${next.slug}`}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
            </div>
          </Link>
        </Reveal>

        <Reveal className="mt-16 flex justify-center">
          <ButtonLink href="/contact" size="lg">
            Start a project together
          </ButtonLink>
        </Reveal>
      </section>

      <JsonLd
        id={`project-${project.slug}-jsonld`}
        data={[
          projectJsonLd(project),
          breadcrumbJsonLd([
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: project.title, href: `/projects/${project.slug}` },
          ]),
        ]}
      />
    </article>
  );
}
