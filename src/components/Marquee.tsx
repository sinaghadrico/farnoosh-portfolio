import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
  separator?: React.ReactNode;
};

export function Marquee({ items, className, separator }: Props) {
  const sep =
    separator ?? (
      <span className="mx-8 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" aria-hidden />
    );

  return (
    <div
      className={cn(
        "flex w-full overflow-hidden whitespace-nowrap py-6",
        "[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]",
        className
      )}
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee items-center text-base tracking-tight md:text-lg" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-fg">{item}</span>
            {sep}
          </span>
        ))}
      </div>
    </div>
  );
}
