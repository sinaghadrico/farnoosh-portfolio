import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type Variant = "feature" | "compact" | "list";

type Props = {
  project: Project;
  index?: number;
  variant?: Variant;
  priority?: boolean;
  disableLink?: boolean;
};

export function ProjectCard({
  project,
  index,
  variant = "feature",
  priority,
  disableLink = false,
}: Props) {
  if (variant === "list") {
    return <ProjectListRow project={project} index={index} />;
  }

  const Wrapper = disableLink ? "div" : Link;
  const wrapperProps = disableLink
    ? { className: "group block h-full cursor-default" }
    : {
        href: `/projects/${project.slug}`,
        className: "group block h-full focus:outline-none",
      };

  return (
    <article className="h-full">
      <Wrapper
        {...(wrapperProps as any)}
      >
        <div
          className="overflow-hidden rounded-2xl border border-border bg-[#F5F5F0] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),0_8px_24px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.12),0_20px_48px_-8px_rgba(0,0,0,0.10)]"
        >
          <div className="overflow-hidden rounded-t-2xl">
            <PlaceholderImage
              image={project.cover}
              seed={project.slug}
              priority={priority}
              sizes={
                variant === "feature"
                  ? "(min-width: 1024px) 50vw, 100vw"
                  : "(min-width: 1024px) 33vw, 100vw"
              }
            />
          </div>
          <div className="flex items-start justify-between gap-6 px-5 pb-6 pt-3">
            <div>
              <h3
                className={cn(
                  "mt-2 font-sans font-semibold tracking-tight text-balance transition-colors duration-300",
                  variant === "feature"
                    ? "text-lg md:text-xl"
                    : "text-base md:text-lg"
                )}
              >
                {project.title}
              </h3>
              <p className="mt-2 max-w-xl text-fg-muted">{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t} variant="outline">
                    {t}
                  </Tag>
                ))}
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-fg bg-fg px-5 py-2.5 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-fg">
                  View Project
                  <ArrowUpRight size={15} strokeWidth={1.6} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </article>
  );
}

function ProjectListRow({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal as="li" className="group">
      <Link
        href={`/projects/${project.slug}`}
        className="grid grid-cols-12 items-center gap-4 border-t border-border py-6 transition-colors duration-300 hover:bg-fg/[0.02] md:py-8"
      >
        <div className="col-span-1 hidden font-mono text-xs text-fg-subtle md:block">
          {typeof index === "number" ? String(index + 1).padStart(2, "0") : "—"}
        </div>
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-serif text-2xl tracking-tight md:text-3xl">
            {project.title}
            <span className="ml-2 inline-block align-middle text-fg-muted transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:text-accent">
              <ArrowUpRight size={18} strokeWidth={1.4} />
            </span>
          </h3>
          <p className="mt-1 text-fg-muted">{project.tagline}</p>
        </div>
        <div className="col-span-6 hidden flex-wrap gap-1.5 md:col-span-4 md:flex">
          {project.tags.map((t) => (
            <Tag key={t} variant="outline">
              {t}
            </Tag>
          ))}
        </div>
        <div className="col-span-6 text-right font-mono text-xs uppercase tracking-widest text-fg-muted md:col-span-2">
          {project.year}
        </div>
      </Link>
    </Reveal>
  );
}
