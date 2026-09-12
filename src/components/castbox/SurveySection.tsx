import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { DonutChart, DonutLegend, type Slice } from "@/components/castbox/DonutChart";
import { SketchCallout } from "@/components/castbox/SketchCallout";

const listeningHabits: Slice[] = [
  { label: "Engaged in other activities", value: 85, color: "#175A63" },
  { label: "Fully focused", value: 15, color: "#00C875" },
];

const communityChallenges: Slice[] = [
  { label: "Old interface", value: 22, color: "#BB3354" },
  { label: "Inability to leave timestamped comments", value: 20, color: "#D974B0" },
  { label: "Poor comments categorization", value: 18, color: "#FAA1F1" },
  { label: "Inability to mention other listeners", value: 18, color: "#FFADAD" },
  { label: "Nested display of replies", value: 16, color: "#FF7575" },
  { label: "Others", value: 6, color: "#E2445C" },
];

const exchangingOpinions: Slice[] = [
  { label: "Talking with friends (in-person or online)", value: 68, color: "#0086C0" },
  { label: "Discussing on social media platforms", value: 22, color: "#66CCFF" },
  { label: "Posting in the Castbox community section", value: 7, color: "#A1E3F6" },
  { label: "Others", value: 3, color: "#68A1BD" },
];

function ChartCard({
  slices,
  title,
  description,
}: {
  slices: Slice[];
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-lg border border-[#EAECF0] bg-white p-6 md:p-8 lg:flex-row lg:items-center lg:gap-12">
      <DonutChart slices={slices} />
      <div className="flex-1 lg:min-w-[280px]">
        <DonutLegend slices={slices} />
      </div>
      <div className="w-full lg:w-[420px] lg:self-stretch lg:border-l lg:border-[#EAECF0] lg:pl-12 lg:pt-8">
        <p className="font-dm text-[16px] font-bold leading-[1.8] text-[#1A2432]">
          {title}
        </p>
        <p className="mt-1 font-dm text-[14px] leading-[1.8] text-[#667085]">
          {description}
        </p>
      </div>
    </div>
  );
}

/** Section 7 — "Survey", three donut charts plus a closing callout. */
export function SurveySection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Survey</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>Which patterns we recognised through user research?</Heading>
          <Body className="text-[15px] md:text-[16px]">
            We began our research by conducting a survey with 60 Castbox users
            who had used the app at least one month earlier. This survey was
            shared in the Castbox community on Telegram for 2–3 days. The data
            was collected through the Porsline platform.
          </Body>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <ChartCard
          slices={listeningHabits}
          title="Listening Habits"
          description="Exploring whether users are engaged in other activities or fully focused while listening"
        />
        <ChartCard
          slices={communityChallenges}
          title="Community Challenges"
          description="Exploring the most important problems listeners have faced in the Castbox community."
        />
        <ChartCard
          slices={exchangingOpinions}
          title="Exchanging opinions"
          description="Exploring where and how listeners typically discuss podcasts they have listened to"
        />
      </div>

      <SketchCallout emoji="🧶" className="mx-auto mt-12 max-w-[930px]">
        The usage pattern of interval users showed no significant difference in
        how they engaged with the community, which led us to conduct interviews
        to better understand the reasons behind their lack of participation.
      </SketchCallout>
    </Section>
  );
}
