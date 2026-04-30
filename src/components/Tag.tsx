import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "muted";
  className?: string;
};

export function Tag({ children, variant = "default", className }: Props) {
  return (
    <span
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]",
        variant === "default" && "bg-fg/[0.06] text-fg",
        variant === "outline" && "border border-accent/50 text-accent font-semibold",
        variant === "muted" && "text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
