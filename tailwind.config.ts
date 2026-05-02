import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2.5rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
      },
      screens: {
        sm: "600px",
        md: "740px",
        lg: "960px",
        xl: "1180px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
          subtle: "rgb(var(--bg-subtle) / <alpha-value>)",
          inverse: "rgb(var(--bg-inverse) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          subtle: "rgb(var(--fg-subtle) / <alpha-value>)",
          inverse: "rgb(var(--fg-inverse) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          strong: "rgb(var(--border-strong) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          fg: "rgb(var(--accent-fg) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Editorial display scale
        "display-2xl": ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-xl": ["clamp(2.75rem, 7vw, 5.75rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "float-a": "floatA 8s ease-in-out infinite",
        "float-b": "floatB 9s ease-in-out infinite",
        "float-c": "floatC 7s ease-in-out infinite",
        "drift-a": "driftA 18s ease-in-out infinite",
        "drift-b": "driftB 22s ease-in-out infinite",
        "drift-c": "driftC 20s ease-in-out infinite",
        "appear": "appear 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "appear-soft": "appearSoft 1.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        floatA: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "25%": { transform: "translate3d(8px, -18px, 0) rotate(4deg)" },
          "50%": { transform: "translate3d(-6px, -28px, 0) rotate(-3deg)" },
          "75%": { transform: "translate3d(-10px, -10px, 0) rotate(2deg)" },
        },
        floatB: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "33%": { transform: "translate3d(-12px, -22px, 0) rotate(-5deg)" },
          "66%": { transform: "translate3d(10px, -14px, 0) rotate(6deg)" },
        },
        floatC: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "25%": { transform: "translate3d(-14px, -12px, 0) rotate(-4deg)" },
          "50%": { transform: "translate3d(0, -26px, 0) rotate(3deg)" },
          "75%": { transform: "translate3d(12px, -16px, 0) rotate(5deg)" },
        },
        appear: {
          "0%": { opacity: "0", transform: "scale(0.6) translateY(12px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        appearSoft: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        driftA: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(28px, -22px, 0) scale(1.05)" },
          "66%": { transform: "translate3d(-18px, 14px, 0) scale(0.97)" },
        },
        driftB: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-32px, -28px, 0) scale(1.06)" },
        },
        driftC: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "25%": { transform: "translate3d(20px, 18px, 0) scale(0.96)" },
          "50%": { transform: "translate3d(-14px, -20px, 0) scale(1.04)" },
          "75%": { transform: "translate3d(-22px, 8px, 0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
