/**
 * ============================================================================
 *  THEMES
 * ============================================================================
 *  Every colour, corner radius and typeface on the site comes from this file.
 *  Change a hex value here and it updates everywhere — no CSS hunting.
 *
 *  Each theme is compiled into CSS custom properties at build time by
 *  `src/components/layout/theme-styles.tsx`, so adding a new preset is just a
 *  matter of copying a block below and changing the values.
 *
 *  To pick which theme loads by default, edit `defaultTheme` at the bottom.
 * ============================================================================
 */

export type ThemeId = "enterprise" | "luxury" | "medical";

export type ThemeTokens = {
  /** Deep brand surface: dark bands, footer, final CTA */
  ink: string;
  /** A slightly lighter dark surface, used for cards on dark bands */
  inkSoft: string;
  /** Hairline borders on dark bands */
  inkLine: string;
  /** Page background */
  paper: string;
  /** Card / panel background */
  surface: string;
  /** Hairline borders on light backgrounds */
  line: string;
  /** Body copy colour on light backgrounds */
  body: string;
  /** Secondary / supporting copy */
  muted: string;
  /** Primary action colour */
  accent: string;
  /** Hover + pressed state for the primary action */
  accentStrong: string;
  /** Very light wash of the accent, for chips and highlights */
  accentTint: string;
  /** "Booked", "answered", success states */
  signal: string;
  /** "Missed", "unanswered", attention states */
  warn: string;
};

export type Theme = {
  id: ThemeId;
  /** Shown in the theme switcher */
  label: string;
  /** One-line description, shown in the theme switcher */
  note: string;
  colors: ThemeTokens;
  radius: {
    /** Corner radius for cards and panels, e.g. "16px" or "0px" for a sharp look */
    card: string;
    /** Corner radius for buttons and inputs */
    control: string;
  };
  /**
   * Which loaded typeface each role uses. The CSS variable names come from
   * `src/app/layout.tsx` — add a font there first if you want a new option.
   * Available: --font-archivo | --font-instrument | --font-plex-mono
   */
  fonts: {
    display: string;
    body: string;
    mono: string;
  };
};

export const themes: Theme[] = [
  {
    id: "enterprise",
    label: "Enterprise AI",
    note: "Deep navy, white, electric blue",
    colors: {
      ink: "#08172C",
      inkSoft: "#0F2743",
      inkLine: "#1E3A5C",
      paper: "#F4F7FB",
      surface: "#FFFFFF",
      line: "#DEE7F1",
      body: "#16293F",
      muted: "#5B7089",
      accent: "#1B63FF",
      accentStrong: "#0B4AD6",
      accentTint: "#E6EEFF",
      signal: "#0E9E88",
      warn: "#C2622B",
    },
    radius: { card: "16px", control: "10px" },
    fonts: {
      display: "var(--font-archivo)",
      body: "var(--font-instrument)",
      mono: "var(--font-plex-mono)",
    },
  },
  {
    id: "luxury",
    label: "Luxury Healthcare",
    note: "Charcoal, bone, emerald",
    colors: {
      ink: "#15171A",
      inkSoft: "#212429",
      inkLine: "#33383F",
      paper: "#F6F5F2",
      surface: "#FFFFFF",
      line: "#E4E2DC",
      body: "#22252A",
      muted: "#6C6F75",
      accent: "#0E8F63",
      accentStrong: "#0A6E4C",
      accentTint: "#E3F1EA",
      signal: "#0E8F63",
      warn: "#A8672A",
    },
    radius: { card: "6px", control: "4px" },
    fonts: {
      display: "var(--font-archivo)",
      body: "var(--font-instrument)",
      mono: "var(--font-plex-mono)",
    },
  },
  {
    id: "medical",
    label: "Modern Medical",
    note: "White, clinical blue, teal",
    colors: {
      ink: "#0D2A3A",
      inkSoft: "#143B50",
      inkLine: "#255468",
      paper: "#FFFFFF",
      surface: "#F7FAFC",
      line: "#DCE7EC",
      body: "#123243",
      muted: "#5A7484",
      accent: "#0F7FD4",
      accentStrong: "#0A62A8",
      accentTint: "#E2F1FC",
      signal: "#0FA9A0",
      warn: "#C56A2E",
    },
    radius: { card: "22px", control: "999px" },
    fonts: {
      display: "var(--font-archivo)",
      body: "var(--font-instrument)",
      mono: "var(--font-plex-mono)",
    },
  },
];

/** The theme a first-time visitor sees. */
export const defaultTheme: ThemeId = "enterprise";

/** Show the little theme switcher in the footer? Set to false before launch. */
export const showThemeSwitcher = true;

export const getTheme = (id: ThemeId): Theme =>
  themes.find((theme) => theme.id === id) ?? themes[0];
