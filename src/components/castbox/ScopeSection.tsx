import { Section } from "@/components/castbox/primitives";

const methods = [
  "Assumptions, Desk Research",
  "Interviews, Survey",
  "Insights, Persona Profile",
  "Competitive Analysis",
  "Ideation, Prioritizations Matrix",
  "Crazy 8s, Sketching Ideas",
  "Wireframe, UI, Prototype",
  "5 second Test, User Feedback",
];

const objectives = [
  "Enhancing user engagement",
  "Streamlining commenting process for listener users",
  "Strengthen community engagement",
];

const facts = [
  { label: "Team", value: "2 Product designers" },
  { label: "Duration", value: "3 Weeks (Remote)" },
  { label: "Tools", value: "Figma, FigJam, Google Meet, Porsline" },
];

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-dm text-[16px] font-bold leading-[1.8] text-[#1A2432]">
      {children}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-1 ps-[21px]">
      {items.map((item) => (
        <li
          key={item}
          className="font-dm text-[14px] leading-[1.8] text-[#475467]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Section 3 — "Case Study Scope" three-column block (Figma node 1:420). */
export function ScopeSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <h2 className="font-dm text-[20px] font-bold leading-[1.8] text-[#1A2432] md:text-[24px]">
          Case Study Scope
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-[72px]">
          <div className="flex flex-col gap-1">
            <ColumnTitle>Methods</ColumnTitle>
            <Bullets items={methods} />
          </div>

          <div className="flex flex-col gap-1">
            <ColumnTitle>Objectives</ColumnTitle>
            <Bullets items={objectives} />
          </div>

          <div className="flex flex-col gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col">
                <ColumnTitle>{fact.label}</ColumnTitle>
                <p className="font-dm text-[14px] leading-[1.8] text-[#475467]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
