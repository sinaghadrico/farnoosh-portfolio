import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { QuoteBubble } from "@/components/castbox/SketchCallout";
import { Figure } from "@/components/castbox/Figure";

/** Section 14 — "Impacts from User Feedback" (Figma node 1:7957). */
export function UserFeedbackSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Impacts from User Feedback</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>
            “Seeing online listeners makes me feel part of a community!”
          </Heading>
          <Body className="text-[15px] md:text-[16px]">
            By redesigning the information architecture and adding new features,
            we expect an increase in average user engagement on Castbox. We
            conducted Google Meet sessions with five users to gather feedback on
            the new design. The most common feedback we received from them during
            the user feedback sessions is as follows.
          </Body>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-center">
        <QuoteBubble className="md:mt-10">
          “This new <strong className="font-bold">layout</strong> makes it{" "}
          <strong className="font-bold">easier</strong> for me to read posts and
          comments, and replies.”
        </QuoteBubble>
        <QuoteBubble>
          “I’ve always looked for a way to share my emotions{" "}
          <strong className="font-bold">in the moment</strong>”
        </QuoteBubble>
        <QuoteBubble className="md:mt-6">
          “The design is <strong className="font-bold">modern, clear</strong> and{" "}
          <strong className="font-bold">structured</strong> and encourages me to
          share my thoughts.”
        </QuoteBubble>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Figure name="feedbackSession1" sizes="(min-width: 768px) 560px, 100vw" />
        <Figure name="feedbackSession2" sizes="(min-width: 768px) 560px, 100vw" />
      </div>
    </Section>
  );
}
