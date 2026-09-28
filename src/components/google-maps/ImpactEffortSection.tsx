import {
  Body,
  Eyebrow,
  Heading,
  ScrollHint,
  Section,
  Strong,
} from "@/components/google-maps/primitives";

/**
 * Section 8 — Impact/Effort matrix (Figma node 18:3809).
 *
 * The chart is a 1136×1136 square with every idea pinned at a fixed
 * coordinate, so it is rendered at that exact size inside a horizontally
 * scrollable rail rather than scaled down — at 10px the chips stop being
 * readable long before they stop fitting.
 */

const SIZE = 1136;
const QUADRANT = 555;
const GAP = 26; // 1136 - 2×555

const categories = {
  route: { label: "Route Guidance", color: "#1A73E8" },
  safety: { label: "Safety-related", color: "#FBBC04" },
  places: { label: "Places Overview", color: "#34A853" },
  transit: { label: "Public Transit", color: "#EA4335" },
  indoor: { label: "Indoor Coverage", color: "#475467" },
} as const;

type Category = keyof typeof categories;

type Idea = { label: string; x: number; y: number; w: number; cat: Category };

const ideas: Idea[] = [
  // Low-effort / High-impact
  { label: "🛣️ Displaying Clear Route Details", x: 284, y: 55, w: 162, cat: "route" },
  { label: "🆘 SOS Button for Emergencies", x: 22, y: 130, w: 157, cat: "safety" },
  { label: "🚶🏻 Displaying Popular Walking Routes", x: 300, y: 141, w: 179, cat: "route" },
  { label: "🏛️ Attractions Discovery Mode", x: 375, y: 194, w: 154, cat: "places" },
  { label: "👁️ Improving Visibility of Attraction Reports", x: 68, y: 227, w: 206, cat: "places" },
  { label: "🛡️ Route Safety Visualization", x: 329, y: 247, w: 144, cat: "safety" },
  { label: "🏪 Real-Time Updates by Business Owners", x: 174, y: 304, w: 204, cat: "places" },
  { label: "🔍 Adaptive Zoom and Lane Guidance", x: 224, y: 377, w: 185, cat: "route" },
  { label: "↕️ Sorting Bookmarked Attractions", x: 47, y: 402, w: 172, cat: "places" },
  { label: "🤷🏻 Smart Guidance for Confusing Moments", x: 319, y: 427, w: 208, cat: "route" },
  { label: "⤴️ 3D Exit Guidance with Prompts", x: 145, y: 457, w: 168, cat: "route" },
  { label: "🔄 Preference-Based Rerouting", x: 287, y: 498, w: 157, cat: "route" },

  // High-effort / High-impact
  { label: "🚆 Real-time Transit Updates from Users", x: 617, y: 36, w: 193, cat: "transit" },
  { label: "📆 Smart Trip Planning", x: 754, y: 94, w: 118, cat: "places" },
  { label: "🤖 AI Real-Time Travel Assistant", x: 677, y: 286, w: 156, cat: "route" },
  { label: "✅ AI-Powered Data Validation", x: 936, y: 308, w: 152, cat: "places" },
  { label: "🎖️ Bonuses & Trust Badges for Engagement", x: 796, y: 384, w: 208, cat: "places" },

  // Low-effort / Low-impact
  { label: "🏛️ Display Nearby Attractions", x: 305, y: 606, w: 149, cat: "places" },
  { label: "⚠️ Real-Time Driving Alerts & Warnings", x: 357, y: 718, w: 188, cat: "route" },
  { label: "🟢 Show Live User Avatars During Navigation", x: 94, y: 754, w: 212, cat: "route" },
  { label: "🎪 Nearby Events Display", x: 276, y: 825, w: 130, cat: "places" },
  { label: "🗺️ Offline Tourist Maps for Later Discovery", x: 46, y: 889, w: 204, cat: "indoor" },
  { label: "🚪 Show Main Entrances on Map", x: 117, y: 965, w: 160, cat: "indoor" },
];

