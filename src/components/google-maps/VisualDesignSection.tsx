import { Figure } from "@/components/google-maps/Figure";
import type { AssetKey } from "@/components/google-maps/assets";
import {
  Body,
  Eyebrow,
  Heading,
  Section,
} from "@/components/google-maps/primitives";

/**
 * Section 10 — Visual design.
 *
 * Eight numbered blocks. Each heading is a light verb followed by the bold
 * feature name, next to a dark hexagon badge. The screens below every heading
 * are fixed compositions in Figma — phones, connector lines and dashed
 * annotation boxes — so each part is exported as one image.
 */

type Block = {
  n: number;
  /** Light-weight lead-in, e.g. "Provided Feedback:" */
  prefix: string;
  /** Bold feature name. */
  title: string;
  parts: AssetKey[];
};

const blocks: Block[] = [
  {
    n: 1,
    prefix: "Provided Feedback:",
    title: "Walking Navigation",
    parts: ["vd1Hero", "vd1Details"],
  },
  {
    n: 2,
    prefix: "Provided Feedback:",
    title: "Public Transportation",
    parts: ["vd2Hero", "vd2Details"],
  },
  {
    n: 3,
    prefix: "Provided Feedback:",
    title: "Upon Arrival",
    parts: ["vd3Hero", "vd3Details"],
  },
  {
    n: 4,
    prefix: "Introduced",
    title: "Exploration Mode",
    parts: ["vd4Hero", "vd4Details"],
  },
  {
    n: 5,
    prefix: "Supported",
    title: "Emergency Conditions",
    parts: ["vd5Hero", "vd5Details"],
  },
  {
    n: 6,
    prefix: "Personalized",
    title: "Trip Planning",
    parts: ["vd6Hero", "vd6Details", "vd6Details2"],
  },
  {
    n: 7,
    prefix: "Customized",
    title: "Driving Experience",
    parts: ["vd7Hero", "vd7Details"],
  },
  {
    n: 8,
    prefix: "Structured",
    title: "Place Information",
    parts: ["vd8Hero"],
  },
];

/** The dark hexagon carrying the block number. */
function HexBadge({ n }: { n: number }) {
  return (
    <span
      aria-hidden
      className="flex size-[30px] shrink-0 items-center justify-center bg-[#12303E] font-dm text-[12px] font-bold text-white md:size-[38px] md:text-[13px]"
      style={{
        clipPath:
          "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
      }}
    >
      {n}
    </span>
  );
}

export function VisualDesignSection() {
  return (
    <Section>
      <Eyebrow>Visual Design</Eyebrow>
      <Heading className="mt-4">
        From clues to sketches, a challenging process to understand how
        practical ideas are and to minimize user frustrations
      </Heading>
      <Body className="mt-1">
        While quick visual comprehension is generally beneficial, it becomes
        especially important during navigation due to the need for rapid
        response. This motivated us to look for design patterns that reduce
        complexity and make it easier to understand, even displaying a large
        amount of information. As a result, we focused on navigating Google
        Maps’ UI design patterns and implementing small yet impactful changes.
      </Body>

      <div className="mt-12 flex flex-col gap-14 md:mt-16 md:gap-20">
        {blocks.map((block, index) => (
          <div key={block.n}>
            {index > 0 && (
              <span
                aria-hidden
                className="mb-14 block h-px w-full bg-[#EAECF0] md:mb-20"
              />
            )}

            <h3 className="flex items-center gap-2.5 font-dm text-[15px] leading-[1.5] text-[#98A2B3] sm:text-[17px] md:gap-3 md:text-[20px]">
              <HexBadge n={block.n} />
              <span>
                {block.prefix}{" "}
                <span className="font-bold text-[#1A2432]">{block.title}</span>
              </span>
            </h3>

            <div className="mt-6 flex flex-col gap-6 md:mt-8 md:gap-10">
              {block.parts.map((part) => (
                <Figure
                  key={part}
                  name={part}
                  sizes="(min-width: 1180px) 1136px, 100vw"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
