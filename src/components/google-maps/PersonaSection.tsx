import { MapPin, Map } from "lucide-react";
import { Figure } from "@/components/google-maps/Figure";
import {
  Body,
  Eyebrow,
  Heading,
  Section,
  Strong,
} from "@/components/google-maps/primitives";

/** Section 6 — Persona profile (Figma node 18:2506). */

export function PersonaSection() {
  return (
    <Section>
      <Eyebrow>Persona profile</Eyebrow>
      <Heading className="mt-4">Staying close to our users</Heading>
      <Body className="mt-1">
        By analyzing user interviews, we created two key archetypes to keep our
        users top of mind at every step. They’ve been with us throughout the
        project, helping us stay focused on who we’re designing for and making
        sure our decisions truly match their needs and goals.
      </Body>

      <div className="mt-6 overflow-hidden rounded-[16px] md:mt-8">
        <Figure name="personaIllustration" sizes="(min-width: 1180px) 1136px, 100vw" />
      </div>

      <div className="mt-6 grid gap-6 md:mt-8 lg:grid-cols-2">
        {/* The Trip Planner */}
        <article className="flex flex-col gap-8 rounded-[16px] border border-[#EAECF0] bg-white px-6 py-8 md:px-7 md:py-10">
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-2 font-dm text-[22px] font-bold leading-[1.5] text-[#4285F4] md:text-[24px]">
              <MapPin size={24} strokeWidth={2} aria-hidden />
              The Trip Planner
            </h3>
            <p className="font-dm text-[15px] leading-[1.6] text-[#475467] md:text-[16px]">
              She enjoys planning her trips <Strong>in detail</Strong> and having{" "}
              <Strong>accurate</Strong>, <Strong>reliable,</Strong> and{" "}
              <Strong>real-time information</Strong> before traveling. She
              cross-checks multiple sources to avoid <Strong>getting lost</Strong>{" "}
              or disrupting the journey, with a well-structured, focused, and
              optimized approach. She uses multiple types of transportation for
              efficiency and cost savings. Digital tools help her stay{" "}
              <Strong>organized</Strong> with minimal local interaction.
            </p>
          </div>

          <p className="rounded-lg border-l-[3px] border-[#4285F4] bg-[#F7FBFF] px-6 py-5 font-dm text-[15px] leading-[1.6] text-[#475467] md:text-[16px]">
            My goal is to <Strong>stay in control</Strong> about tourist spots
            and public transportation. I use public transit, taxis, and walk and
            I verify information before traveling to ensure a{" "}
            <Strong>safe</Strong> and <Strong>reliable</Strong> trip.
          </p>
        </article>

        {/* The Explorer */}
        <article className="flex flex-col gap-8 rounded-[16px] border border-[#EAECF0] bg-white px-6 py-8 md:px-7 md:py-10">
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-2 font-dm text-[22px] font-bold leading-[1.5] text-[#FF8D28] md:text-[24px]">
              <Map size={24} strokeWidth={2} aria-hidden />
              The Explorer
            </h3>
            <p className="font-dm text-[15px] leading-[1.6] text-[#475467] md:text-[16px]">
              He seeks <Strong>new experiences</Strong> in{" "}
              <Strong>adventurous</Strong> and lesser-known places. He needs
              accurate information with <Strong>clear</Strong>,{" "}
              <Strong>real-time navigation</Strong> to avoid going off-route or
              encountering challenging paths, ensuring his journey is{" "}
              <Strong>fast</Strong> and <Strong>efficient</Strong>. He doesn’t
              want to worry about places being closed or relocated. While cost is
              not a primary concern, he uses alternative apps for effortless
              driving navigation.
            </p>
          </div>

          <p className="rounded-lg border-l-[3px] border-[#FA8054] bg-[#FFFAF7] px-6 py-5 font-dm text-[15px] leading-[1.6] text-[#475467] md:text-[16px]">
            My goal is to explore new cities freely,{" "}
            <Strong>without a fixed plan</Strong> to discover{" "}
            <Strong>nearby attractions</Strong>. I travel by private car,
            bicycle, or on foot in unfamiliar areas and prefer the{" "}
            <Strong>shortest</Strong> and <Strong>fastest routes.</Strong>
          </p>
        </article>
      </div>
    </Section>
  );
}
