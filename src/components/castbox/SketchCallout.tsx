import { cn } from "@/lib/utils";

/**
 * The hand-drawn callout box used for the survey conclusion — a light card
 * with a doubled, slightly-rotated outline standing in for the sketch stroke.
 */
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
    <div className={cn("relative px-2 py-2", className)}>
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl border border-[#C2C9D6] bg-[#FBFBFD]"
      />
      <span
        aria-hidden
        className="absolute -inset-[5px] rotate-[0.25deg] rounded-2xl border border-[#C2C9D6]/60"
      />
      <div className="relative flex flex-col items-center gap-3 px-6 py-8 text-center">
        {emoji && (
          <span aria-hidden className="text-[26px] leading-none">
            {emoji}
          </span>
        )}
        <p className="text-balance font-dm text-[14px] leading-[1.8] text-[#1A2432] md:text-[15px]">
          {children}
        </p>
      </div>
    </div>
  );
}

/**
 * Rounded speech bubble used for interview and feedback quotes. `tail` picks
 * which bottom corner the pointer sits on.
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
      <span
        aria-hidden
        className="absolute inset-0 rounded-[28px] bg-[#F2F4F7]"
      />
      <span
        aria-hidden
        className="absolute -inset-[4px] rotate-[0.4deg] rounded-[30px] border border-[#E4E7EC]"
      />
      <blockquote className="relative px-7 py-6">
        <span
          aria-hidden
          className="block text-left font-serif text-[20px] leading-none text-[#98A2B3]"
        >
          “
        </span>
        <p className="mt-1 text-center font-dm text-[13px] leading-[1.8] text-[#1A2432] md:text-[14px]">
          {children}
        </p>
        <span
          aria-hidden
          className="block text-right font-serif text-[20px] leading-none text-[#98A2B3]"
        >
          ”
        </span>
      </blockquote>
    </figure>
  );
}
