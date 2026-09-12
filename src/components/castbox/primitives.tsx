import { cn } from "@/lib/utils";

/**
 * Shared primitives for the Castbox case study.
 *
 * The Figma file (My Case Studies → Castbox Case Study) is a fixed 1280px
 * desktop layout: every section is 1280 wide with 72px padding, so the content
 * column is 1136px. Here that becomes a max-w-[1136px] column with padding that
 * relaxes on small screens.
 *
 * The design is light-only, so these components pin their own colours from the
 * Figma palette instead of using the site's themed tokens.
 */

export function Section({
  className,
  children,
  ...rest
}: React.ComponentProps<"section">) {
  return (
    <section
      {...rest}
      className={cn(
        "w-full bg-[#FCFCFC] px-5 py-10 sm:px-10 md:px-[72px] md:py-[72px]",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-[1136px] flex-col">
        {children}
      </div>
    </section>
  );
}

/** Small uppercase-ish label that sits above each section heading. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-dm text-[12px] leading-[1.8] text-[#98A2B3] md:text-[13px]">
      {children}
    </p>
  );
}

/** Section heading — 24px bold #1A2432 in Figma. */
export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-dm text-[20px] font-bold leading-[1.5] text-[#1A2432] md:text-[24px]",
        className
      )}
    >
      {children}
    </h2>
  );
}

/** Body copy — 14px #475467, line-height 1.8. */
export function Body({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-dm text-[14px] leading-[1.8] text-[#475467]",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Numbered step badge used by the "Changes to the … section" blocks. */
export function StepBadge({ n }: { n: number }) {
  return (
    <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#1A2432] font-dm text-[11px] font-bold text-white">
      {n}
    </span>
  );
}
