import {
  Eyebrow,
  Section,
  Strong,
} from "@/components/google-maps/primitives";

/**
 * Section 5 — Challenges and Constraints (Figma node 18:2480).
 *
 * The heading sits inside a hand-drawn orange box; the doubled, slightly
 * rotated outlines below stand in for that sketch stroke.
 */
export function ChallengesSection() {
  return (
    <Section>
      <div className="relative mx-auto w-full max-w-[934px] px-2 py-2">
        <span
          aria-hidden
          className="absolute inset-0 rounded-2xl border border-[#FF8D28]/70 bg-[#FCF1E7]"
        />
        <span
          aria-hidden
          className="absolute -inset-[5px] rotate-[0.25deg] rounded-2xl border border-[#FF8D28]/40"
        />
        <span
          aria-hidden
          className="absolute -inset-[10px] -rotate-[0.2deg] rounded-2xl border border-[#FF8D28]/25"
        />

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
