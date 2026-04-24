"use client";

import { motion, useReducedMotion } from "framer-motion";

type Shape = {
  kind: "circle" | "ring" | "blob" | "asterisk" | "square";
  className: string;
  size: number;
  duration: number;
  delay: number;
  drift: { x: number; y: number };
};

const shapes: Shape[] = [
  {
    kind: "ring",
    className: "left-[6%] top-[18%] text-accent/40",
    size: 120,
    duration: 14,
    delay: 0,
    drift: { x: 12, y: -10 },
  },
  {
    kind: "blob",
    className: "right-[8%] top-[30%] text-accent/15",
    size: 220,
    duration: 18,
    delay: 1.2,
    drift: { x: -16, y: 14 },
  },
  {
    kind: "asterisk",
    className: "left-[14%] bottom-[18%] text-fg/40",
    size: 36,
    duration: 9,
    delay: 0.6,
    drift: { x: 8, y: -8 },
  },
  {
    kind: "square",
    className: "right-[12%] bottom-[22%] text-fg-muted/40",
    size: 28,
    duration: 12,
    delay: 1.8,
    drift: { x: -10, y: 10 },
  },
  {
    kind: "circle",
    className: "left-[42%] top-[8%] text-accent/30",
    size: 14,
    duration: 7,
    delay: 0.3,
    drift: { x: 6, y: 12 },
  },
];

function ShapeSVG({ kind, size }: { kind: Shape["kind"]; size: number }) {
  switch (kind) {
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="12" />
        </svg>
      );
    case "ring":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case "blob":
      return (
        <svg width={size} height={size} viewBox="0 0 200 200" fill="currentColor">
          <path d="M44.6 -56.7C58.5 -47 71.6 -34.7 75.4 -19.7C79.2 -4.6 73.7 13.3 64.7 28.6C55.7 43.9 43.2 56.6 28 63.3C12.8 70 -5.1 70.7 -22.4 65.7C-39.6 60.6 -56.2 49.9 -65.4 34.7C-74.5 19.5 -76.2 -0.2 -71.1 -17.3C-66 -34.4 -54 -48.9 -39.5 -58.7C-24.9 -68.5 -7.7 -73.6 6.6 -71.7C20.9 -69.7 30.7 -66.4 44.6 -56.7Z" transform="translate(100 100)" />
        </svg>
      );
    case "asterisk":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 2v20M4.5 4.5l15 15M2 12h20M19.5 4.5l-15 15" />
        </svg>
      );
    case "square":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <rect x="2" y="2" width="20" height="20" />
        </svg>
      );
  }
}

export function FloatingShapes() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.className}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            reduce
              ? { opacity: 1, scale: 1 }
              : {
                  opacity: 1,
                  scale: 1,
                  x: [0, s.drift.x, 0, -s.drift.x, 0],
                  y: [0, s.drift.y, 0, -s.drift.y, 0],
                  rotate: s.kind === "asterisk" ? [0, 360] : [0, 8, 0, -8, 0],
                }
          }
          transition={{
            opacity: { duration: 1.2, delay: s.delay },
            scale: { duration: 1.2, delay: s.delay, ease: [0.16, 1, 0.3, 1] },
            x: { duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" },
            y: {
              duration: s.duration * 0.85,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: s.kind === "asterisk" ? s.duration * 2 : s.duration * 1.4,
              delay: s.delay,
              repeat: Infinity,
              ease: s.kind === "asterisk" ? "linear" : "easeInOut",
            },
          }}
        >
          <ShapeSVG kind={s.kind} size={s.size} />
        </motion.div>
      ))}
    </div>
  );
}
