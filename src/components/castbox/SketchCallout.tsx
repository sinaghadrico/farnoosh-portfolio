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
 * Quote used for interview, feedback and iteration takeaways. Figma draws it
 * three ways, picked with `variant`:
 * - "brush" (interviews): a rough paint-brush swatch with two pencil arcs;
 * - "speech" (user feedback): a hand-drawn speech-bubble outline;
 * - "plain" (design iteration): just the quote marks around the text.
 * The swatch and outline are stretched SVGs so they hold at any size.
 */
export function QuoteBubble({
  children,
  className,
  variant = "brush",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "brush" | "speech" | "plain";
}) {
  return (
    <figure className={cn("relative", className)}>
      {variant === "brush" && (
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
      )}
      {variant === "speech" && (
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          {/* Two slightly offset strokes give the sketched, doubled line. */}
          <path
            d="M24 88 Q4 80 3 50 Q4 8 50 5 Q96 8 97 48 Q96 88 50 90 Q38 90 30 88 Q24 96 12 99 Q22 93 24 88 Z"
            fill="none"
            stroke="#D0D5DD"
            strokeWidth="2.5"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M23 86 Q6 78 5 49 Q7 10 51 7 Q94 10 95 49 Q93 86 49 88 Q37 89 29 86"
            fill="none"
            stroke="#E4E7EC"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
      <blockquote
        className={cn(
          "relative",
          variant === "brush" && "px-10 pb-6 md:px-14",
          variant === "speech" && "px-12 pb-12 pt-8 md:px-14",
          variant === "plain" && "px-2"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "block text-left font-serif font-bold leading-none",
            variant === "plain"
              ? "text-[24px] text-[#475467]"
              : "pl-[12%] text-[36px] text-[#101828]",
            variant === "speech" && "text-[#475467]"
          )}
        >
          “
        </span>
        <p className="mt-2 text-balance text-center font-dm text-[13px] leading-[1.8] text-[#1A2432] md:text-[14px]">
          {children}
        </p>
        <span
          aria-hidden
          className={cn(
            "block text-right font-serif font-bold leading-none",
            variant === "plain"
              ? "text-[24px] text-[#475467]"
              : "pr-[12%] text-[36px] text-[#101828]",
            variant === "speech" && "text-[#475467]"
          )}
        >
          ”
        </span>
      </blockquote>
    </figure>
  );
}
