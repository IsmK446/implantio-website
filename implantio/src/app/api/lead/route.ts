import { NextResponse } from "next/server";

import { isValidEmail } from "@/lib/utils";

/**
 * Receives demo requests and contact messages.
 *
 * Out of the box this validates the submission and logs it on the server, so
 * the site works the moment you deploy it. To actually receive leads, set
 * LEAD_WEBHOOK_URL in your environment (Zapier, Make, Slack incoming webhook,
 * or your CRM) — the payload is posted there as JSON. Swap in an email
 * provider at the marked spot if you prefer email delivery.
 */

export const runtime = "nodejs";

type LeadPayload = {
  type: "demo" | "contact";
  name?: string;
  email?: string;
  phone?: string;
  practice?: string;
  role?: string;
  practiceType?: string;
  callVolume?: string;
  topic?: string;
  message?: string;
  consent?: boolean;
  /** Honeypot — must be empty */
  website?: string;
};

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "We couldn't read that submission." }, { status: 400 });
  }

  // Silently accept and discard bot submissions
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};

  if (!payload.name?.trim()) errors.name = "Tell us who you are.";
  if (!payload.email?.trim()) {
    errors.email = "We need an email address to reply to.";
  } else if (!isValidEmail(payload.email)) {
    errors.email = "That email address doesn't look right.";
  }

  if (payload.type === "demo") {
    if (!payload.practice?.trim()) errors.practice = "Which practice are you booking for?";
    if (!payload.phone?.trim()) errors.phone = "We call to confirm the demo time.";
  }

  if (payload.type === "contact" && !payload.message?.trim()) {
    errors.message = "Add a short message so we can answer properly.";
  }

  if (!payload.consent) {
    errors.consent = "We need your permission to reply to this enquiry.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const lead = {
    ...payload,
    website: undefined,
    receivedAt: new Date().toISOString(),
    source: request.headers.get("referer") ?? "direct",
  };

  try {
    const webhook = process.env.LEAD_WEBHOOK_URL;

    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded ${response.status}`);
      }
    } else {
      // No webhook configured yet — the lead is logged so nothing is lost.
      // eslint-disable-next-line no-console
      console.info("[implantio] New lead (no LEAD_WEBHOOK_URL configured):", lead);
    }

    // ── Send an email here instead, if you prefer ──────────────────────────
    // await resend.emails.send({ to: process.env.LEAD_NOTIFICATION_EMAIL, ... })

    return NextResponse.json({ ok: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[implantio] Lead delivery failed:", error);
    return NextResponse.json(
      { error: "We couldn't deliver that. Please try again or email us directly." },
      { status: 502 },
    );
  }
}
