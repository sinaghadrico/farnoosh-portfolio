import { Figure } from "@/components/google-maps/Figure";
import type { AssetKey } from "@/components/google-maps/assets";
import {
  Body,
  Eyebrow,
  Heading,
  Section,
  Strong,
} from "@/components/google-maps/primitives";

/** Section 7 — Competitive analysis (Figma node 18:3103). */

type Competitor = {
  name: string;
  icon: AssetKey;
  /** Header cell tint, straight from Figma. */
  tint: string;
  /** Brand colour behind an active cell's icon. */
  glow: string;
};

const competitors: Competitor[] = [
  { name: "Apple Maps", icon: "appAppleMaps", tint: "#F1FEF3", glow: "#34A853" },
  { name: "Waze", icon: "appWaze", tint: "#F2FCFF", glow: "#33CCFF" },
  { name: "Citymapper", icon: "appCitymapper", tint: "#F3FFF2", glow: "#0BB04C" },
  { name: "KakaoMap", icon: "appKakaoMap", tint: "#FFFDEB", glow: "#FFCD00" },
  { name: "Maps.me", icon: "appMapsMe", tint: "#F4FFF2", glow: "#67B32B" },
  { name: "Neshan", icon: "appNeshan", tint: "#F2FAFF", glow: "#E2231A" },
];

/** One entry per row; `has` indexes into `competitors`. */
const features: { label: string[]; has: number[] }[] = [
  { label: ["User Reports", "&", "Real-time Feedback"], has: [0, 1, 2, 5] },
  { label: ["Turn-by-turn Directions", "&", "Lane Information"], has: [1, 5] },
  { label: ["Auto Zoom-in", "based on", "Driving Speed"], has: [1] },
  { label: ["Route Options", "Separately"], has: [0, 1] },
  { label: ["Step-free Routes &", "Shorter Walking", "Distances"], has: [2, 4] },
  { label: ["Other Users Navigating", "in Real-Time"], has: [1] },
  { label: ["Child-safe routing"], has: [3] },
  { label: ["Live train tracking"], has: [2, 3] },
];

const shots: { app: string; caption: string; image: AssetKey }[] = [
  { app: "Waze", caption: "Real-time feedback", image: "shotWaze" },
  {
    app: "Apple Maps",
    caption: "Displaying routes list with details separately",
    image: "shotAppleMaps",
  },
  {
    app: "KakaoMap",
    caption: "Real-time transit information",
    image: "shotKakaoMap",
  },
  {
    app: "Citymapper",
    caption: "Display public transport delays and multiple route options",
    image: "shotCitymapper",
  },
  {
    app: "Neshan",
    caption: "Lane exit guide, Road signs & Speed control",
    image: "shotNeshan",
  },
];

function MatrixCell({
  competitor,
  active,
}: {
  competitor: Competitor;
  active: boolean;
}) {
  return (
    <td className="px-2 py-4 text-center align-middle">
      <span className="relative inline-flex size-[44px] items-center justify-center">
        {active && (
          <span
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${competitor.glow}33 0%, ${competitor.glow}00 70%)`,
            }}
          />
        )}
        <Figure
          name={competitor.icon}
          compact
          sizes="32px"
          className={
            active
              ? "relative size-[32px] rounded-[8px]"
              : "relative size-[32px] rounded-[8px] opacity-25 grayscale"
          }
        />
        <span className="sr-only">
          {competitor.name}
          {active ? " — supported" : " — not supported"}
        </span>
      </span>
    </td>
  );
}

export function CompetitiveAnalysisSection() {
  return (
    <Section>
      <Eyebrow>Gaps, Gains and Growth</Eyebrow>
      <Heading className="mt-4">
        Google Maps is a leading navigation platform among competitors, but
        warnings for potentially unsafe or suspicious routes represent a gap that
        could turn into an opportunity
      </Heading>
      <Body className="mt-1">
        We learned that the trend is moving toward increased{" "}
        <Strong>user interaction</Strong>,{" "}
        <Strong>real-time feedback and updates</Strong>, and{" "}
        <Strong>improved transparency and clarity</Strong> in presenting
        information about routes, places, and other services, all contributing to
        a <Strong>smarter</Strong>, <Strong>more organized</Strong>, and{" "}
        <Strong>integrated travel experience</Strong>.
      </Body>

      {/* Feature matrix — scrolls sideways rather than squeezing the columns. */}
      <div className="-mx-5 mt-10 overflow-x-auto px-5 sm:-mx-10 sm:px-10 md:mx-0 md:mt-12 md:px-0">
        <table className="w-full min-w-[900px] border-separate border-spacing-0">
          <caption className="sr-only">
            Feature comparison of Google Maps competitors
          </caption>
          <thead>
            <tr>
              <th className="w-[162px] bg-white" />
              {competitors.map((competitor) => (
                <th
                  key={competitor.name}
                  scope="col"
                  className="px-2 py-6 align-middle"
                  style={{ backgroundColor: competitor.tint }}
                >
                  <span className="flex flex-col items-center gap-3">
                    <Figure
                      name={competitor.icon}
                      compact
                      sizes="56px"
                      className="size-[56px] rounded-[14px]"
                    />
                    <span className="font-dm text-[14px] text-[#475467]">
                      {competitor.name}
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, rowIndex) => (
              <tr
                key={feature.label.join(" ")}
                className={rowIndex % 2 === 1 ? "bg-[#F9FAFB]" : undefined}
              >
                <th
                  scope="row"
                  className="px-3 py-4 text-center align-middle font-dm text-[13px] font-bold leading-[1.5] text-[#1A2432]"
                >
                  {feature.label.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </th>
                {competitors.map((competitor, colIndex) => (
                  <MatrixCell
                    key={competitor.name}
                    competitor={competitor}
                    active={feature.has.includes(colIndex)}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 flex gap-4 md:gap-6">
        <span aria-hidden className="text-[32px] leading-none md:text-[40px]">
          🧭
        </span>
        <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
          By analyzing Google Maps’ competitors, we identified potential
          opportunities for improvement and discovered largely untapped areas
          that present new possibilities for innovation. Features such as{" "}
          <Strong>safety alerts</Strong> for routes,{" "}
          <Strong>end-to-end trip planning</Strong>,{" "}
          <Strong>context-aware suggestions</Strong> based on user needs,{" "}
          <Strong>real-time feedback beyond driving navigation</Strong>, and
          tools that support <Strong>free walking exploration</Strong> represent
          promising directions for expanding its capabilities.
        </p>
      </div>

      <ul className="mt-10 grid gap-6 rounded-[24px] bg-[#F2F4F7] p-5 pb-7 sm:grid-cols-2 md:mt-12 lg:grid-cols-5">
        {shots.map((shot) => (
          <li key={shot.app} className="flex flex-col items-center gap-5">
            <Figure
              name={shot.image}
              className="rounded-lg"
              sizes="(min-width: 1024px) 193px, (min-width: 640px) 45vw, 90vw"
            />
            <div className="text-center">
              <p className="font-dm text-[12px] text-[#1A73E8]">{shot.app}</p>
              <p className="mt-1 font-dm text-[14px] leading-[1.5] text-[#667085]">
                {shot.caption}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
