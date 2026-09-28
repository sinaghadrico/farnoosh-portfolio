import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { QuoteBubble } from "@/components/castbox/SketchCallout";
import { Figure } from "@/components/castbox/Figure";
import type { AssetKey } from "@/components/castbox/assets";

type Takeaway = {
  avatar: AssetKey;
  quote: React.ReactNode;
  /** Figma alternates the bubble between the left and right half of the grid. */
  side: "left" | "right";
};

const takeaways: Takeaway[] = [
  {
    avatar: "quoteAvatar1",
    side: "right",
    quote: (
      <>
        “I turn to other platforms for engagement because my{" "}
        <strong className="font-bold">opinions</strong> are{" "}
        <strong className="font-bold">seen, discussed</strong>, and have an{" "}
        <strong className="font-bold">impact</strong> on the podcast.”
      </>
    ),
  },
  {
    avatar: "quoteAvatar2",
    side: "left",
    quote: (
      <>
        “I’m <strong className="font-bold">doing other activities</strong> while
        listening to podcasts and I’m not focused on the app to engage with the
        community.”
      </>
    ),
  },
  {
    avatar: "quoteAvatar3",
    side: "right",
    quote: (
      <>
        “Posts on Community are not{" "}
        <strong className="font-bold">categorized based on different criteria</strong>{" "}
        and <strong className="font-bold">replies are nested</strong>.”
      </>
    ),
  },
  {
    avatar: "quoteAvatar4",
    side: "left",
    quote: (
      <>
        “I’m willing to write a review about a{" "}
        <strong className="font-bold">specific part of an episode</strong>{" "}
        because my opinion is related to a specific moment in an episode.”
      </>
    ),
  },
  {
    avatar: "quoteAvatar5",
    side: "right",
    quote: (
      <>
        “I <strong className="font-bold">don’t even know</strong> that the
        community exists.”
      </>
    ),
  },
  {
    avatar: "quoteAvatar6",
    side: "left",
    quote: (
      <>
        “The interface is <strong className="font-bold">old and not modern</strong>,
        which discourages me from engaging with it.”
      </>
    ),
  },
];

/** Section 8 — "Interviews", session screenshots plus six takeaway quotes. */
export function InterviewsSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Interviews</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>
            Users turn to other platforms to engage because they think their
            opinions are seen, discussed and have an impact
          </Heading>
          <Body className="text-[15px] md:text-[16px]">
            We continued our research by conducting in-depth interviews with six
            participants. The interviews lasted an average of around 30 minutes.
            Participants were recruited through the “Willing to be interviewed”
            field included in the survey. The sessions were conducted via Google
            Meet, with one designer acting as the moderator and another as the
            note-taker, ensuring a consistent, comfortable environment that
            encouraged honest feedback.
          </Body>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Figure name="meetInterview1" sizes="(min-width: 640px) 368px, 100vw" />
        <Figure name="meetInterview2" sizes="(min-width: 640px) 368px, 100vw" />
        <Figure name="meetInterview3" sizes="(min-width: 640px) 368px, 100vw" />
      </div>

      <p className="mt-12 font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
        6 important takeaways from Users’ Interviews
      </p>

      <div className="mt-6 flex flex-col gap-8 md:gap-10">
        {takeaways.map((t, i) => (
          <div
            key={i}
            className={
              t.side === "left"
                ? "flex items-center gap-3 sm:gap-4 md:w-[56%] md:self-start lg:w-[52%]"
                : "flex flex-row-reverse items-center gap-3 sm:gap-4 md:w-[56%] md:self-end lg:w-[52%]"
            }
          >
            <Figure
              name={t.avatar}
              className="w-[52px] shrink-0 sm:w-[64px] md:w-[76px]"
              sizes="76px"
              compact
            />
            <QuoteBubble className="min-w-0 flex-1">{t.quote}</QuoteBubble>
          </div>
        ))}
      </div>
    </Section>
  );
}
