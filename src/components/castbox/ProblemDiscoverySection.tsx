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
    <div className="flex flex-1 flex-col items-start gap-4 rounded-lg border border-[#EAECF0] bg-white p-6 sm:flex-row sm:items-center sm:gap-8 sm:py-8 sm:pl-[25px] sm:pr-8">
      {badge}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="font-dm text-[16px] font-bold leading-[1.8] text-[#1A2432]">
          {title}
        </p>
        <p className="font-dm text-[14px] leading-[1.8] text-[#667085]">
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

      <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-stretch">
        {/* 81% card */}
        <div className="flex flex-col items-center justify-center gap-8 rounded-lg border border-[#EAECF0] bg-white p-8 lg:h-[292px] lg:shrink-0 lg:whitespace-nowrap">
          <p className="flex items-end justify-center gap-1 font-dm font-bold leading-[1.6] text-[#287AED]">
            <span className="text-[56px] md:text-[64px]">81</span>
            <span className="text-[32px] opacity-20 md:text-[36px]">%</span>
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
              <div className="flex h-[84px] w-[124px] shrink-0 flex-col items-center justify-center gap-5 rounded-lg bg-[rgba(45,193,186,0.1)] px-2 py-6 text-center leading-[1.6]">
                <span className="font-dm text-[20px] tracking-[-0.22px] text-[#79D7D3]">
                  Age
                </span>
                <span className="flex items-end gap-1 text-[#2DC1BA]">
                  <span className="font-dm text-[24px] font-bold tracking-[-0.264px]">
                    18
                  </span>
                  <span className="font-dm text-[20px] tracking-[-0.22px] opacity-60">
                    ~
                  </span>
                  <span className="font-dm text-[24px] font-bold tracking-[-0.264px]">
                    55
                  </span>
                  <span className="font-dm text-[14px] font-bold tracking-[-0.154px]">
                    +
                  </span>
                </span>
              </div>
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
              <div className="flex h-[84px] w-[124px] shrink-0 items-center justify-center rounded-lg bg-[#FFF0E6] px-2 py-6">
                <span className="flex items-end gap-1 leading-[1.6]">
                  <span className="font-dm text-[32px] font-bold tracking-[-0.352px] text-[#FF6200]">
                    65
                  </span>
                  <span className="font-dm text-[16px] font-bold tracking-[-0.176px] text-[#FFB07F]">
                    %
                  </span>
                </span>
              </div>
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
