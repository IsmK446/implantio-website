"use client";

import { useState } from "react";

import { track, type TrackEvent } from "@/lib/analytics";

export type FormStatus = "idle" | "submitting" | "success" | "error";

type SubmitResult = {
  ok: boolean;
  errors?: Record<string, string>;
  error?: string;
};

export function useLeadForm({
  type,
  event,
}: {
  type: "demo" | "contact";
  event: TrackEvent;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);

  async function submit(form: HTMLFormElement) {
    setStatus("submitting");
    setFieldErrors({});
    setMessage(null);

    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...data,
      type,
      consent: data.consent === "on" || data.consent === "true",
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as SubmitResult;

      if (!response.ok) {
        if (result.errors) {
          setFieldErrors(result.errors);
          setStatus("idle");
          setMessage("Check the highlighted fields and send again.");
          // Move focus to the first field with a problem
          const firstField = Object.keys(result.errors)[0];
          form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
          return;
        }
        setStatus("error");
        setMessage(result.error ?? null);
        return;
      }

      track(event, { type });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setFieldErrors({});
    setMessage(null);
  }

  return { status, fieldErrors, message, submit, reset };
}
