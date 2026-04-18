import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `A selection of work by ${site.fullName} — case studies in product design, design systems, and brand.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects — ${site.fullName}`,
    description: "A selection of design work — case studies and shipped product.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="container pt-32 md:pt-40">
        <p className="label mb-6 flex items-center gap-3">
          <span className="text-fg-subtle">(02)</span>
          <span className="h-px w-8 bg-fg-subtle/40" />
          Work · {projects.length} projects
        </p>
        <h1 className="font-serif text-display-xl text-balance md:max-w-[20ch]">
          A small archive of{" "}
          <span className="italic text-fg-muted">selected work.</span>
        </h1>
        <p className="mt-8 max-w-prose text-base text-fg-muted md:text-lg">
          Each project is a story about a specific problem and the small,
          unglamorous decisions that shaped the result. Skim the list, or dive
          in.
        </p>
      </section>

      {/* List view */}
      <section
        aria-labelledby="projects-list-heading"
        className="container py-20 md:py-28"
      >
        <h2 id="projects-list-heading" className="sr-only">
          All projects
        </h2>

        <div className="mb-4 grid grid-cols-12 gap-4 px-0 md:px-0">
          <div className="col-span-1 hidden font-mono text-[10px] uppercase tracking-widest text-fg-subtle md:block">
            №
          </div>
          <div className="col-span-12 font-mono text-[10px] uppercase tracking-widest text-fg-subtle md:col-span-5">
            Project
          </div>
          <div className="col-span-6 hidden font-mono text-[10px] uppercase tracking-widest text-fg-subtle md:col-span-4 md:block">
            Tags
          </div>
          <div className="col-span-6 text-right font-mono text-[10px] uppercase tracking-widest text-fg-subtle md:col-span-2">
            Year
          </div>
        </div>

        <ul className="border-b border-border">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              variant="list"
            />
          ))}
        </ul>
      </section>

      {/* Grid view (re-emphasize visually) */}
      <section
        aria-labelledby="projects-grid-heading"
        className="border-t border-border bg-bg-subtle"
      >
        <div className="container py-24 md:py-32">
          <Reveal>
            <p className="label mb-6">In Detail</p>
            <h2
              id="projects-grid-heading"
              className="font-serif text-display-md text-balance md:max-w-[18ch]"
            >
              The same projects,{" "}
              <span className="italic text-fg-muted">shown in full.</span>
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-x-8 gap-y-20 md:mt-24 md:grid-cols-2">
            {projects.map((project, i) => (
              <li key={project.slug} className={i % 2 ? "md:mt-24" : ""}>
                <ProjectCard project={project} index={i} priority={i < 2} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd
        id="projects-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ])}
      />
    </>
  );
}
