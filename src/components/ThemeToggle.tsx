"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg transition-colors duration-300 hover:border-fg hover:bg-fg hover:text-bg"
    >
      <Sun
        size={15}
        strokeWidth={1.6}
        className="absolute transition-all duration-500 ease-out-expo dark:rotate-90 dark:scale-0 dark:opacity-0"
      />
      <Moon
        size={15}
        strokeWidth={1.6}
        className="absolute rotate-90 scale-0 opacity-0 transition-all duration-500 ease-out-expo dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
