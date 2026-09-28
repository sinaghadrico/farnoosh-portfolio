import { Heading, Section } from "@/components/google-maps/primitives";

/** Figma node 18:607 — "Case Study Scope". */

const methods = [
  "Desk Research",
  "Interviews, Insights",
  "Persona Profile",
  "Competitive Analysis",
  "Ideation, Prioritizations Matrix",
  "Visual Design",
];

const objectives = [
  "Navigation Clarity",
  "End-to-end Trip Planning",
  "Safety Features",
  "Real-time Feedback",
  "Exploration Mode",
  "Emergency Conditions",
  "Structured Place Information",
];

const facts = [
  { label: "Team", value: "2 Product designers" },
  { label: "Role", value: "UX Researcher, UX Designer, UI Designer" },
  { label: "Duration", value: "4 Weeks (Remote)" },
  { label: "Tools", value: "Figma, FigJam, Google Meet" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-dm text-[16px] font-bold leading-[1.8] text-[#1A2432]">
      {children}
    </h3>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 space-y-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 font-dm text-[14px] leading-[1.8] text-[#475467]"
        >
          <span aria-hidden className="text-[#98A2B3]">
            •
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ScopeSection() {
  return (
    <Section>
      <Heading>Case Study Scope</Heading>

      <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-3 md:gap-[72px]">
        <div>
          <ColumnHeading>Methods</ColumnHeading>
          <List items={methods} />
        </div>

        <div>
          <ColumnHeading>Objectives</ColumnHeading>
          <List items={objectives} />
        </div>

        <dl className="space-y-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-dm text-[16px] font-bold leading-[1.8] text-[#1A2432]">
                {fact.label}
              </dt>
              <dd className="font-dm text-[14px] leading-[1.8] text-[#475467]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
