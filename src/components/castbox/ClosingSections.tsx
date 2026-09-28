import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { Figure } from "@/components/castbox/Figure";

/** Section 15 — "Success Metric" (Figma node 1:8063). */
export function SuccessMetricSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <Eyebrow>Success Metric</Eyebrow>
      <div className="mt-5 grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="flex flex-col gap-4">
          <Heading>What would we measure If we were a part of Castbox?</Heading>
          <Body>
            Let’s imagine that we are designers at Castbox with access to user
            behavior data. To measure design success, we would examine users who
            have listened to at least one episode in the past month.
          </Body>
          <Body>
            During a one-month period, we would collaborate with the data analyst
            team to examine user behavior and the average number of comments per
            episode and per podcast, the percentage of listeners who leave at
            least one comment, and how many replies each comment receives. The
            last of these confirms that comments are turning into conversations
            rather than isolated posts. If these metrics increase compared to the
            previous one-month period, we can conclude that the design has
            contributed to an increase in community engagement.
          </Body>
        </div>
        <Figure
          name="illusTarget"
          className="mx-auto w-full max-w-[180px] md:max-w-[215px]"
          sizes="215px"
        />
      </div>
    </Section>
  );
}

/** Section 16 — "Challenges and Constraints" (Figma node 1:8120). */
export function ChallengesSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <Eyebrow>Challenges and Constraints</Eyebrow>
      <div className="mt-5 grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-16">
        <Figure
          name="illusCrossroads"
          className="mx-auto w-full max-w-[180px] md:order-first md:max-w-[215px]"
          sizes="215px"
        />
        <div className="flex flex-col gap-4">
          <Heading>
            We updated the plan when things didn&apos;t go according to plan
          </Heading>
          <Body>
            During this time, we faced some challenges and some aspects did not
            go according to plan. We came up with various ideas for the
            Multitaskers such as quick reactions via shaking the phone, tapping
            on headphones or smartwatches, voice comments, etc.
          </Body>
          <Body>
            However after consulting with developers and considering technical
            limitations and high effort required, we shifted to more
            cost-effective alternatives.
          </Body>
        </div>
      </div>
    </Section>
  );
}

/** Section 17 — "Project Takeaways" (Figma node 1:8223). */
export function TakeawaysSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <Eyebrow>Project Takeaways</Eyebrow>
      <div className="mt-5 grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="flex flex-col gap-4">
          <Heading>
            Check the Information Architecture before adding new features!
          </Heading>
          <Body>
            In this project, we learned that low engagement isn’t just due to the
            absence of certain features, but also lack of structured layout and
            personalization. Castbox has many features; however, due to its poor
            layout and lack of visibility, many users faced challenges in finding
            what they needed.
          </Body>
          <Body>
            Additionally, the lack of content personalization and limited user
            control over the application often led to the display of irrelevant
            content, discouraging them from the product and ultimately leading to
            disengagement. I’ve always thought that adding new features would
            satisfy users, but this project made me realize that sometimes, small
            changes in information architecture can create great value and
            improve the user experience.
          </Body>
        </div>
        <Figure
          name="illusCollaboration"
          className="mx-auto w-full max-w-[240px] md:max-w-[295px]"
          sizes="295px"
        />
      </div>
    </Section>
  );
}

/** Section 18 — closing thank-you and contact cards (Figma node 1:8373). */
export function ThanksSection() {
  return (
    <Section>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white px-6 py-12 text-center">
          <span aria-hidden className="text-[32px] leading-none">
            🪐
          </span>
          <p className="font-dm text-[18px] font-bold leading-[1.8] text-[#1A2432] md:text-[20px]">
            That’s it! I really appreciate the time you spent
          </p>
          <p className="max-w-[560px] text-balance font-dm text-[14px] leading-[1.8] text-[#475467]">
            We would like to thank{" "}
            <span className="rounded bg-[#F2F4F7] px-2 py-1 font-bold text-[#1A2432] underline">
              ✏️ Marzie Nadali
            </span>{" "}
            (UX Leader turned Entrepreneur) for being our mentor and helping us
            implement this case study.
          </p>
          <p className="font-dm text-[13px] leading-[1.8] text-[#98A2B3]">
            May 2025
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 rounded-lg bg-white px-6 py-12 text-center">
          <p className="font-dm text-[18px] font-bold leading-[1.8] text-[#1A2432] md:text-[20px]">
            For any collaboration, feel free to contact me
          </p>
          {/* The Figma design uses this address rather than site.email. */}
          <a
            href="mailto:farnooshbagheriii@gmail.com"
            className="font-dm text-[14px] leading-[1.8] text-[#475467] hover:underline"
          >
            📩 farnooshbagheriii@gmail.com
          </a>
          <a
            href="tel:+971525662144"
            className="font-dm text-[14px] leading-[1.8] text-[#475467] hover:underline"
          >
            📞 +971 52 566 2144
          </a>
        </div>
      </div>
    </Section>
  );
}