const quadrants = [
  { name: "Low-effort / High-impact", x: 0, y: 0, fill: "#E7F7EB" },
  { name: "High-effort / High-impact", x: QUADRANT + GAP, y: 0, fill: "#E6EEF3" },
  { name: "Low-effort / Low-impact", x: 0, y: QUADRANT + GAP, fill: "#F9EFE3" },
  { name: "High-effort / Low-impact", x: QUADRANT + GAP, y: QUADRANT + GAP, fill: "#F3E5E4" },
];

function AxisPill({
  children,
  style,
  vertical,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
  vertical?: boolean;
}) {
  return (
    <span
      className="absolute flex items-center justify-center rounded-full bg-[#D0D5DD] font-dm text-[16px] text-[#1A2432]"
      style={style}
    >
      <span style={vertical ? { writingMode: "vertical-rl" } : undefined}>
        {children}
      </span>
    </span>
  );
}

export function ImpactEffortSection() {
  return (
    <Section>
      <Eyebrow>Impact-Effort Matrix</Eyebrow>
      <Heading className="mt-4">
        Finding a balanced solution to make a more efficient change
      </Heading>
      <Body className="mt-1">
        During the ideation phase, we realized that{" "}
        <span className="font-bold text-[#1A73E8]">
          most navigation apps focus solely on providing directions
        </span>{" "}
        to a destination, without addressing essential features for tourists such
        as safe route options, discovering new places, or smart trip planning. As
        a result, we focused on designing features like a “Tourist Mode,” route
        safety comparisons, and smart planning based on user behavior. These
        ideas were implemented with an emphasis on{" "}
        <Strong>feasibility</Strong> and ease of integration into the existing
        Google Maps interface.
      </Body>

      <div className="-mx-5 mt-10 overflow-x-auto px-5 sm:-mx-10 sm:px-10 md:mx-0 md:mt-12 md:px-0">
        <div
          className="relative shrink-0"
          style={{ width: SIZE, height: SIZE }}
          role="img"
          aria-label="Impact versus effort matrix plotting 23 ideas across four quadrants"
        >
          {quadrants.map((quadrant) => (
            <span
              key={quadrant.name}
              aria-hidden
              className="absolute rounded-[28px]"
              style={{
                left: quadrant.x,
                top: quadrant.y,
                width: QUADRANT,
                height: QUADRANT,
                backgroundColor: quadrant.fill,
              }}
            />
          ))}

          {/* Axes */}
          <span
            aria-hidden
            className="absolute bg-[#595959]"
            style={{ left: 0, top: 568, width: SIZE, height: 3 }}
          />
          <span
            aria-hidden
            className="absolute bg-[#595959]"
            style={{ left: 568, top: 0, width: 3, height: SIZE }}
          />

          <AxisPill vertical style={{ left: 543, top: 170, width: 50, height: 160 }}>
            High impact
          </AxisPill>
          <AxisPill vertical style={{ left: 543, top: 806, width: 50, height: 160 }}>
            Low impact
          </AxisPill>
          <AxisPill style={{ left: 170, top: 543, width: 160, height: 50 }}>
            Low effort
          </AxisPill>
          <AxisPill style={{ left: 806, top: 543, width: 160, height: 50 }}>
            High effort
          </AxisPill>

          {ideas.map((idea) => (
            <span
              key={idea.label}
              className="absolute flex items-center rounded-lg border bg-white px-3 py-2 font-dm text-[10px] leading-[1.5] text-black"
              style={{
                left: idea.x,
                top: idea.y,
                width: idea.w,
                borderColor: categories[idea.cat].color,
              }}
            >
              {idea.label}
            </span>
          ))}
        </div>
      </div>
      <ScrollHint className="xl:hidden" />

      <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {Object.entries(categories).map(([key, category]) => (
          <li key={key} className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-3 w-6 rounded border bg-white"
              style={{ borderColor: category.color }}
            />
            <span
              className="font-dm text-[14px]"
              style={{ color: category.color }}
            >
              {category.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
