import { Section, Eyebrow, Heading, Body } from "@/components/castbox/primitives";

const PEW_BACKGROUND =
  "https://www.pewresearch.org/journalism/2023/04/18/how-americans-use-and-engage-with-podcasts/";
const REUTERS_AGE =
  "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2023/news-podcasts-who-is-listening-what-formats-are-working";
const PEW_AGE_GROUPS =
  "https://www.pewresearch.org/journalism/2023/04/18/podcast-use-among-different-age-groups/";

function SourceLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="whitespace-nowrap font-dm text-[14px] leading-[1.8] text-[#287AED] hover:underline"
    >
      Link
    </a>
  );
}

/**
 * Tinted number tile. Everything sits on one baseline with `leading-none`, so
 * the big figure and its small unit line up instead of floating on separate
 * line boxes.
 */
function StatBadge({
  label,
  tint,
  labelColor,
  children,
}: {
  label?: string;
  tint: string;
  labelColor?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex h-[96px] w-[132px] shrink-0 flex-col items-center justify-center gap-2.5 rounded-xl"
      style={{ backgroundColor: tint }}
    >
      {label && (
        <span
          className="font-dm text-[11px] font-bold uppercase leading-none tracking-[0.12em]"
          style={{ color: labelColor }}
        >
          {label}
        </span>
      )}
      <span className="flex items-baseline gap-1 font-dm font-bold leading-none tabular-nums">
        {children}
      </span>
    </div>
  );
}

/** White stat card with a rounded tinted badge on the left. */
function StatRow({
  badge,
  title,
  children,
  href,
}: {
  badge: React.ReactNode;
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-start gap-5 rounded-lg border border-[#EAECF0] bg-white p-5 sm:flex-row sm:items-center sm:gap-7 sm:p-6">
      {badge}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <p className="font-dm text-[16px] font-bold leading-[1.4] text-[#1A2432]">
          {title}
        </p>
        <p className="font-dm text-[14px] leading-[1.7] text-[#667085]">
          {children} <SourceLink href={href} />
        </p>
      </div>
    </div>
  );
}

/** Section 5 — "Problem Discovery" with the 81% / age / 65% stats (node 1:1860). */
export function ProblemDiscoverySection() {
  return (
    <Section className="border-b border-[#BAC0CD]">
      <div className="flex flex-col gap-5">
        <Eyebrow>Problem Discovery</Eyebrow>
        <div className="flex flex-col gap-1">
          <Heading>
            Valuable feedback that could make a change, but is often missed
          </Heading>
          <Body className="text-[15px] md:text-[16px]">
            On Castbox, users often leave the application without sharing
            comments or feedback. Researches revealed that they have limited ways
            for in-depth feedback or interacting beyond basic ratings, which has
            contributed to a decline in community engagement.
          </Body>
        </div>
      </div>

      <div className="flex flex-col gap-6 py-6 xl:flex-row xl:items-stretch">
        {/* 81% card */}
        <div className="flex flex-col items-center justify-center gap-8 rounded-lg border border-[#EAECF0] bg-white p-8 xl:h-[292px] xl:shrink-0 xl:whitespace-nowrap">
          <p className="flex items-baseline justify-center gap-1 font-dm font-bold leading-none tabular-nums text-[#287AED]">
            <span className="text-[56px] tracking-[-0.02em] md:text-[64px]">81</span>
            <span className="text-[28px] text-[#287AED]/40 md:text-[32px]">%</span>
          </p>
          <div className="flex flex-col items-center text-center">
            <p className="font-dm text-[16px] font-bold leading-[1.8] text-[#1A2432]">
              Background Listening
            </p>
            <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">
              Use podcasts as background audio while doing other tasks
            </p>
            <SourceLink href={PEW_BACKGROUND} />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <StatRow
            title="Background Listening"
            href={REUTERS_AGE}
            badge={
              <StatBadge label="Age" tint="rgba(45,193,186,0.1)" labelColor="#5CC9C4">
                <span className="text-[30px] tracking-[-0.02em] text-[#1FA9A2]">18</span>
                <span className="px-0.5 text-[20px] font-normal text-[#1FA9A2]/50">–</span>
                <span className="text-[30px] tracking-[-0.02em] text-[#1FA9A2]">55</span>
                <span className="text-[18px] text-[#1FA9A2]/70">+</span>
              </StatBadge>
            }
          >
            people of all ages find podcasts a convenient format when commuting,
            walking the dog, in the gym, or doing mundane tasks at home such as
            cleaning.
          </StatRow>

          <StatRow
            title="Followed the host’s social media account"
            href={PEW_AGE_GROUPS}
            badge={
              <StatBadge tint="#FFF0E6">
                <span className="text-[40px] tracking-[-0.02em] text-[#FF6200]">65</span>
                <span className="text-[20px] text-[#FF6200]/45">%</span>
              </StatBadge>
            }
          >
            65% of podcast listeners between 18-29 years Followed the social media
            account of a podcast or host, and 22% of them joining a online
            discussion group or social media group dedicated to a specific
            podcast.
          </StatRow>
        </div>
      </div>
    </Section>
  );
}
