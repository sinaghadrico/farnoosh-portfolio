import Image from "next/image";
import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";

type Card = { text: string; validated?: boolean };

const columns: { title: string; cards: Card[] }[] = [
  {
    title: "Context of Use Assumptions",
    cards: [
      {
        text: "Most users are busy while listening, so they can't interact right away.",
        validated: true,
      },
      { text: "Long time intervals between uses may reduce engagement." },
    ],
  },
  {
    title: "Behavioral Assumptions",
    cards: [
      {
        text: "Users see Castbox as a listening platform, not a social one. So prefer listening over engaging.",
      },
      {
        text: "Listeners value interactions only if podcasters acknowledge them.",
        validated: true,
      },
      {
        text: "Some listeners prefer private messages, while podcasters prefer public comments.",
      },
    ],
  },
  {
    title: "Product Assumptions",
    cards: [
      {
        text: "Users struggle to react to or share opinions on specific podcast parts.",
        validated: true,
      },
      {
        text: "Many users miss Castbox's engagement features due to poor visibility of tools.",
        validated: true,
      },
    ],
  },
];

/**
 * The column headers in Figma are hand-drawn sketch boxes — a filled rounded
 * rect with a doubled, slightly-off outline. Two offset rings reproduce that
 * without shipping an image per header.
 */
function SketchBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[96px] items-center justify-center px-6 text-center">
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl border border-[#C2C9D6] bg-[#EAECF0]"
      />
      <span
        aria-hidden
        className="absolute -inset-[3px] rotate-[0.35deg] rounded-2xl border border-[#C2C9D6]/70"
      />
      <p className="relative font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
        {children}
      </p>
    </div>
  );
}

function AssumptionCard({ text, validated }: Card) {
  return (
    <div
      className={
        validated
          ? "flex min-h-[160px] flex-col items-center justify-center gap-4 rounded-2xl border border-[#ADD5BC] bg-[#E8F9EE] p-4"
          : "flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-[#D0D5DD] bg-[#F2F4F7] p-4"
      }
    >
      <p className="text-balance text-center font-dm text-[15px] leading-[1.8] text-[#1A2432] md:text-[16px]">
        {text}
      </p>
      {validated && (
        <p className="whitespace-nowrap font-dm text-[15px] font-bold leading-[1.8] text-[#00BC00] md:text-[16px]">
          ✅ Validated
        </p>
      )}
    </div>
  );
}

/** Section 6 — "Our Assumptions", three dashed-header columns (node 1:1940). */
export function AssumptionsSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Our Assumptions</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>Do the Context, Behavior, and Design affect engagement?</Heading>
          <Body className="text-[15px] md:text-[16px]">
            We started by identifying potential assumptions about the causes of
            low user engagement on Castbox by putting ourselves in the user’s
            perspective. These assumptions guided our research and informed the
            following design steps.
          </Body>
        </div>
      </div>

      <div className="relative grid gap-6 py-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:py-12 lg:gap-12">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-6">
            <SketchBox>{col.title}</SketchBox>
            <div className="flex flex-col gap-6">
              {col.cards.map((card) => (
                <AssumptionCard key={card.text} {...card} />
              ))}
            </div>
          </div>
        ))}

        {/* Decorative question-marks doodle that sits in the empty first column. */}
        <Image
          src="/projects/castbox/questions.svg"
          alt=""
          aria-hidden
          width={200}
          height={200}
          className="pointer-events-none absolute bottom-12 left-[108px] hidden size-[200px] lg:block"
        />
      </div>
    </Section>
  );
}
