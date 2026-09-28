import { Figure } from "@/components/google-maps/Figure";
import type { AssetKey } from "@/components/google-maps/assets";
import {
  Body,
  Eyebrow,
  Heading,
  Section,
} from "@/components/google-maps/primitives";

/** Section 10 — Success Metric (Figma node 18:5593). */

const metrics: { icon: AssetKey; title: string; body: React.ReactNode }[] = [
  {
    icon: "metricSafety",
    title: "Safety Analysis",
    body: "We will monitor the frequency of 'unsafe' reports for routes previously marked as safe. A reduction in these reports may indicate improved user trust and perceived safety during navigation.",
  },
  {
    icon: "metricExitMisses",
    title: "Exit Misses & Re-Routing Frequency",
    body: "By tracking how often users are re-routed or prompted with new directions, we will evaluate whether users will continue to miss exits, an indicator of guidance clarity.",
  },
  {
    icon: "metricIncident",
    title: "Incident Detection via Stop Patterns",
    body: "Sudden or prolonged stops along a route will be monitored as potential indicators of incidents. We will assess whether early warnings and improved guidance contribute to reducing these occurrences.",
  },
];

const wideMetrics: { icon: AssetKey; title: string; body: React.ReactNode }[] = [
  {
    icon: "metricFeedback",
    title: "User Feedback Analysis",
    body: "To evaluate routing effectiveness, we will examine post-routing feedback to determine which suggested routes users selected in cases of reported satisfaction versus dissatisfaction. When explicit feedback is unavailable, we will analyze historical route selection patterns to infer user preferences under similar conditions.",
  },
  {
    icon: "metricTripPlanning",
    title: "Tourist Trip Planning Behavior",
    body: (
      <>
        We will also explore how tourists plan and use their trips:
        <br />– Do they plan ahead or in real time during travel?
        <br />– Do they share their plans with others?
        <br />– Do they prefer wandering freely, visiting less structured
        locations, or following popular, frequently used paths?
      </>
    ),
  },
];

function MetricCard({
  icon,
  title,
  body,
}: {
  icon: AssetKey;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <li className="flex flex-col gap-4 rounded-[20px] bg-white p-4">
      <div className="flex flex-col items-center gap-4 py-2">
        <Figure name={icon} compact className="size-[45px]" sizes="45px" />
        <h3 className="text-center font-dm text-[14px] font-bold leading-[1.5] text-[#1A2432]">
          {title}
        </h3>
      </div>
      <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">{body}</p>
    </li>
  );
}

export function SuccessMetricSection() {
  return (
    <Section>
      <Eyebrow>Success Metric</Eyebrow>
      <Heading className="mt-4">
        Did our features truly drive impact? Imagine we’re part of the Google
        team evaluating a design’s success
      </Heading>
      <Body className="mt-2">We will measure the following factors:</Body>

      <ul className="mt-4 grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </ul>

      <ul className="mt-4 grid gap-4 md:mx-auto md:w-[calc(100%-368px)] md:grid-cols-2">
        {wideMetrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </ul>
    </Section>
  );
}

/** Section 11 — Project Takeaways (Figma node 18:5673). */

const takeaways = [
  {
    n: 1,
    title: "Social impact of design decisions",
    body: "Labeling areas as unsafe can raise ethical concerns and lead to social consequences, such as reduced foot traffic and potentially increased crime. Using more neutral terms may help prevent negative bias.",
    bg: "#F7FBFF",
    border: "#1A73E8",
  },
  {
    n: 2,
    title: "Decisions should be left to users",
    body: "Tourists do not always prioritize early arrival; many prefer to arrive later if it ensures their safety and a positive experience. As visitors are unfamiliar with the city, negative experiences caused by navigation apps can negatively impact their overall perception of the city, reduce trust, cause stress or fear.",
    bg: "#FFFDF8",
    border: "#FBBC04",
  },
  {
    n: 3,
    title: "Discoverability is key to engagement",
    body: "Having a wide range of features is useful, but their discoverability and visibility play a key role. When features are easy to notice, users are more likely to engage with them, which can lead to greater overall effectiveness.",
    bg: "#F7FFF9",
    border: "#34A853",
  },
  {
    n: 4,
    title: "Valuing feedback builds trust",
    body: "When users see that their feedback is valued and directly influences the app’s performance, they are more likely to contribute real-time information about routes, tourist attractions, public transportation, etc. This increases tourists’ trust in the information provided and reduces the need to verify it through other apps.",
    bg: "#FFF7F7",
    border: "#EA4335",
  },
];

export function TakeawaysSection() {
  return (
    <Section>
      <Eyebrow>Project Takeaways</Eyebrow>
      <Heading className="mt-4">
        Each design decision on the web can directly influence user behavior in
        the real world
      </Heading>
      <Body className="mt-1">
        This project helped me think critically that even the smallest design
        decisions can influence users’ real-life decisions, actions, and
        emotions, especially for tourists in unfamiliar environments.
      </Body>

      <ul className="mt-6 space-y-5 md:mt-8">
        {takeaways.map((takeaway) => (
          <li
            key={takeaway.n}
            className="relative overflow-hidden rounded-lg border-l-[5px] px-6 py-5"
            style={{
              backgroundColor: takeaway.bg,
              borderColor: takeaway.border,
            }}
          >
            {/* Oversized ghost numeral, bleeding off the top-right corner. */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 right-8 select-none font-dm text-[130px] font-bold leading-none text-[#1A2432]/[0.04] md:text-[170px]"
            >
              {takeaway.n}
            </span>
            <div className="relative">
              <h3 className="font-dm text-[17px] font-bold leading-[1.5] text-[#1A2432] md:text-[18px]">
                {takeaway.title}
              </h3>
              <p className="mt-2 font-dm text-[15px] leading-[1.6] text-[#475467] md:text-[16px]">
                {takeaway.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Section 12 — Thanks + contact (Figma node 18:5704). */

export function ThanksSection() {
  return (
    <Section className="pb-16">
      <div className="rounded-[16px] border border-[#F2F4F7] bg-white px-6 py-10 text-center md:px-8 md:py-12">
        <p aria-hidden className="font-dm text-[48px] leading-none md:text-[64px]">
          🌠
        </p>
        <Heading className="mt-5">
          That’s it! I really appreciate the time you spent
        </Heading>
        <p className="mt-1 font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
          We would like to thank{" "}
          <span className="whitespace-nowrap rounded bg-[#F2F4F7] px-1.5 py-0.5">
            🪄{" "}
            <span className="font-bold text-[#1A2432] underline underline-offset-2">
              Marzie Nadali
            </span>
          </span>{" "}
          (UX Leader turned Entrepreneur)
          <br className="hidden sm:block" /> for being our mentor and helping us
          implement this case study.
        </p>
        <p className="mt-5 font-dm text-[14px] leading-[1.8] text-[#98A2B3]">
          July 2025
        </p>
      </div>

      <div className="mt-8 rounded-[16px] border border-[#F2F4F7] bg-white px-6 py-10 text-center md:px-8 md:py-12">
        <Heading>For any collaboration, feel free to contact me!</Heading>
        <p className="mt-1 font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
          📩{" "}
          <a
            href="mailto:farnooshbagheriii@gmail.com"
            className="underline underline-offset-2"
          >
            farnooshbagheriii@gmail.com
          </a>
        </p>
        <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
          📞{" "}
          <a href="tel:+971525662144" className="underline underline-offset-2">
            +971 52 566 2144
          </a>
        </p>
      </div>
    </Section>
  );
}
