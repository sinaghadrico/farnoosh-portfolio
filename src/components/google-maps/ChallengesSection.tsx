import {
  Eyebrow,
  Section,
  Strong,
} from "@/components/google-maps/primitives";

/**
 * Section 5 — Challenges and Constraints (Figma node 18:2480).
 *
 * The heading sits inside a hand-drawn orange box. The sketch is rebuilt from
 * a crisp inner outline, a second slightly rotated outline with gaps masked
 * out, and a few loose strokes that overshoot the corners like pencil lines.
 * Everything is positioned in percentages so it holds at any card height.
 */

const sketchGaps =
  "linear-gradient(to right, #000 0 16%, transparent 16% 22%, #000 22% 34%, transparent 34% 36%, #000 36% 100%)";

/** Loose strokes — [top/bottom/left/right offset, start %, end %, opacity]. */
const strayLines: { side: "top" | "bottom" | "left" | "right"; offset: number; from: number; to: number; opacity: number }[] = [
  { side: "top", offset: -10, from: 10, to: 14, opacity: 0.5 },
  { side: "top", offset: -9, from: 16, to: 90, opacity: 0.45 },
  { side: "top", offset: -3, from: 9, to: 82, opacity: 0.6 },
  { side: "bottom", offset: -11, from: 1, to: 23, opacity: 0.55 },
  { side: "bottom", offset: -5, from: 33, to: 98, opacity: 0.6 },
  { side: "left", offset: -9, from: 24, to: 88, opacity: 0.5 },
  { side: "left", offset: -5, from: 20, to: 70, opacity: 0.45 },
  { side: "right", offset: -9, from: 46, to: 94, opacity: 0.5 },
];
export function ChallengesSection() {
  return (
    <Section>
      <div className="relative mx-auto w-full max-w-[934px] px-2 py-2">
        <span
          aria-hidden
          className="absolute inset-0 rounded-2xl border border-[#FF8D28]/80 bg-[#FAF0E6]"
        />
        <span
          aria-hidden
          className="absolute -inset-[6px] rotate-[0.3deg] rounded-[20px] border border-[#FF8D28]/60"
          style={{ maskImage: sketchGaps, WebkitMaskImage: sketchGaps }}
        />
        {strayLines.map((line, i) => {
          const horizontal = line.side === "top" || line.side === "bottom";
          return (
            <span
              key={i}
              aria-hidden
              className={horizontal ? "absolute h-px bg-[#FF8D28]" : "absolute w-px bg-[#FF8D28]"}
              style={{
                [line.side]: line.offset,
                [horizontal ? "left" : "top"]: `${line.from}%`,
                [horizontal ? "width" : "height"]: `${line.to - line.from}%`,
                opacity: line.opacity,
              }}
            />
          );
        })}

        <div className="relative flex flex-col items-center gap-2 px-5 pb-6 pt-4 text-center md:px-8">
          <span aria-hidden className="text-[40px] leading-[1.8]">
            🪂
          </span>
          <h2 className="font-dm text-[20px] font-bold leading-[1.5] text-[#1A2432] md:text-[24px] md:leading-[1.8]">
            But, we made a mistake that led to learning &amp; growth
          </h2>
          <p className="text-balance font-dm text-[15px] leading-[1.8] text-[#1A2432] md:text-[16px]">
            Every product is influenced by its context, including data
            availability, technical feasibility, and ethical considerations.
            While designing features, we encountered real-world limitations that
            challenged our design approach.
          </p>
        </div>
      </div>

      <Eyebrow className="mt-8 text-center">Challenges and Constraints</Eyebrow>

      <ul className="mt-4 space-y-4">
        <li className="flex gap-4 md:gap-6">
          <span aria-hidden className="text-[32px] leading-none md:text-[40px]">
            📌
          </span>
          <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
            During <Strong>desk research</Strong>, we focused primarily on Google
            Maps’ most visible and commonly used services, as the issues we
            identified were related to them. Even after the interviews, we
            assumed the platform had only a limited set of core features. As a
            result, many of our initial ideas aimed to add missing
            functionalities, unaware that several already existed but were
            difficult to discover. This lack of <Strong>discoverability</Strong>{" "}
            and <Strong>visibility</Strong> led to some redundant ideas and
            ultimately required us to restart the ideation process.
          </p>
        </li>

        <li className="flex gap-4 md:gap-6">
          <span aria-hidden className="text-[32px] leading-none md:text-[40px]">
            📌
          </span>
          <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
            We also encountered <Strong>data limitations</Strong>. Features such
            as public transportation details, 360-degree views, and similar
            services were unavailable in some regions due to{" "}
            <Strong>local constraints</Strong> and <Strong>regulations</Strong>,
            leading to an incomplete user experience. For example, one user
            complained about missing train schedules, though the issue was
            specific to their region and worked correctly elsewhere. These
            inconsistencies affected the accuracy of our interview data,
            requiring follow-ups to verify information and make smarter and more
            reliable decisions.
          </p>
        </li>
      </ul>
    </Section>
  );
}
