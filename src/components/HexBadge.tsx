import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Numbered step marker shared by the case studies: a pointy-top hexagon with
 * softened corners and a navy gradient. The corners are rounded by stroking
 * the hexagon with its own gradient and a round line-join.
 */
export function HexBadge({ n, className }: { n: number; className?: string }) {
  const id = useId();
  return (
    <span
      aria-hidden
      className={cn(
        "relative flex h-[34px] w-[31px] shrink-0 items-center justify-center md:h-[42px] md:w-[38px]",
        className
      )}
    >
      <svg viewBox="0 0 100 112" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0B1630" />
            <stop offset="100%" stopColor="#2C4E92" />
          </linearGradient>
        </defs>
        <polygon
          points="50,11 89,33.5 89,78.5 50,101 11,78.5 11,33.5"
          fill={`url(#${id})`}
          stroke={`url(#${id})`}
          strokeWidth="20"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative font-dm text-[13px] font-bold leading-none text-white md:text-[15px]">
        {n}
      </span>
    </span>
  );
}
