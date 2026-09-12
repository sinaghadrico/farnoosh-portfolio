import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";
import { Figure } from "@/components/castbox/Figure";
import type { AssetKey } from "@/components/castbox/assets";

type Persona = {
  goal: React.ReactNode;
  art: AssetKey;
  name: string;
  role: string;
  description: string;
};

const personas: Persona[] = [
  {
    art: "personaMultitasker",
    name: "The Multitasker",
    role: "Athlete",
    goal: (
      <>
        “My goal is finding a <strong className="font-bold">quick</strong> and{" "}
        <strong className="font-bold">effortless</strong> way to react or leave
        feedback <strong className="font-bold">without interrupting</strong> my
        current activity.”
      </>
    ),
    description:
      "The Multitasker listens to podcasts while engaging in other activities. They rarely interact with the Castbox community because they aren’t focused on the app when listening.",
  },
  {
    art: "personaSociable",
    name: "The Sociable",
    role: "Journalist",
    goal: (
      <>
        “My goal is a <strong className="font-bold">dynamic discussion</strong>{" "}
        space where my thoughts <strong className="font-bold">directly</strong>{" "}
        and <strong className="font-bold">quickly</strong> influence others.
        (ongoing conversations).”
      </>
    ),
    description:
      "The Sociable wants their opinions to be seen, discussed, and acknowledged, so they prefer engaging on social media platforms where podcasters and their friends are more accessible.",
  },
  {
    art: "personaTechEnthusiast",
    name: "The Tech Enthusiast",
    role: "Developer",
    goal: (
      <>
        “My Goal is to have a <strong className="font-bold">high control</strong>{" "}
        of the app in a <strong className="font-bold">modern way</strong>, such
        as post categorizing, leaving timestamped comments, and fast replies
        reading.”
      </>
    ),
    description:
      "The tech enthusiast enjoys the structured, clean, and accurate architecture to better manage of their time and listening experience.",
  },
];

/** Section 9 — "Persona profile", three archetypes (Figma node 1:2522). */
export function PersonasSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Persona profile</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>Who are the listeners?</Heading>
          <Body className="text-[15px] md:text-[16px]">
            By categorizing our research insights, we identified 3 main user
            personas (archetypes) that guided our design decisions by
            highlighting the user needs, pain points, and behaviors, ensuring our
            solutions were user-centered and aligned with real expectations.
          </Body>
        </div>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-8">
        {personas.map((p) => (
          <div key={p.name} className="flex flex-col">
            <p className="text-center font-dm text-[13px] leading-[1.8] text-[#475467] md:text-[14px]">
              {p.goal}
            </p>
            <Figure
              name={p.art}
              className="mx-auto mt-6 w-[220px] md:w-[280px]"
              sizes="280px"
            />
            <div className="mt-8">
              <p className="font-dm text-[15px] font-bold leading-[1.8] text-[#1A2432] md:text-[16px]">
                {p.name}
              </p>
              <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">
                {p.role}
              </p>
              <p className="mt-4 font-dm text-[14px] leading-[1.8] text-[#475467]">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
