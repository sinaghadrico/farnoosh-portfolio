"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** The width the content is laid out at — its desktop width. */
  width: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Lays its children out at a fixed desktop `width` and scales the whole block
 * down to fit narrower containers, so phones and tablets see a smaller copy of
 * the desktop layout instead of a reflowed or sideways-scrolling one. It never
 * scales up.
 */
export function ScaleToFit({ width, className, children }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ scale: number; height: number } | null>(
    null
  );

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const measure = () => {
      const scale = Math.min(1, outer.clientWidth / width);
      setBox({ scale, height: inner.offsetHeight * scale });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={outerRef}
      className={cn("w-full overflow-hidden", className)}
      // Hold the scaled height so the content below doesn't jump.
      style={box ? { height: box.height } : undefined}
    >
      <div
        ref={innerRef}
        className="origin-top-left"
        style={{
          width,
          transform: box ? `scale(${box.scale})` : undefined,
          // Until the first measurement we don't know the scale; keep the
          // unscaled copy from flashing on small screens.
          visibility: box ? undefined : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
