import Image from "next/image";
import { Section, Body } from "@/components/castbox/primitives";

/** Section 2 — "My Role" (Figma node 1:409). */
export function RoleSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-1">
        <div className="flex h-[43px] items-center gap-3">
          <span className="relative size-10 shrink-0 overflow-hidden rounded-full border-[2.5px] border-white bg-[#DCDFE5]">
            <Image
              src="/projects/castbox/farnoosh-avatar.webp"
              alt="Farnoosh Bagheri"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <h2 className="font-dm text-[20px] font-bold leading-[1.8] text-[#1A2432] md:text-[24px]">
            My Role
          </h2>
        </div>
        <Body className="text-[15px] md:text-[16px]">
          I contributed to the overall design process and oversaw aspects related
          to product scoping, Ideation, sketching, and UI, rapid prototyping, and
          user feedback.
        </Body>
        <Body className="text-[15px] md:text-[16px]">
          Additionally, I conducted user research, facilitated co-workshops, and
          contributed in synthesizing research findings to produce viable ideas.
        </Body>
      </div>
    </Section>
  );
}
