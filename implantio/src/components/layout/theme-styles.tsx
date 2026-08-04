import { defaultTheme, themes, type Theme } from "@/config/themes";
import { hexToRgbTriplet } from "@/lib/utils";

/**
 * Turns every theme in src/config/themes.ts into a block of CSS custom
 * properties. The default theme is applied to :root so the page paints
 * correctly before any JavaScript runs; the rest are scoped to
 * [data-theme="…"] and swapped by the theme switcher.
 */
function themeToCss(theme: Theme, selector: string): string {
  const { colors, radius, fonts } = theme;
  const declarations = [
    `--c-ink:${hexToRgbTriplet(colors.ink)}`,
    `--c-ink-soft:${hexToRgbTriplet(colors.inkSoft)}`,
    `--c-ink-line:${hexToRgbTriplet(colors.inkLine)}`,
    `--c-paper:${hexToRgbTriplet(colors.paper)}`,
    `--c-surface:${hexToRgbTriplet(colors.surface)}`,
    `--c-line:${hexToRgbTriplet(colors.line)}`,
    `--c-body:${hexToRgbTriplet(colors.body)}`,
    `--c-muted:${hexToRgbTriplet(colors.muted)}`,
    `--c-accent:${hexToRgbTriplet(colors.accent)}`,
    `--c-accent-strong:${hexToRgbTriplet(colors.accentStrong)}`,
    `--c-accent-tint:${hexToRgbTriplet(colors.accentTint)}`,
    `--c-signal:${hexToRgbTriplet(colors.signal)}`,
    `--c-warn:${hexToRgbTriplet(colors.warn)}`,
    `--radius-card:${radius.card}`,
    `--radius-control:${radius.control}`,
    `--font-display:${fonts.display}`,
    `--font-body:${fonts.body}`,
    `--font-mono:${fonts.mono}`,
  ].join(";");

  return `${selector}{${declarations}}`;
}

export function ThemeStyles() {
  const base = themes.find((theme) => theme.id === defaultTheme) ?? themes[0];

  const css = [
    themeToCss(base, ":root"),
    ...themes.map((theme) => themeToCss(theme, `[data-theme="${theme.id}"]`)),
  ].join("");

  return <style id="implantio-theme" dangerouslySetInnerHTML={{ __html: css }} />;
}

/**
 * Applies a saved theme preference before first paint, so there is no flash of
 * the default theme. Kept deliberately tiny.
 */
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("implantio-theme");if(t){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
