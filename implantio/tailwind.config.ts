import type { Config } from "tailwindcss";

/**
 * Colours are declared as CSS variables (RGB triplets) so that a whole theme can
 * be swapped at runtime. See `src/config/themes.ts` — that file is the single
 * source of truth for every colour value in this site.
 */
const rgb = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: rgb("--c-ink"),
        "ink-soft": rgb("--c-ink-soft"),
        "ink-line": rgb("--c-ink-line"),
        paper: rgb("--c-paper"),
        surface: rgb("--c-surface"),
        line: rgb("--c-line"),
        body: rgb("--c-body"),
        muted: rgb("--c-muted"),
        accent: rgb("--c-accent"),
        "accent-strong": rgb("--c-accent-strong"),
        "accent-tint": rgb("--c-accent-tint"),
        signal: rgb("--c-signal"),
        warn: rgb("--c-warn"),
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        control: "var(--radius-control)",
        pill: "999px",
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--c-ink) / 0.04), 0 12px 32px -12px rgb(var(--c-ink) / 0.12)",
        lift: "0 2px 4px rgb(var(--c-ink) / 0.05), 0 24px 48px -20px rgb(var(--c-ink) / 0.28)",
        inset: "inset 0 1px 0 rgb(255 255 255 / 0.06)",
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        display: "-0.028em",
        label: "0.14em",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "caret-blink": {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0.15" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        "sweep": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(220%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "caret-blink": "caret-blink 1.1s steps(1) infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        sweep: "sweep 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
