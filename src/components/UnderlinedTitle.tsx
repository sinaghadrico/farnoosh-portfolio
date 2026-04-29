import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Pre-rendered icon (e.g. <Briefcase size={16} />) — kept as ReactNode so the prop is serializable. */
  icon?: ReactNode;
  id?: string;
  className?: string;
};

/**
 * Section title — sans-serif, uppercase, tracked-out, with a small line icon.
 */
export function UnderlinedTitle({ children, icon, id, className }: Props) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      {icon && (
        <span aria-hidden className="text-2xl leading-none md:text-3xl">
          {icon}
        </span>
      )}
      <h2
        id={id}
        className="font-sans text-lg font-semibold uppercase tracking-[0.18em] text-fg md:text-xl"
      >
        {children}
      </h2>
    </div>
  );
}
