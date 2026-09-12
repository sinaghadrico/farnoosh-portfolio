import Image from "next/image";

/**
 * Section 1 — title + hero shot (Figma node 1:115).
 *
 * The phone mockups sit on top of a full-bleed pink wave that overflows the
 * 1280px frame in Figma (the SVG is 1808px wide, centred). Both are absolutely
 * positioned inside a fixed-ratio band so the composition holds at any width.
 */
export function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-[#FCFCFC] px-5 pb-10 pt-28 sm:px-10 md:px-[72px] md:pb-[72px] md:pt-[120px]">
      <div className="mx-auto flex w-full max-w-[1136px] flex-col gap-5">
        <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">
          Castbox Case Study by{" "}
          <a
            href="https://www.linkedin.com/in/farnoosh-bagheri/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold underline decoration-solid underline-offset-2"
          >
            Farnoosh Bagheri
          </a>
        </p>

        {/* Hero image band — 1280×624 in Figma (444 tall + 80/100 padding). */}
        <div className="relative isolate w-full pb-[8%] pt-[6%]">
          {/* Wave: bleeds past the content column, mirroring the Figma overflow. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[141.3%] -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/projects/castbox/hero-wave.svg"
              alt=""
              width={1809}
              height={444}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* drop-shadow (not box-shadow) so the shadow follows the cut-out
              phones the way Figma's frame shadow does. */}
          <div className="relative mx-auto aspect-[800/444] w-full max-w-[800px] [filter:drop-shadow(0_24px_28px_rgba(0,0,0,0.18))]">
            <Image
              src="/projects/castbox/hero-shot.webp"
              alt="Castbox app screens shown across three phones"
              fill
              sizes="(min-width: 1024px) 800px, 100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <h1 className="font-dm text-[24px] font-bold leading-[1.5] text-[#1A2432] sm:text-[28px] md:text-[32px] md:leading-[1.8]">
          Enhancing Community Engagement on Castbox
          <br className="hidden sm:block" />{" "}
          by Redesigning the Information Architecture
        </h1>

        <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
          A UX project to discover why the listeners face challenges interacting
          with the community section, and how layout clarification and organizing
          features enhance engagement.
        </p>
      </div>
    </section>
  );
}
