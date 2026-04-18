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
};

export function ProjectCard({
  project,
  index,
  variant = "feature",
  priority,
}: Props) {
  if (variant === "list") {
    return <ProjectListRow project={project} index={index} />;
  }

  return (
    <Reveal as="article" className="group">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus:outline-none"
      >
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
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-fg-muted">
              {typeof index === "number" && (
                <span className="font-mono text-[11px] tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <span className="font-mono text-[11px] uppercase tracking-widest">
                {project.year}
              </span>
              <span className="hidden h-px w-6 bg-fg-subtle/40 md:inline-block" aria-hidden />
              <span className="hidden font-mono text-[11px] uppercase tracking-widest md:inline">
                {project.client}
              </span>
            </div>
            <h3
              className={cn(
                "mt-2 font-serif tracking-tight text-balance transition-colors duration-300",
                variant === "feature"
                  ? "text-2xl md:text-3xl"
                  : "text-xl md:text-2xl"
              )}
            >
              {project.title}
              <span className="ml-2 inline-block translate-y-0 align-middle text-fg-muted transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:text-accent">
                <ArrowUpRight size={20} strokeWidth={1.4} />
              </span>
            </h3>
            <p className="mt-2 max-w-xl text-fg-muted">{project.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t} variant="outline">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function ProjectListRow({ project, index }: { project: Project; index?: number }) {
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
