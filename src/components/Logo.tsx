import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {/* F mark — gradient squircle + stroke-based F */}
      <span
        className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden"
        style={{
          borderRadius: "28%",
          background: "linear-gradient(135deg, #7B6BF0 0%, #F97BAA 55%, #FFB060 100%)",
          boxShadow: "0 6px 14px -6px rgba(139,123,255,0.5), 0 2px 4px -2px rgba(0,0,0,0.1)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top arm + vertical stem */}
          <path
            d="M 20,5 L 5,5 L 5,19"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Crossbar */}
          <path
            d="M 5,12 L 16,12"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "var(--font-handwriting), cursive",
          fontSize: "20px",
          fontWeight: 700,
          WebkitTextStroke: "0.2px currentColor",
          lineHeight: 1.15,
          letterSpacing: "0.01em",
        }}
        className="text-fg"
      >
        <span style={{ fontSize: "21px" }}>F</span>arnoosh{" "}
        <span style={{ fontSize: "21px" }}>B</span>agheri
      </span>
    </span>
  );
}
