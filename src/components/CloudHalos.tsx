"use client";

import { motion, useReducedMotion } from "framer-motion";

type Halo = {
  className: string;
  size: number;
  duration: number;
  delay: number;
  drift: { x: number; y: number };
  opacity: [number, number, number];
};

const halos: Halo[] = [
  {
    // Iris cloud — left, behind headline
    className: "left-[-6%] top-[8%] bg-[radial-gradient(closest-side,rgba(120,108,255,0.55),rgba(120,108,255,0)_70%)]",
    size: 520,
    duration: 22,
    delay: 0,
    drift: { x: 30, y: -20 },
    opacity: [0.55, 0.85, 0.55],
  },
  {
    // Peach / coral cloud — bottom-left under copy
    className: "left-[8%] bottom-[-10%] bg-[radial-gradient(closest-side,rgba(255,170,140,0.5),rgba(255,170,140,0)_70%)]",
    size: 460,
    duration: 26,
    delay: 1.2,
    drift: { x: -22, y: 18 },
    opacity: [0.45, 0.7, 0.45],
  },
  {
    // Sky cloud — middle, behind text gap
    className: "left-[34%] top-[35%] bg-[radial-gradient(closest-side,rgba(140,200,255,0.45),rgba(140,200,255,0)_70%)]",
    size: 380,
    duration: 30,
    delay: 0.6,
    drift: { x: 28, y: 16 },
    opacity: [0.4, 0.6, 0.4],
  },
  {
    // Mint cloud — center bottom
    className: "left-[42%] bottom-[6%] bg-[radial-gradient(closest-side,rgba(140,230,200,0.45),rgba(140,230,200,0)_70%)]",
    size: 340,
    duration: 24,
    delay: 1.8,
    drift: { x: -18, y: -22 },
    opacity: [0.35, 0.6, 0.35],
  },
  {
    // Pink cloud — far right behind portrait
    className: "right-[-4%] top-[40%] bg-[radial-gradient(closest-side,rgba(255,150,210,0.45),rgba(255,150,210,0)_70%)]",
    size: 420,
    duration: 28,
    delay: 0.9,
    drift: { x: -24, y: -18 },
    opacity: [0.4, 0.65, 0.4],
  },
  {
    // Lavender cloud — top right corner
    className: "right-[2%] top-[-6%] bg-[radial-gradient(closest-side,rgba(170,150,255,0.55),rgba(170,150,255,0)_70%)]",
    size: 460,
    duration: 24,
    delay: 0.4,
    drift: { x: -28, y: 22 },
    opacity: [0.45, 0.75, 0.45],
  },
  {
    // Apricot cloud — right under portrait
    className: "right-[6%] bottom-[-8%] bg-[radial-gradient(closest-side,rgba(255,190,120,0.5),rgba(255,190,120,0)_70%)]",
    size: 400,
    duration: 30,
    delay: 1.5,
    drift: { x: 24, y: -20 },
    opacity: [0.4, 0.65, 0.4],
  },
  {
    // Aqua cloud — right middle accent
    className: "right-[18%] top-[18%] bg-[radial-gradient(closest-side,rgba(120,210,230,0.45),rgba(120,210,230,0)_70%)]",
    size: 320,
    duration: 26,
    delay: 2.1,
    drift: { x: -16, y: 20 },
    opacity: [0.35, 0.6, 0.35],
  },
];

export function CloudHalos() {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {halos.map((h, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${h.className}`}
          style={{ width: h.size, height: h.size }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            reduce
              ? { opacity: h.opacity[1], scale: 1 }
              : {
                  opacity: h.opacity,
                  scale: [0.96, 1.06, 0.96],
                  x: [0, h.drift.x, 0, -h.drift.x, 0],
                  y: [0, h.drift.y, 0, -h.drift.y, 0],
                }
          }
          transition={{
            opacity: { duration: h.duration * 0.6, delay: h.delay, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: h.duration * 0.7, delay: h.delay, repeat: Infinity, ease: "easeInOut" },
            x: { duration: h.duration, delay: h.delay, repeat: Infinity, ease: "easeInOut" },
            y: { duration: h.duration * 0.85, delay: h.delay, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}
