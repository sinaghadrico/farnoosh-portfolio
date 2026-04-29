import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Two-letter monogram for Farnoosh Bagheri.
 *
 * Soft squircle filled with a warm sunset gradient (lavender → coral → peach),
 * with white lowercase "fb" set in Fraunces italic inside. A subtle inner
 * highlight gives it depth, like a polished pebble.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden",
        className
      )}
      style={{
        borderRadius: "32%",
        background:
          "linear-gradient(135deg, #8B7BFF 0%, #FF8E9A 55%, #FFB778 100%)",
        boxShadow:
          "0 6px 14px -6px rgba(139, 123, 255, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Soft top highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-1 top-[2px] h-[35%] rounded-[24%] opacity-50"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Monogram */}
      <span
        className="relative font-serif italic leading-none text-white"
        style={{
          fontVariationSettings: '"opsz" 144, "SOFT" 100',
          fontSize: "19px",
          fontWeight: 500,
          letterSpacing: "-0.07em",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.12)",
        }}
      >
        fb
      </span>
    </span>
  );
}
