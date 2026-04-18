import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-sm",
};

const variants: Record<Variant, string> = {
  primary:
    "border border-fg bg-fg text-bg hover:bg-bg hover:text-fg",
  secondary:
    "border border-border text-fg hover:border-fg hover:bg-fg hover:text-bg",
  ghost:
    "border border-transparent text-fg hover:bg-fg/[0.06]",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children">;

const baseClasses =
  "group inline-flex items-center gap-2 rounded-full transition-all duration-300 ease-out-expo disabled:pointer-events-none disabled:opacity-50";

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  withArrow = true,
  className,
  href,
  external,
  ...rest
}: AnchorProps) {
  const classes = cn(baseClasses, sizes[size], variants[variant], className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          size={14}
          className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {inner}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          size={14}
          className="transition-transform duration-500 ease-out-expo group-hover:rotate-45"
        />
      )}
    </button>
  );
}
