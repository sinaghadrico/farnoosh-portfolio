import { Figure } from "@/components/google-maps/Figure";
import { Body, Section } from "@/components/google-maps/primitives";

/** Section 3 — "My Role". */
export function MyRoleSection() {
  return (
    <Section>
      <div className="flex items-center gap-4">
        <Figure
          name="roleAvatar"
          compact
          sizes="48px"
          className="size-[48px] shrink-0 rounded-full"
        />
        <h2 className="font-dm text-[20px] font-bold leading-[1.5] text-[#1A2432] md:text-[24px]">
          My Role
        </h2>
      </div>

      <Body className="mt-4">
        I contributed to the overall design process and oversaw aspects related
        to product scoping, Ideation and Visual Design.
      </Body>
      <Body className="mt-1">
        Additionally, I conducted user research, facilitated co-workshops, and
        contributed to synthesizing research findings to produce viable ideas.
      </Body>
    </Section>
  );
}
