"use client";

import { useEffect, useState } from "react";

import { defaultTheme, themes, type ThemeId } from "@/config/themes";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "implantio-theme";

/**
 * Lets you preview the theme presets on the live site. Turn it off before
 * launch with `showThemeSwitcher: false` in src/config/themes.ts.
 */
export function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeId>(defaultTheme);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
      if (saved && themes.some((theme) => theme.id === saved)) setActive(saved);
    } catch {
      /* storage unavailable — stay on the default */
    }
  }, []);

  const choose = (id: ThemeId) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* storage unavailable — the change still applies for this visit */
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="t-label text-white/45">Theme preview</p>
      <div
        role="radiogroup"
        aria-label="Colour theme"
        className="inline-flex flex-wrap gap-1 rounded-control border border-ink-line p-1"
      >
        {themes.map((theme) => {
          const isActive = theme.id === active;
          return (
            <button
              key={theme.id}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => choose(theme.id)}
              title={theme.note}
              className={cn(
                "flex items-center gap-2 rounded-[calc(var(--radius-control)-2px)] px-3 py-2 text-xs transition-colors",
                isActive ? "bg-white/10 text-white" : "text-white/55 hover:text-white",
              )}
            >
              <span
                aria-hidden
                className="h-3 w-3 rounded-full border border-white/25"
                style={{ background: theme.colors.accent }}
              />
              {theme.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
