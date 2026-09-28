import { Figure } from "@/components/google-maps/Figure";
import {
  Blue,
  Body,
  Eyebrow,
  Section,
} from "@/components/google-maps/primitives";

/**
 * Section 4 — Interviews (Figma node 18:2348).
 *
 * In Figma five insight cards are pinned at fixed coordinates over a 1136×552
 * dotted world map, each with a short leader line down to a coloured dot. The
 * map is exported as one image; the cards stay real text and are absolutely
 * positioned over it (as percentages of the map) from `lg` up. Below that the
 * cards would be unreadable at those sizes, so they stack under the map.
 */

const MAP_W = 1136;
const MAP_H = 552;

type Insight = {
  emoji: string;
  title: string;
  body: string;
  /** Card top-left in Figma map pixels. */
  x: number;
  y: number;
  /** Height of the white card in Figma pixels — the leader line starts here. */
  cardH: number;
  /** Leader-line offset from the card's left edge, in Figma pixels. */
  pin: number;
  dot: string;
};

const insights: Insight[] = [
  {
    emoji: "🧭",
    title: "Inaccurate Route Guidance",
    body: "Google Maps' delayed alerts and inaccurate exit displays often cause users to miss turns, increasing the risk of accidents and route deviations. As a result, many switch to more reliable, often localized, navigation apps.",
    x: 89,
    y: 25,
    cardH: 136,
    pin: 16,
    dot: "#1A73E8",
  },
  {
    emoji: "🗺",
    title: "Outdated & incomplete places overview",
    body: "Outdated or incomplete information like incorrect hours, closures, limited images, or unreliable ratings makes users hesitant to rely on Google Maps for exploration. They often turn to social media for confirmation, reducing the app’s effectiveness and leading to missed engagement and sales for businesses.",
    x: 684,
    y: 14,
    cardH: 172,
    pin: 194,
    dot: "#34A853",
  },
  {
    emoji: "🚌",
    title: "Unreliable Public Transit Info",
    body: "Inaccurate or outdated public transport data like schedules, station details, or inactive lines can confuse tourists, leading to missed trips and a frustrating experience.",
    x: 401,
    y: 221,
    cardH: 118,
    pin: 157,
    dot: "#EA4335",
  },
  {
    emoji: "🚧",
    title: "Unsafe Navigation",
    body: "Google Maps' focus on the fastest route can lead users through unsafe or inefficient paths, especially in unfamiliar areas. This lack of safety awareness affects trust particularly among solo travelers and women causing them to rely on intuition or locals instead.",
    x: 42,
    y: 273,
    cardH: 150,
    pin: 202,
    dot: "#FBBC04",
  },
  {
    emoji: "🏛",
    title: "No indoor navigation coverage",
    body: "In indoor places such as shopping malls, transportation terminals, airports, or museums, users may experience limited GPS coverage or signal disruptions, making accurate navigation challenging. As a result, they may spend additional time finding their way, rely on photos of indoor maps, or use printed maps as alternatives.",
    x: 779,
    y: 267,
    cardH: 172,
    pin: 234,
    dot: "#475467",
  },
];

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="bg-white p-4 shadow-[0_4px_16px_rgba(16,24,40,0.06)]">
      <p className="flex items-center gap-2">
        <span aria-hidden className="text-[20px] leading-none">
          {insight.emoji}
        </span>
        <span className="font-dm text-[14px] font-bold text-[#1A2432]">
          {insight.title}
        </span>
      </p>
      <p className="mt-2 font-dm text-[12px] leading-[1.5] text-[#475467]">
        {insight.body}
      </p>
    </div>
  );
}

export function InterviewSection() {
  return (
    <Section>
      <Eyebrow>Interview</Eyebrow>
      <h2 className="mt-4 font-dm text-[19px] font-bold italic leading-[1.5] text-[#1A2432] md:text-[23px] md:leading-[1.8]">
        “I missed my flight after taking a scary route to the bus station
        because the bus arrival time was wrong!”
      </h2>
      <Body className="mt-1">
        We continued our research by interviewing 8 individuals who had
        experience using Google Maps for finding key tourist attractions and
        navigation during their travels. The participants&apos; feedback sparked
        many data and findings, and we’ll highlight the most important insights
        below.
      </Body>

      <div className="mt-8 rounded-[10px] bg-[#FAFAFB] px-4 py-8 sm:px-6 md:mt-10 md:px-8 md:py-12">
        {/* lg and up: the Figma composition, cards pinned over the map. */}
        <div
          className="relative hidden xl:block"
          style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}
        >
          <Figure
            name="interviewMap"
            className="absolute inset-0 h-full w-full object-contain"
            sizes="(min-width: 1180px) 1136px, 100vw"
          />

          {insights.map((insight) => (
            <div
              key={insight.title}
              className="absolute"
              style={{
                left: pct(insight.x, MAP_W),
                top: pct(insight.y, MAP_H),
                width: pct(339, MAP_W),
              }}
            >
              <InsightCard insight={insight} />
              {/* Leader line down to the dot on the map. */}
              <div
                aria-hidden
                className="absolute flex flex-col items-center"
                style={{ left: pct(insight.pin, 339), top: "100%" }}
              >
                <span
                  className="w-px"
                  style={{ height: 22, backgroundColor: insight.dot }}
                />
                <span
                  className="size-[10px] rounded-full"
                  style={{ backgroundColor: insight.dot }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Below lg: the map reads as a backdrop only, so stack the cards. */}
        <div className="xl:hidden">
          <Figure
            name="interviewMap"
            className="rounded-lg"
            sizes="100vw"
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {insights.map((insight) => (
              <li key={insight.title} className="rounded-lg [&>div]:rounded-lg">
                <InsightCard insight={insight} />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 flex justify-center">
          <span className="rounded-[16px] bg-[#F2F4F7] px-6 py-1 text-center font-dm text-[15px] leading-[1.5] text-[#1A2432] md:text-[16px]">
            5 important <Blue>insights</Blue> from Users’ Interviews
          </span>
        </p>
      </div>
    </Section>
  );
}
