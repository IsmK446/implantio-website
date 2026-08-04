"use client";

import { useLeadForm } from "@/components/forms/use-lead-form";
import { ActionButton } from "@/components/ui/button";
import { Field, HoneyPot, Select, TextArea, TextInput } from "@/components/ui/field";
import { contact, demo } from "@/config/site";

export function DemoForm() {
  const { status, fieldErrors, message, submit, reset } = useLeadForm({
    type: "demo",
    event: "demo_form_submitted",
  });

  if (status === "success") {
    return (
      <div className="rounded-card border border-signal/40 bg-signal/[0.07] p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal text-white">
          <svg viewBox="0 0 16 16" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="t-h3 mt-5 text-ink">{demo.form.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          {demo.form.successBody}
        </p>
        <p className="mt-4 font-mono text-sm text-ink">{contact.phone}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-sm text-accent underline underline-offset-4 hover:text-accent-strong"
        >
          Book another demo
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void submit(event.currentTarget);
      }}
      className="relative flex flex-col gap-6 rounded-card border border-line bg-surface p-7 sm:p-9"
    >
      <div>
        <h2 className="t-h3 text-ink">{demo.form.title}</h2>
        <p className="mt-2 text-sm text-muted">
          Fields marked <span className="text-accent">*</span> are required.
        </p>
      </div>

      <HoneyPot />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required error={fieldErrors.name}>
          <TextInput
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Dr. Aoife Byrne"
            invalid={Boolean(fieldErrors.name)}
            disabled={submitting}
          />
        </Field>

        <Field label="Practice name" htmlFor="practice" required error={fieldErrors.practice}>
          <TextInput
            id="practice"
            name="practice"
            autoComplete="organization"
            placeholder="Merrion Dental Studio"
            invalid={Boolean(fieldErrors.practice)}
            disabled={submitting}
          />
        </Field>

        <Field label="Email" htmlFor="email" required error={fieldErrors.email}>
          <TextInput
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@yourpractice.ie"
            invalid={Boolean(fieldErrors.email)}
            disabled={submitting}
          />
        </Field>

        <Field
          label="Phone"
          htmlFor="phone"
          required
          error={fieldErrors.phone}
          hint="We ring to confirm the time."
        >
          <TextInput
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+353 87 000 0000"
            invalid={Boolean(fieldErrors.phone)}
            disabled={submitting}
          />
        </Field>

        <Field label="Type of practice" htmlFor="practiceType">
          <Select id="practiceType" name="practiceType" defaultValue="" disabled={submitting}>
            <option value="" disabled>
              Choose one
            </option>
            {demo.form.practiceTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Monthly call volume" htmlFor="callVolume">
          <Select id="callVolume" name="callVolume" defaultValue="" disabled={submitting}>
            <option value="" disabled>
              Choose one
            </option>
            {demo.form.callVolumes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field
        label="A call scenario you'd like us to run"
        htmlFor="message"
        hint="For example: an evening implant enquiry asking about cost and finance."
      >
        <TextArea
          id="message"
          name="message"
          placeholder="Tell us what your team hears most often…"
          disabled={submitting}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 shrink-0 rounded border-line accent-[rgb(var(--c-accent))]"
            disabled={submitting}
          />
          <span>
            You can contact me about this demo request. I&rsquo;ve read the{" "}
            <a href="/privacy" className="text-accent underline underline-offset-2">
              privacy policy
            </a>
            . <span className="text-accent">*</span>
          </span>
        </label>
        {fieldErrors.consent ? (
          <p className="text-xs font-medium text-warn" role="alert">
            {fieldErrors.consent}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <div role="alert" className="rounded-control border border-warn/40 bg-warn/[0.07] px-4 py-3">
          <p className="text-sm font-medium text-ink">{demo.form.errorTitle}</p>
          <p className="mt-1 text-sm text-muted">
            {demo.form.errorBody} Email{" "}
            <a href={`mailto:${contact.salesEmail}`} className="text-accent underline underline-offset-2">
              {contact.salesEmail}
            </a>
            .
          </p>
        </div>
      ) : null}

      {message && status !== "error" ? (
        <p role="alert" className="text-sm font-medium text-warn">
          {message}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <ActionButton type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
          {submitting ? (
            <>
              <Spinner />
              {demo.form.submittingLabel}
            </>
          ) : (
            demo.form.submitLabel
          )}
        </ActionButton>
        <p className="font-mono text-xs text-muted">Replies within one working day</p>
      </div>
    </form>
  );
}

export function Spinner() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" aria-hidden fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
