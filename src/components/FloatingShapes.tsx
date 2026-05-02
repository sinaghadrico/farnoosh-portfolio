type ToolKind = "figma" | "jira" | "analytics" | "claude";

type Tool = {
  kind: ToolKind;
  label: string;
  className: string;
  size: number;
  animation: string;
  floatDelay: string;
  appearDelay: string;
};

const tools: Tool[] = [
  {
    kind: "figma",
    label: "Figma",
    className: "left-[76%] top-[48%] md:left-[69%] md:top-[22%]",
    size: 64,
    animation: "animate-float-a",
    floatDelay: "0s",
    appearDelay: "0.9s",
  },
  {
    kind: "jira",
    label: "Jira",
    className: "left-[6%] bottom-[14%] md:left-[7%] md:bottom-[16%]",
    size: 68,
    animation: "animate-float-b",
    floatDelay: "-3s",
    appearDelay: "1.2s",
  },
  {
    kind: "analytics",
    label: "Analytics",
    className: "right-[6%] bottom-[16%] md:right-[7%] md:bottom-[18%]",
    size: 64,
    animation: "animate-float-c",
    floatDelay: "-5s",
    appearDelay: "1.5s",
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
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262" />
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
      // Claude — app icon: orange rounded square + white 8-arm starburst
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" rx="22" fill="#CC4A28" />
          <g transform="translate(50,50)" fill="white">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <path
                key={i}
                transform={`rotate(${angle})`}
                d="M 0,0 C -5,-8 -4,-22 0,-35 C 4,-22 5,-8 0,0"
              />
            ))}
          </g>
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
          <rect x="16" y="2" width="6" height="20" rx="3" fill="#F9AB00" />
          <rect x="9" y="9" width="6" height="13" rx="3" fill="#E37400" />
          <circle cx="5" cy="19" r="3" fill="#E37400" />
        </svg>
      );
  }
}

export function FloatingShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:[&_*]:!animate-none"
    >
      {tools.map((t, i) => (
        <div
          key={i}
          className={`absolute animate-appear ${t.className}`}
          style={{ animationDelay: t.appearDelay }}
        >
          <div
            className={t.animation}
            style={{ animationDelay: t.floatDelay }}
          >
            <button
              type="button"
              aria-label={t.label}
              className="group pointer-events-auto relative block cursor-pointer opacity-60 transition-all duration-500 ease-out-expo hover:scale-110 hover:opacity-100 hover:-rotate-6 hover:[animation-play-state:paused] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/40 rounded-2xl"
            >
              <ToolIcon kind={t.kind} size={t.size} />
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-bg px-2.5 py-1 font-sans text-xs text-fg opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                {t.label}
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
