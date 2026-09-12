import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { Figure } from "@/components/castbox/Figure";

/** Section 12 — "Crazy 8s workshop" sketch sheets (Figma node 1:3640). */
export function CrazyEightsSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Crazy 8s workshop</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>
            Moving away from modern tools to speed up exploring creative ideas
          </Heading>
          <Body className="text-[15px] md:text-[16px]">
            To develop the selected ideas, we needed to visualize them to reduce
            design costs and make decisions about their implementation.
            That&apos;s why we ran the Crazy 8s workshop. After sketching and
            comparing them, we identified positive &amp; strength points of each
            one to move to the UI phase.
          </Body>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <Figure name="crazy8s1" sizes="(min-width: 640px) 355px, 100vw" />
        <Figure name="crazy8s2" sizes="(min-width: 640px) 355px, 100vw" />
        <Figure name="crazy8s3" sizes="(min-width: 640px) 355px, 100vw" />
      </div>
    </Section>
  );
}
