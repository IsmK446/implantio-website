/**
 * A single place to hook up analytics. Left intentionally empty so the site
 * ships without trackers. Wire your provider here and every CTA click and form
 * submission will report through it.
 */
export type TrackEvent =
  | "demo_form_submitted"
  | "contact_form_submitted"
  | "roi_calculator_used"
  | "cta_clicked";

export function track(event: TrackEvent, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  // Example (Plausible): window.plausible?.(event, { props: payload });
  // Example (GA4):      window.gtag?.("event", event, payload);
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, payload);
  }
}
