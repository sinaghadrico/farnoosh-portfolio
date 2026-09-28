import { Figure } from "@/components/google-maps/Figure";

/**
 * Section 1 — title + hero collage.
 *
 * In Figma the hero is one 1280×509 band with a soft green → cream → blue
 * gradient, the copy on the left and a collage of eight screens on the right
 * that is clipped by the band. The gradient is rebuilt in CSS (so the heading
 * stays real text) and only the collage is an export.
 */
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient band — sampled from the Figma render. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[#E3EBD8]"
        style={{
          backgroundImage: [
            "radial-gradient(120% 90% at 8% 0%, #CFE8C6 0%, rgba(207,232,198,0) 60%)",
            "radial-gradient(90% 80% at 38% 108%, #FBE6D2 0%, rgba(251,230,210,0) 65%)",
            "radial-gradient(70% 90% at 100% 105%, #B3D5FA 0%, rgba(179,213,250,0) 70%)",
          ].join(","),
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-5 pb-10 pt-28 sm:px-10 md:flex-row md:items-center md:gap-6 md:px-[72px] md:pb-0 md:pr-0 md:pt-[120px]">
        <div className="flex flex-col gap-5 md:w-[52%] md:shrink-0 md:pb-[72px]">
          <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">
            Google Maps Case Study by{" "}
            <a
              href="https://www.linkedin.com/in/farnoosh-bagheri/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-bold text-[#1A2432] underline decoration-solid underline-offset-2"
            >
              Farnoosh Bagheri
            </a>
          </p>

          <h1 className="font-dm text-[22px] font-bold leading-[1.5] text-[#1A2432] sm:text-[24px] md:leading-[1.8]">
            Improving navigation trust in unfamiliar areas for tourists on
            Google Maps through personalized directions, visual clarity, and
            real-time updates
          </h1>

          <p className="font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]">
            A UX case study exploring the key reasons behind the challenges
            Google Maps users face when navigating new cities, and how
            simplification of layout, enhancing visual hierarchy, and providing
            instant feedback improve travel experiences and reduce reliance on
            third-party apps.
          </p>
        </div>

        {/* Collage — clipped by the band in Figma, so it is pinned to the
            bottom and allowed to overflow. */}
        <div className="-mb-10 md:mb-0 md:min-w-0 md:flex-1 md:self-end">
          <Figure
            name="heroCollage"
            priority
            className="md:max-h-[509px] md:w-auto"
            sizes="(min-width: 1280px) 566px, (min-width: 768px) 45vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
