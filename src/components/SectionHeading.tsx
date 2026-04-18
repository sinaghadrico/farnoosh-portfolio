import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type Props = {
  number?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-12 md:items-end",
        align === "center" && "text-center",
        className
      )}
    >
      <Reveal as="div" className="md:col-span-5">
        <p className="label flex items-center gap-3">
          {number && <span className="text-fg-subtle">{number}</span>}
          <span className="h-px w-8 bg-fg-subtle/40" aria-hidden />
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <Reveal as="div" className="md:col-span-7" delay={0.05}>
        <h2 className="text-display-lg text-balance">{title}</h2>
        {description && (
          <p className="mt-5 max-w-prose text-base text-fg-muted md:text-lg">
            {description}
          </p>
        )}
      </Reveal>
    </div>
  );
}
