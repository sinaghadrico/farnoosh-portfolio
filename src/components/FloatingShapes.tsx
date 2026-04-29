"use client";

import { motion, useReducedMotion } from "framer-motion";

type ToolKind = "figma" | "claude" | "jira" | "analytics";

type Tool = {
  kind: ToolKind;
  className: string;
  size: number;
  duration: number;
  delay: number;
  drift: { x: number; y: number };
};

const tools: Tool[] = [
  {
    kind: "figma",
    className: "left-[5%] top-[14%] md:left-[6%] md:top-[16%]",
    size: 64,
    duration: 12,
    delay: 0.3,
    drift: { x: 12, y: -10 },
  },
  {
    kind: "claude",
    className: "right-[5%] top-[16%] md:right-[6%] md:top-[18%]",
    size: 72,
    duration: 14,
    delay: 1.0,
    drift: { x: -14, y: 12 },
  },
  {
    kind: "jira",
    className: "left-[6%] bottom-[14%] md:left-[7%] md:bottom-[16%]",
    size: 68,
    duration: 11,
    delay: 0.6,
    drift: { x: 10, y: -8 },
  },
  {
    kind: "analytics",
    className: "right-[6%] bottom-[16%] md:right-[7%] md:bottom-[18%]",
    size: 64,
    duration: 13,
    delay: 1.5,
    drift: { x: -10, y: 10 },
  },
];

function ToolIcon({ kind, size }: { kind: ToolKind; size: number }) {
  switch (kind) {
    case "figma":
      // Figma — classic 5-shape mark, in brand colors
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 38 57"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"
            fill="#1ABCFE"
          />
          <path
            d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z"
            fill="#0ACF83"
          />
          <path
            d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z"
            fill="#FF7262"
          />
          <path
            d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"
            fill="#F24E1E"
          />
          <path
            d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"
            fill="#A259FF"
          />
        </svg>
      );

    case "claude":
      // Claude / Anthropic — 8-arm asterisk burst (the Claude sparkle mark)
      return (
        <svg
          width={size}
          height={size}
          viewBox="-12 -12 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#D97757"
        >
          {/* Four long arms */}
          <ellipse cx="0" cy="0" rx="1.6" ry="11" />
          <ellipse
            cx="0"
            cy="0"
            rx="1.6"
            ry="11"
            transform="rotate(90)"
          />
          {/* Four shorter diagonal arms */}
          <ellipse
            cx="0"
            cy="0"
            rx="1.1"
            ry="7.5"
            transform="rotate(45)"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="1.1"
            ry="7.5"
            transform="rotate(135)"
          />
        </svg>
      );

    case "jira":
      // Jira — Atlassian Jira icon (two interlocking chevrons)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="jira-grad-a"
              x1="22"
              y1="11.4"
              x2="14.4"
              y2="19.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.18" stopColor="#0052CC" />
              <stop offset="1" stopColor="#2684FF" />
            </linearGradient>
            <linearGradient
              id="jira-grad-b"
              x1="10.1"
              y1="20.7"
              x2="17.7"
              y2="13"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.18" stopColor="#0052CC" />
              <stop offset="1" stopColor="#2684FF" />
            </linearGradient>
          </defs>
          <path
            d="M30.6 15.3 17.3 2 16 .7 6 10.7l-4.6 4.6a1 1 0 0 0 0 1.4L10.7 26 16 31.3l10-10 .2-.2 4.4-4.4a1 1 0 0 0 0-1.4Zm-14.6 5.4-5-5 5-5 5 5Z"
            fill="#2684FF"
          />
          <path
            d="M16 10.7a8.4 8.4 0 0 1 0-11.9L6 8.6l5.4 5.4Z"
            fill="url(#jira-grad-a)"
          />
          <path
            d="M21 15.7 16 20.7a8.4 8.4 0 0 1 0 11.9l10-10Z"
            fill="url(#jira-grad-b)"
          />
        </svg>
      );

    case "analytics":
      // Google Analytics — three bars (tall to short)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="16"
            y="2"
            width="6"
            height="20"
            rx="3"
            fill="#F9AB00"
          />
          <rect
            x="9"
            y="9"
            width="6"
            height="13"
            rx="3"
            fill="#E37400"
          />
          <circle cx="5" cy="19" r="3" fill="#E37400" />
        </svg>
      );
  }
}

export function FloatingShapes() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {tools.map((t, i) => (
        <motion.div
          key={i}
          className={`absolute ${t.className}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            reduce
              ? { opacity: 0.6, scale: 1 }
              : {
                  opacity: 0.6,
                  scale: 1,
                  x: [0, t.drift.x, 0, -t.drift.x, 0],
                  y: [0, t.drift.y, 0, -t.drift.y, 0],
                  rotate: [0, 4, 0, -4, 0],
                }
          }
          transition={{
            opacity: { duration: 1.4, delay: t.delay },
            scale: {
              duration: 1.4,
              delay: t.delay,
              ease: [0.16, 1, 0.3, 1],
            },
            x: {
              duration: t.duration,
              delay: t.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: t.duration * 0.85,
              delay: t.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: t.duration * 1.6,
              delay: t.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <ToolIcon kind={t.kind} size={t.size} />
        </motion.div>
      ))}
    </div>
  );
}
