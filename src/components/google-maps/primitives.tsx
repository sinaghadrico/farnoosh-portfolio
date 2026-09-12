import { cn } from "@/lib/utils";

/**
 * Shared primitives for the Google Maps case study.
 *
 * The Figma file ("All Sections", 1280×21104) is a fixed 1280px desktop layout:
 * every section is 1280 wide with 72px padding, so the content column is
 * 1136px. Here that becomes a max-w-[1136px] column with padding that relaxes
 * on small screens.
 *
 * The design is light-only, so these components pin their own colours from the
 * Figma palette instead of using the site's themed tokens.
 */

/** Figma palette, lifted straight off the frames. */
export const gm = {
  bg: "#FCFCFC",
  heading: "#1A2432",
  body: "#475467",
  muted: "#667085",
  subtle: "#98A2B3",
  hairline: "#EAECF0",
  blue: "#1A73E8",
  blueBright: "#4285F4",
  green: "#34A853",
  yellow: "#FBBC04",
  red: "#EA4335",
  orange: "#FF8D28",
} as const;

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

/** Small grey label that sits above each section heading (14px #667085). */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-dm text-[13px] leading-[1.8] text-[#667085] md:text-[14px]",
        className
      )}
    >
      {children}
    </p>
  );
}

/** Section heading — 24px bold #1A2432 in Figma. */
export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-dm text-[20px] font-bold leading-[1.5] text-[#1A2432] md:text-[24px] md:leading-[1.8]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/** Intro copy under a heading — 16px #475467, line-height 1.8. */
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
        "font-dm text-[15px] leading-[1.8] text-[#475467] md:text-[16px]",
        className
      )}
    >
      {children}
    </p>
  );
}

/**
 * Inline emphasis. Figma uses two flavours: bold dark text inside a paragraph,
 * and a blue lead-in on the little "Findings …" / "Key insights …" captions.
 */
export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-bold text-[#1A2432]">{children}</strong>;
}

export function Blue({ children }: { children: React.ReactNode }) {
  return <span className="font-bold text-[#1A73E8]">{children}</span>;
}

/** The 16px caption that introduces a grouped block of findings. */
export function BlockCaption({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-dm text-[15px] leading-[1.5] text-[#1A2432] md:text-[16px]",
        className
      )}
    >
      {children}
    </p>
  );
}

/** The pale grey tray several sections use to hold their artwork. */
export function ImageZone({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[10px] bg-[#FAFAFB] px-4 py-6 sm:px-6 md:px-8 md:py-10",
        className
      )}
    >
      {children}
    </div>
  );
}
