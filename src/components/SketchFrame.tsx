import { cn } from "@/lib/utils";

/**
 * A hand-drawn box: a crisp inner outline, a second slightly rotated outline
 * with gaps masked out, and a few loose strokes that overshoot the corners
 * like pencil lines. Everything is placed in percentages so the sketch holds
 * at any size. Used for the Figma "sketch" boxes in the case studies.
 */

const sketchGaps =
  "linear-gradient(to right, #000 0 16%, transparent 16% 22%, #000 22% 34%, transparent 34% 36%, #000 36% 100%)";

/** Loose strokes — offset outside the box in px, start/end along the edge in %. */
const strayLines: {
  side: "top" | "bottom" | "left" | "right";
  offset: number;
  from: number;
  to: number;
  opacity: number;
}[] = [
  { side: "top", offset: -10, from: 10, to: 14, opacity: 0.5 },
  { side: "top", offset: -9, from: 16, to: 90, opacity: 0.45 },
  { side: "top", offset: -3, from: 9, to: 82, opacity: 0.6 },
  { side: "bottom", offset: -11, from: 1, to: 23, opacity: 0.55 },
  { side: "bottom", offset: -5, from: 33, to: 98, opacity: 0.6 },
  { side: "left", offset: -9, from: 24, to: 88, opacity: 0.5 },
  { side: "left", offset: -5, from: 20, to: 70, opacity: 0.45 },
  { side: "right", offset: -9, from: 46, to: 94, opacity: 0.5 },
];

type Props = {
  /** Stroke colour of every line. */
  color: string;
  /** Fill of the box itself. */
  fill: string;
  className?: string;
  children: React.ReactNode;
};

export function SketchFrame({ color, fill, className, children }: Props) {
  return (
    <div className={cn("relative", className)}>
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl border"
        style={{ borderColor: color, backgroundColor: fill }}
      />
      <span
        aria-hidden
        className="absolute -inset-[6px] rotate-[0.3deg] rounded-[20px] border opacity-75"
        style={{
          borderColor: color,
          maskImage: sketchGaps,
          WebkitMaskImage: sketchGaps,
        }}
      />
      {strayLines.map((line, i) => {
        const horizontal = line.side === "top" || line.side === "bottom";
        return (
          <span
            key={i}
            aria-hidden
            className={horizontal ? "absolute h-px" : "absolute w-px"}
            style={{
              backgroundColor: color,
              [line.side]: line.offset,
              [horizontal ? "left" : "top"]: `${line.from}%`,
              [horizontal ? "width" : "height"]: `${line.to - line.from}%`,
              opacity: line.opacity,
            }}
          />
        );
      })}
      <div className="relative">{children}</div>
    </div>
  );
}
