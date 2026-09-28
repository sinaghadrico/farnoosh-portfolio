import { cn } from "@/lib/utils";

/**
 * Wrapper for artwork that is only legible above a certain width — the
 * prioritisation matrix and the annotated UI compositions.
 *
 * Below `minWidth` the figure keeps its real size and the container scrolls
 * sideways instead of squashing it into illegibility; the bleed lets that
 * scroll region run edge to edge on small screens, and a hint tells the reader
 * it can be swiped. At or above the breakpoint everything reverts to a normal
 * block that fits the content column.
 */
export function WideMedia({
  children,
  minWidth,
  className,
  hint = "Swipe to see the full image",
}: {
  children: React.ReactNode;
  /** Intrinsic width the artwork needs to stay readable, in px. */
  minWidth: number;
  className?: string;
  hint?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p className="font-dm text-[12px] leading-[1.6] text-[#98A2B3] lg:hidden">
        {hint} →
      </p>
      <div className="-mx-5 overflow-x-auto overscroll-x-contain px-5 sm:-mx-10 sm:px-10 lg:mx-0 lg:overflow-visible lg:px-0">
        <div style={{ minWidth }} className="lg:!min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
