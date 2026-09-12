import { Section, Eyebrow, Heading, Body, StepBadge } from "@/components/castbox/primitives";
import { Figure } from "@/components/castbox/Figure";
import type { AssetKey } from "@/components/castbox/assets";

type Block = {
  n: number;
  /** Heading with the emphasised words marked up, as in Figma. */
  title: React.ReactNode;
  art: AssetKey;
  /** Blocks 1–3 carry the before/after column labels; 4 and 5 don't. */
  compare?: boolean;
};

const blocks: Block[] = [
  {
    n: 1,
    art: "ui1Playback",
    compare: true,
    title: (
      <>
        Changes to the <strong className="font-bold text-[#1A2432]">Playback</strong> page:
      </>
    ),
  },
  {
    n: 2,
    art: "ui2Comments",
    compare: true,
    title: (
      <>
        Changes to the <strong className="font-bold text-[#1A2432]">Comment</strong> section:
      </>
    ),
  },
  {
    n: 3,
    art: "ui3Community",
    compare: true,
    title: (
      <>
        Changes to the <strong className="font-bold text-[#1A2432]">Community</strong> section:
      </>
    ),
  },
  {
    n: 4,
    art: "ui4LockScreen",
    title: (
      <>
        Adding a{" "}
        <strong className="font-bold text-[#1A2432]">one-tap reactions</strong>{" "}
        feature to the{" "}
        <strong className="font-bold text-[#1A2432]">lock screen</strong>:
      </>
    ),
  },
  {
    n: 5,
    art: "ui5Reminder",
    title: (
      <>
        Adding a <strong className="font-bold text-[#1A2432]">Reminder</strong>{" "}
        feature for later engagements:
      </>
    ),
  },
];

/**
 * Section 13 — "Visual Design" (Figma node 7:34), the tallest block at 5838px.
 *
 * Each numbered block is a dense composition of phone screens, annotation
 * boxes and connector lines, so it ships as a single export per block with
 * descriptive alt text; the headings and column labels stay real text.
 */
export function VisualDesignSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Visual Design</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>
            Let’s begin shaping our initial ideas into a practical interface and
            see how they might be functional with user needs
          </Heading>
          <Body className="text-[15px] md:text-[16px]">
            In the UI design phase, we transformed our ideas and wireframes into
            a structured interface by improving the information architecture and
            focusing on visual hierarchy and clarity to keep users engaged
            throughout the experience.
          </Body>
        </div>
      </div>

      <div className="mt-12 flex flex-col">
        {blocks.map((block, i) => (
          <div
            key={block.n}
            className={
              i === 0
                ? "flex flex-col gap-8"
                : "mt-12 flex flex-col gap-8 border-t border-[#EAECF0] pt-12"
            }
          >
            <div className="flex items-center gap-4">
              <StepBadge n={block.n} />
              <p className="font-dm text-[18px] leading-[1.6] text-[#98A2B3] md:text-[22px]">
                {block.title}
              </p>
            </div>

            {block.compare && (
              <div className="hidden justify-between px-4 md:flex">
                <p className="font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
                  Castbox&apos;s current Design
                </p>
                <p className="font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
                  Redesigned Version
                </p>
              </div>
            )}

            {/* These compositions are laid out for a wide canvas; below the
                breakpoint they scroll rather than squash to illegibility. */}
            <div className="-mx-5 overflow-x-auto px-5 sm:-mx-10 sm:px-10 md:mx-0 md:px-0">
              <div className="min-w-[860px] md:min-w-0">
                <Figure name={block.art} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
