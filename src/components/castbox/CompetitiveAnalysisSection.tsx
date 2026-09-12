import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { Figure } from "@/components/castbox/Figure";
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

      <div className="mt-8 rounded-lg bg-white p-6 md:p-8">
        <ul className="flex flex-wrap items-start justify-center gap-8 md:gap-12">
          {competitors.map((c) => (
            <li key={c.name} className="flex w-[96px] flex-col items-center gap-3">
              <Figure name={c.logo} className="w-[64px]" sizes="64px" compact />
              <span className="text-center font-dm text-[14px] leading-[1.8] text-[#475467]">
                {c.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-[#F2F4F7] p-4 sm:grid-cols-3 md:grid-cols-5 md:p-6">
          {shots.map((s) => (
            <div key={s.caption} className="flex flex-col gap-3">
              <Figure
                name={s.art}
                className="rounded-xl"
                sizes="(min-width: 768px) 196px, 45vw"
              />
              <p className="text-center font-dm text-[13px] leading-[1.6] text-[#667085]">
                {s.caption}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
          What did we find?
        </p>
        <ul className="mt-2 flex flex-col">
          {findings.map((f, i) => (
            <li
              key={i}
              className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:gap-8"
            >
              <p className="flex-1 font-dm text-[14px] leading-[1.8] text-[#475467]">
                {f.text}
              </p>
              <ul className="flex flex-wrap items-center gap-4 md:w-[360px] md:shrink-0 md:border-l md:border-[#EAECF0] md:pl-8">
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
