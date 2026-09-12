import Image from "next/image";
import { Section } from "@/components/castbox/primitives";

/**
 * Section 4 — the "About Castbox" banner card (Figma node 1:463).
 *
 * In Figma this is a 1136×303 white card, radius 8, with the app screenshots
 * bleeding off the right edge. The screenshots are exported artwork; the copy
 * stays real text so it remains selectable and indexable.
 */
export function AboutCastboxSection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="relative overflow-hidden rounded-lg bg-white">
        <div className="flex flex-col gap-6 p-6 pr-6 md:h-[303px] md:pb-8 md:pl-8 md:pr-[400px] md:pt-[55px]">
          <Image
            src="/projects/castbox/castbox-logo.webp"
            alt="Castbox"
            width={147}
            height={56}
            className="h-[44px] w-auto self-start md:h-[56px]"
          />

          <p className="font-dm text-[14px] leading-[1.8] text-[#1A2432] md:text-[16px]">
            Castbox is a podcast player app with a wide range of categories for
            podcast lovers. I worked with another UX/UI designer improving the
            experience for users who left the application without sharing their
            comments through community.
          </p>

          <p className="font-dm text-[13px] leading-[1.8] text-[#98A2B3] md:text-[14px]">
            We did our case study on the Castbox version (11.21.1-250312118) on
            the Android operating system.
          </p>
        </div>

        {/* Screenshots — clipped by the card on the right, as in Figma. */}
        <div className="relative h-[180px] w-full md:absolute md:bottom-0 md:right-[78px] md:h-[229px] md:w-[243px]">
          <Image
            src="/projects/castbox/about-shots.webp"
            alt="Two phones showing the Castbox player and discover screens"
            fill
            sizes="(min-width: 768px) 243px, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </Section>
  );
}
