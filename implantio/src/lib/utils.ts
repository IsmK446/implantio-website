/** Join class names, skipping anything falsy. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** "#08172C" -> "8 23 44" (the format Tailwind needs for opacity support). */
export function hexToRgbTriplet(hex: string): string {
  const clean = hex.replace("#", "").trim();
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((char) => char + char)
          .join("")
      : clean;
  const int = Number.parseInt(full, 16);
  if (Number.isNaN(int) || full.length !== 6) return "0 0 0";
  return `${(int >> 16) & 255} ${(int >> 8) & 255} ${int & 255}`;
}

/** 2450 -> "€2,450" */
export function formatCurrency(value: number, currency = "€"): string {
  return `${currency}${Math.round(value).toLocaleString("en-IE")}`;
}

/** 0.35 -> "35%" */
export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

/** Very light email sanity check — real validation happens server side. */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
