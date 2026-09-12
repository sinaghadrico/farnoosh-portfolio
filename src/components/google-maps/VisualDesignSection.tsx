import { Figure } from "@/components/google-maps/Figure";
import type { AssetKey } from "@/components/google-maps/assets";
import {
  Body,
  Eyebrow,
  Heading,
  Section,
} from "@/components/google-maps/primitives";

/**
 * Section 9 — Visual design (Figma node 18:3892).
 *
 * Four numbered blocks. The headings are real text; each phone pair below them
 * is one 1080×874 composition exported straight out of Figma.
 */

const blocks: { n: number; title: string; shots: AssetKey[] }[] = [
  {
    n: 1,
    title:
      "Separated Route Details Based on Different Criteria (Fastest, Safest, etc.):",
    shots: ["ui1a", "ui1b", "ui1c"],
  },
  {
    n: 2,
    title: "Lane Display & Real-Time User Feedback:",
    shots: ["ui2a", "ui2b", "ui2c"],
  },
  {
    n: 3,
    title: "Feedback from users upon arrival:",
    shots: ["ui3a", "ui3b"],
  },
  { n: 4, title: "In progress....", shots: [] },
];

export function VisualDesignSection() {
  return (
    <Section>
      <Eyebrow>Visual Design</Eyebrow>
      <Heading className="mt-4">
        From clues to sketches, a challenging process to understand how practical
        ideas are and to minimize user frustrations
      </Heading>
      <Body className="mt-1">
        While quick visual comprehension is generally beneficial, it becomes
        especially important during navigation due to the need for rapid
        response. This motivated us to look for design patterns that reduce
        complexity and make it easier to understand, even displaying a large
        amount of information. As a result, we focused on navigating Google
        Maps’ UI design patterns and implementing small yet impactful changes.
      </Body>

      <div className="mt-8 flex flex-col gap-16 rounded-[10px] bg-white px-2 py-8 sm:px-6 md:mt-10 md:gap-20 md:px-8 md:py-[72px]">
        {blocks.map((block, index) => (
          <div key={block.n}>
            {index > 0 && (
              <span
                aria-hidden
                className="mb-16 block h-1 w-full rounded-full bg-[#F2F4F7] md:mb-20"
              />
            )}

            <h3 className="flex items-start gap-2 font-dm text-[16px] font-bold leading-[1.5] text-[#1A2432] md:text-[18px]">
              <span className="flex size-[24px] shrink-0 items-center justify-center rounded-full bg-[#1A2432] text-[12px] text-white">
                {block.n}
              </span>
              {block.title}
            </h3>

            {block.shots.length > 0 && (
              <div className="mt-7 flex flex-col gap-4 md:gap-6">
                {block.shots.map((shot) => (
                  <Figure
                    key={shot}
                    name={shot}
                    sizes="(min-width: 1180px) 1072px, 100vw"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
