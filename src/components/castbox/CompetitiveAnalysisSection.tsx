import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { Figure } from "@/components/castbox/Figure";
import { ScaleToFit } from "@/components/ScaleToFit";
import type { AssetKey } from "@/components/castbox/assets";

const competitors: { logo: AssetKey; name: string }[] = [
  { logo: "logoSoundcloud", name: "SoundCloud" },
  { logo: "logoSpotify", name: "Spotify" },
  { logo: "logoApplePodcast", name: "Apple Podcast" },
  { logo: "logoYoutube", name: "YouTube" },
  { logo: "logoTelegram", name: "Telegram" },
];

const shots: { art: AssetKey; caption: string }[] = [
  { art: "competitorShot1", caption: "visible & quick interactions" },
  { art: "competitorShot2", caption: "clear & structured community" },
  { art: "competitorShot3", caption: "in-app conversations" },
  { art: "competitorShot4", caption: "chaptered episodes & categorized comments" },
  { art: "competitorShot5", caption: "timestamped commenting" },
];

const findings: { text: React.ReactNode; tags: { logo: AssetKey; name: string }[] }[] = [
  {
    text: (
      <>
        Comments and replies are clearly organized, making them more{" "}
        <strong className="font-bold">visible</strong> and{" "}
        <strong className="font-bold">easier</strong> to engage with.
      </>
    ),
    tags: [
      { logo: "logoSoundcloud", name: "SoundCloud" },
      { logo: "logoYoutube", name: "YouTube" },
      { logo: "logoSpotify", name: "Spotify" },
    ],
  },
  {
    text: (
      <>
        The ability to comment on{" "}
        <strong className="font-bold">specific moments, quick reactions</strong>{" "}
        and <strong className="font-bold">replies</strong>.
      </>
    ),
    tags: [
      { logo: "logoSoundcloud", name: "SoundCloud" },
      { logo: "logoYoutube", name: "YouTube" },
    ],
  },
  {
    text: (
      <>
        Allowing users to send{" "}
        <strong className="font-bold">direct messages</strong> for in-app
        interaction with others.
      </>
    ),
    tags: [{ logo: "logoSoundcloud", name: "SoundCloud" }],
  },
  {
    text: (
      <>
        <strong className="font-bold">Live streaming</strong> capability for
        better user engagement.
      </>
    ),
    tags: [{ logo: "logoYoutube", name: "YouTube" }],
  },
  {
    text: (
      <>
        The ability to interact while multitasking{" "}
        <strong className="font-bold">remains a gap</strong> in the market and
        presents an opportunity worth exploring.
      </>
    ),
    tags: [{ logo: "iconMarketGap", name: "Market Gap" }],
  },
];

/** Section 10 — "Competitive Analysis" (Figma node 1:3034). */
export function CompetitiveAnalysisSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Competitive Analysis</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>
            The ability to interact while multitasking remains a gap in the
            market and presents an opportunity worth exploring
          </Heading>
          <Body className="text-[15px] md:text-[16px]">
            By analyzing Castbox&apos;s direct and indirect competitors, we
            looked for their strengths and weaknesses in user engagement to gain
            valuable insights into their strategies and uncovered potential
            opportunities for improvement. We discovered some similar and
            distinctive feature offerings across the apps, centered around goal
            tracking. However, the ability to interact while multitasking remains
            a gap in the market and presents a valuable opportunity to explore.
          </Body>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-white p-4 sm:p-6 md:p-8">
        {/* One row at every width: on phones the logos and labels shrink
            rather than wrapping onto a second line. */}
        <ul className="flex flex-nowrap items-start justify-between gap-2 sm:justify-center sm:gap-8 md:gap-12">
          {competitors.map((c) => (
            <li key={c.name} className="flex flex-col items-center gap-2 sm:w-[96px] sm:gap-3">
              <Figure name={c.logo} className="w-[34px] sm:w-[64px]" sizes="64px" compact />
              <span className="whitespace-nowrap text-center font-dm text-[10px] leading-[1.8] text-[#475467] sm:text-[14px]">
                {c.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Five tall phone shots, kept in one row and scaled down as a whole
            on smaller screens. */}
        <ScaleToFit width={1136} className="mt-8">
          <ul className="grid grid-cols-5 gap-4 rounded-2xl bg-[#F2F4F7] p-6">
            {shots.map((s) => (
              <li key={s.caption} className="flex flex-col gap-3">
                <Figure
                  name={s.art}
                  className="rounded-xl"
                  sizes="(min-width: 1024px) 196px, 20vw"
                />
                <p className="text-center font-dm text-[13px] leading-[1.6] text-[#667085]">
                  {s.caption}
                </p>
              </li>
            ))}
          </ul>
        </ScaleToFit>

        <p className="mt-10 font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
          What did we find?
        </p>
        <ul className="mt-2 flex flex-col">
          {findings.map((f, i) => (
            <li
              key={i}
              className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:gap-8"
            >
              <p className="flex-1 font-dm text-[14px] leading-[1.8] text-[#475467]">
                {f.text}
              </p>
              <ul className="flex flex-wrap items-center gap-4 lg:w-[340px] lg:shrink-0 lg:border-l lg:border-[#EAECF0] lg:pl-8">
                {f.tags.map((t) => (
                  <li key={t.name} className="flex items-center gap-2">
                    <Figure name={t.logo} className="w-[22px] shrink-0" sizes="22px" compact />
                    <span className="whitespace-nowrap font-dm text-[13px] leading-[1.8] text-[#475467]">
                      {t.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
