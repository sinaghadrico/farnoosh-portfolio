import { Figure } from "@/components/google-maps/Figure";

/**
 * Section 1 — title + hero devices (Figma node 18:589).
 *
 * In Figma the doodle backdrop and the two phone mockups sit in one 1280×840
 * band that bleeds past the 1136px content column, so the whole band is
 * exported as a single image and given the full section width.
 */
export function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-[#FCFCFC] px-5 pb-10 pt-28 sm:px-10 md:px-[72px] md:pb-[72px] md:pt-[120px]">
      <div className="mx-auto flex w-full max-w-[1136px] flex-col gap-5">
        <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">
          Google Maps Case Study By{" "}
          <a
            href="https://www.linkedin.com/in/farnoosh-bagheri/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold underline decoration-solid underline-offset-2"
          >
            Farnoosh Bagheri
          </a>
        </p>

        <h1 className="font-dm text-[22px] font-bold leading-[1.5] text-[#1A2432] sm:text-[24px] md:leading-[1.8]">
          Improving navigation trust in unfamiliar areas for tourists on Google
          Maps through personalized directions, visual clarity, and real-time
          updates
        </h1>

        <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
          A UX case study exploring the key reasons behind the challenges Google
          Maps users face when navigating new cities, and how simplification of
          layout, enhancing visual hierarchy, and providing instant feedback
          improve travel experiences and reduce reliance on third-party apps.
        </p>
      </div>

      {/* Hero band — 1280×840 in Figma, wider than the content column. */}
      <div className="mx-auto mt-6 w-full max-w-[1280px] md:mt-10">
        <Figure
          name="heroDevices"
          priority
          sizes="(min-width: 1280px) 1280px, 100vw"
        />
      </div>
    </section>
  );
}
