import { SketchFrame } from "@/components/SketchFrame";
import { cn } from "@/lib/utils";

/** The hand-drawn callout box used for the survey conclusion. */
export function SketchCallout({
  children,
  emoji,
  className,
}: {
  children: React.ReactNode;
  emoji?: string;
  className?: string;
}) {
  return (
    <SketchFrame
      color="#98A2B3"
      fill="#F9FAFB"
      className={cn("px-2 py-2", className)}
    >
      <div className="flex flex-col items-center gap-3 px-6 py-8 text-center">
        {emoji && (
          <span aria-hidden className="text-[26px] leading-none">
            {emoji}
          </span>
        )}
        <p className="text-balance font-dm text-[14px] leading-[1.8] text-[#1A2432] md:text-[15px]">
          {children}
        </p>
      </div>
    </SketchFrame>
  );
}

/**
 * Quote used for interview and feedback takeaways. In Figma it sits on a
 * rough paint-brush swatch with two pencil arcs and heavy black quote marks;
 * the swatch is one stretched SVG so it holds at any bubble size.
 */
export function QuoteBubble({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 top-[18px] h-[calc(100%-18px)] w-full overflow-visible"
      >
        <path
          d="M4 6 Q22 2 48 4 T97 5 L96 22 Q99 34 95 46 L98 50 Q96 62 97 74 Q99 86 96 96 Q70 99 44 98 T2 96 L4 84 Q1 70 3 58 L1 50 Q4 40 2 28 Q4 16 4 6 Z"
          fill="#F2F4F7"
        />
        <path
          d="M89 4 Q94 10 93 20"
          fill="none"
          stroke="#D0D5DD"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M9 32 Q5 66 22 92"
          fill="none"
          stroke="#D0D5DD"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <blockquote className="relative px-10 pb-6 md:px-14">
        <span
          aria-hidden
          className="block pl-[12%] text-left font-serif text-[36px] font-bold leading-none text-[#101828]"
        >
          “
        </span>
        <p className="mt-2 text-balance text-center font-dm text-[13px] leading-[1.8] text-[#1A2432] md:text-[14px]">
          {children}
        </p>
        <span
          aria-hidden
          className="block pr-[12%] text-right font-serif text-[36px] font-bold leading-none text-[#101828]"
        >
          ”
        </span>
      </blockquote>
    </figure>
  );
}
