import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { Figure } from "@/components/castbox/Figure";
import { WideMedia } from "@/components/castbox/WideMedia";

/** Section 11 — "Approaching user-centered solutions", the prioritisation matrix. */
export function IdeationSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Approaching user-centered solutions</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>
            Which ideas are most impactful and feasible to implement in the first
            iteration?
          </Heading>
          <Body className="text-[15px] md:text-[16px]">
            To answer this question and find solutions that effectively addressed
            the identified problems, we conducted an ideation workshop (Brain
            writing) based on the insights, personas and their needs. During this
            workshop, over 60 initial ideas were generated. After further
            evaluation, we narrowed them down to 24 final user-centered ideas,
            which we then categorized according to each persona. Finally we used
            an idea prioritization matrix to select Viable, Feasible, and
            Desirable ideas based on their potential impact against the effort
            required to implement them.
          </Body>
        </div>
      </div>

      {/* The matrix is dense with 24 labelled chips — it ships as one export
          and scrolls sideways on narrow screens rather than reflowing. */}
      <WideMedia
        minWidth={760}
        className="mt-8"
        hint="Swipe to see the whole matrix"
      >
        <div className="rounded-lg bg-white p-4 md:p-6">
          <Figure name="prioritizationMatrix" sizes="(min-width: 1024px) 1088px, 760px" />
        </div>
      </WideMedia>
    </Section>
  );
}
