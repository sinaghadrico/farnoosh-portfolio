import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { QuoteBubble } from "@/components/castbox/SketchCallout";
import { Figure } from "@/components/castbox/Figure";
import type { AssetKey } from "@/components/castbox/assets";

type Row = {
  before: AssetKey;
  after: AssetKey;
  /** One or two participant quotes sitting between the two screens. */
  quotes: { avatar: AssetKey; text: React.ReactNode }[];
};

const rows: Row[] = [
  {
    before: "iteration1Before",
    after: "iteration1After",
    quotes: [
      {
        avatar: "iterationAvatar1",
        text: (
          <>
            &quot;It was a <strong className="font-bold">document</strong> icon,
            I expected a <strong className="font-bold">file</strong> attached to
            the <strong className="font-bold">episode</strong>.&quot;
          </>
        ),
      },
    ],
  },
  {
    before: "iteration2Before",
    after: "iteration2After",
    quotes: [
      {
        avatar: "iterationAvatar2",
        text: (
          <>
            &quot;I assumed it would{" "}
            <strong className="font-bold">remove</strong> the{" "}
            <strong className="font-bold">episode</strong> entirely. So, I{" "}
            <strong className="font-bold">avoided it</strong>.&quot;
          </>
        ),
      },
      {
        avatar: "iterationAvatar3",
        text: (
          <>
            &quot;I <strong className="font-bold">can&apos;t guess</strong> what
            this does, not from the{" "}
            <strong className="font-bold">name</strong>, not from the{" "}
            <strong className="font-bold">icon</strong>.&quot;
          </>
        ),
      },
    ],
  },
  {
    before: "iteration3Before",
    after: "iteration3After",
    quotes: [
      {
        avatar: "iterationAvatar4",
        text: (
          <>
            &quot;It looks like the{" "}
            <strong className="font-bold">retweet</strong> icon, I thought it
            would <strong className="font-bold">repost</strong> the
            episode.&quot;
          </>
        ),
      },
      {
        avatar: "iterationAvatar5",
        text: (
          <>
            &quot;I thought it meant the episode has{" "}
            <strong className="font-bold">one comment</strong>, like a{" "}
            <strong className="font-bold">counter</strong>.&quot;
          </>
        ),
      },
    ],
  },
  {
    before: "iteration4Before",
    after: "iteration4After",
    quotes: [
      {
        avatar: "iterationAvatar6",
        text: (
          <>
            &quot;In <strong className="font-bold">programming</strong>, it
            refers to a number used to convert time zones, but for{" "}
            <strong className="font-bold">comments</strong>?{" "}
            <strong className="font-bold">No idea</strong>.&quot;
          </>
        ),
      },
    ],
  },
  {
    before: "iteration5Before",
    after: "iteration5After",
    quotes: [
      {
        avatar: "iterationAvatar7",
        text: (
          <>
            &quot;It sounded like a{" "}
            <strong className="font-bold">checklist. I don&apos;t know</strong>{" "}
            what this is.&quot;
          </>
        ),
      },
    ],
  },
  {
    before: "iteration6Before",
    after: "iteration6After",
    quotes: [
      {
        avatar: "iterationAvatar8",
        text: (
          <>
            &quot;I guess these are comments for an episode, but what if I want
            to <strong className="font-bold">write my own</strong>?&quot;
          </>
        ),
      },
    ],
  },
];

/**
 * Section 15 — "Design Iteration" (added in the newer Figma file).
 *
 * Six before/after pairs, each with the participant quote that prompted the
 * fix sitting between them.
 */
export function DesignIterationSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Design Iteration</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>Making small fixes that solved big frictions</Heading>
          <Body className="text-[15px] md:text-[16px]">
            To validate our design, we shared it with users and gathered their
            feedback. We first reviewed their overall impressions, then looked
            more closely at how they interacted with specific design details.
            This process revealed small usability issues that had initially gone
            unnoticed and could cause confusion. By identifying and addressing
            these issues, we aimed to create a smoother and more enjoyable user
            experience.
          </Body>
        </div>
      </div>

      <div className="mt-10 hidden justify-between px-8 md:flex">
        <p className="w-[280px] text-center font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
          Initial Design
        </p>
        <p className="w-[280px] text-center font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
          Iterated Design
        </p>
      </div>

      <div className="mt-6 flex flex-col">
        {rows.map((row, i) => (
          <div
            key={i}
            className={
              i === 0
                ? "grid items-center gap-6 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] md:gap-8"
                : "grid items-center gap-6 border-t border-[#EAECF0] py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] md:gap-8"
            }
          >
            <Figure
              name={row.before}
              className="mx-auto w-full max-w-[240px]"
              sizes="240px"
            />

            <div className="flex flex-col gap-4">
              {row.quotes.map((q, qi) => (
                <div key={qi} className="flex items-center gap-3">
                  <QuoteBubble className="flex-1">{q.text}</QuoteBubble>
                  <Figure
                    name={q.avatar}
                    className="w-[48px] shrink-0 md:w-[56px]"
                    sizes="56px"
                    compact
                  />
                </div>
              ))}
            </div>

            <Figure
              name={row.after}
              className="mx-auto w-full max-w-[240px]"
              sizes="240px"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
