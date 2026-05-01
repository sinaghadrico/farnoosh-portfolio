import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types";

const ratioMap: Record<NonNullable<ProjectImage["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
};

const seedColors = [
  ["#E5E3FF", "#4F46E5"], // mist → iris
  ["#DCDCD6", "#1A1A22"], // canvas → ink
  ["#D8DEE9", "#3B4252"], // pale steel → graphite
  ["#E6E2D9", "#525058"], // bone → slate
  ["#D4D3E8", "#312E81"], // lavender → indigo
];

function pickGradient(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return seedColors[hash % seedColors.length];
}

type Props = {
  image: ProjectImage;
  /** Used to seed deterministic placeholder color */
  seed?: string;
  priority?: boolean;
  className?: string;
  /** sizes attribute for responsive images */
  sizes?: string;
};

export function PlaceholderImage({
  image,
  seed = "",
  priority,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: Props) {
  const ratio = image.ratio ?? "video";
  const [from, to] = pickGradient(seed + image.alt);

  return (
    <figure className={cn("group relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-t-[12px] bg-bg-subtle",
          ratioMap[ratio]
        )}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              backgroundImage: `radial-gradient(120% 120% at 0% 0%, ${from} 0%, ${to} 100%)`,
            }}
          >
            {/* Subtle grid */}
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id={`grid-${seed.replace(/\W/g, "")}`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${seed.replace(/\W/g, "")})`} />
            </svg>

            {/* Center mark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
                Image · replace
              </span>
            </div>
          </div>
        )}
      </div>
      {image.caption && (
        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-fg-muted">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
