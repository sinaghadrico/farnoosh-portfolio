import { Figure } from "@/components/google-maps/Figure";
import {
  Blue,
  BlockCaption,
  Body,
  Eyebrow,
  Heading,
  ImageZone,
  Section,
} from "@/components/google-maps/primitives";
import type { AssetKey } from "@/components/google-maps/assets";

/** Figma node 18:655 — "Problem Discovery". */

type Finding = {
  title: string;
  source: string;
  logo: AssetKey;
  href: string;
  body: string;
};

const findings: Finding[] = [
  {
    title: "The Cost of a Wrong Direction",
    source: "CNN.com",
    logo: "sourceCnn",
    href: "https://edition.cnn.com/2023/09/21/us/father-death-google-gps-drive-off-bridge-lawsuit-north-carolina/index.html",
    body: "In 2022, a father died after Google Maps directed him onto a bridge that had been collapsed for 9 years. His family is now suing Google for failing to update the map, despite receiving prior warnings.",
  },
  {
    title: "Lost in the Middle of Nowhere",
    source: "Businessinsider.com",
    logo: "sourceBusinessInsider",
    href: "https://www.businessinsider.com/google-maps-wilderness-trek-australia-2024-2",
    body: "In 2024, two tourists trusted Google Maps into a closed, dangerous road in the Australian wilderness, forcing them to survive for over a week after their car got stuck.",
  },
  {
    title: "Blind Spot for Attractions",
    source: "Reddit.com",
    logo: "sourceReddit",
    href: "https://www.reddit.com/r/GoogleMaps/comments/17seoeq/a_very_dumb_question_finding_local_attractions/",
    body: "Some users struggled to discover fun, unique local spots through Google Maps, saying the “Explore” tab mostly shows restaurants and lacks filters for hangout-friendly locations.",
  },
];

const deskInsights: { image: AssetKey; title: string; body: string }[] = [
  {
    image: "insightRouting",
    title: "Routing Without Real-World Awareness",
    body: "Ignoring real-world conditions and outdated guidance from Google Maps can direct tourists into unsafe, dead-end, restricted, or dangerous areas, resulting in confusion, risk, and the potential for serious consequences.",
  },
  {
    image: "insightTransit",
    title: "Missing Real-Time Transit Data",
    body: "The lack of up-to-date public transportation information, such as schedules, disrupts tourists’ trip planning, misleads users, and gradually erodes their trust in the app.",
  },
  {
    image: "insightLabels",
    title: "Mismatch in Names and Labels",
    body: "Inconsistencies between real-world names and labels displayed on Google Maps can cause difficulties and navigation errors for tourists, leading to wasted time, effort, and getting lost.",
  },
  {
    image: "insightAttractions",
    title: "Limitations in Attractions Discovery",
    body: "Finding diverse local tourist attractions beyond restaurant and coffee shop labels on Google Maps can be challenging, and information such as opening and closing times is often inaccurate, which can lead to user frustration.",
  },
];

function FindingCard({ finding }: { finding: Finding }) {
  return (
    <li>
      {/* Header strip — pale blue in Figma (#EDF5FF). */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-t-lg bg-[#EDF5FF] px-4 pb-3 pt-4 md:px-6 md:pt-6">
        <h3 className="font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
          {finding.title}
        </h3>
        <span className="flex items-center gap-1.5">
          <Figure
            name={finding.logo}
            compact
            className="size-[20px] shrink-0 rounded-[4px]"
            sizes="20px"
          />
          <span className="font-dm text-[14px] text-[#98A2B3]">
            {finding.source}
          </span>
        </span>
        <a
          href={finding.href}
          target="_blank"
          rel="noreferrer noopener"
          className="ml-auto font-dm text-[14px] text-[#1A73E8] underline underline-offset-2"
        >
          Link
        </a>
      </div>

      <div className="rounded-b-lg border border-t-0 border-[#EDF5FF] bg-white px-4 py-4 md:px-6">
        <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
          {finding.body}
        </p>
      </div>
    </li>
  );
}

export function ProblemDiscoverySection() {
  return (
    <Section>
      <Eyebrow>Problem Discovery</Eyebrow>
      <Heading className="mt-4">
        Misrouting that creates many challenges and sometimes dangerous!
      </Heading>
      <Body className="mt-1">
        Tourists using Google Maps often struggle with navigation, especially
        when trying to find key attractions or local transit options in
        unfamiliar cities. The app’s interface is not optimized for non-local
        users, leading to confusion and reliance on third-party guides.
      </Body>

      <ImageZone className="mt-6 md:mt-8">
        <BlockCaption>
          <Blue>Findings</Blue> on inaccurate route planning for private car
          users:
        </BlockCaption>
        <ul className="mt-5 space-y-4">
          {findings.map((finding) => (
            <FindingCard key={finding.title} finding={finding} />
          ))}
        </ul>
      </ImageZone>

      <ImageZone className="mt-4">
        <BlockCaption>
          <Blue>Key insights</Blue> from desk research:
        </BlockCaption>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deskInsights.map((insight) => (
            <li
              key={insight.title}
              className="flex flex-col gap-6 rounded-[20px] bg-white p-4"
            >
              {/* The four illustrations are cropped to different heights in
                  Figma, so give each one the same 244×169 slot to sit in. */}
              <div className="flex aspect-[244/169] items-center justify-center">
                <Figure
                  name={insight.image}
                  className="max-h-full w-auto max-w-full object-contain"
                  sizes="(min-width: 1024px) 244px, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-dm text-[14px] font-bold leading-[1.5] text-[#1A2432]">
                  {insight.title}
                </h3>
                <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">
                  {insight.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ImageZone>
    </Section>
  );
}
