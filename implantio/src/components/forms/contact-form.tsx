"use client";

import { Spinner } from "@/components/forms/demo-form";
import { useLeadForm } from "@/components/forms/use-lead-form";
import { ActionButton } from "@/components/ui/button";
import { Field, HoneyPot, Select, TextArea, TextInput } from "@/components/ui/field";
import { contact, contactPage } from "@/config/site";

export function ContactForm() {
  const { status, fieldErrors, message, submit, reset } = useLeadForm({
    type: "contact",
    event: "contact_form_submitted",
  });

  if (status === "success") {
    return (
      <div className="rounded-card border border-signal/40 bg-signal/[0.07] p-8">
        <h2 className="t-h3 text-ink">{contactPage.form.successTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{contactPage.form.successBody}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-sm text-accent underline underline-offset-4 hover:text-accent-strong"
        >
          Send another message
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
      <h2 className="t-h3 text-ink">{contactPage.form.title}</h2>

      <HoneyPot />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" htmlFor="contact-name" required error={fieldErrors.name}>
          <TextInput
            id="contact-name"
            name="name"
            autoComplete="name"
            invalid={Boolean(fieldErrors.name)}
            disabled={submitting}
          />
        </Field>

        <Field label="Email" htmlFor="contact-email" required error={fieldErrors.email}>
          <TextInput
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            invalid={Boolean(fieldErrors.email)}
            disabled={submitting}
          />
        </Field>

        <Field label="Practice" htmlFor="contact-practice">
          <TextInput
            id="contact-practice"
            name="practice"
            autoComplete="organization"
            disabled={submitting}
          />
        </Field>

        <Field label="What's it about?" htmlFor="contact-topic">
          <Select id="contact-topic" name="topic" defaultValue="" disabled={submitting}>
            <option value="" disabled>
              Choose one
            </option>
            {contactPage.form.topics.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="contact-message" required error={fieldErrors.message}>
        <TextArea
          id="contact-message"
          name="message"
          invalid={Boolean(fieldErrors.message)}
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
            You can contact me about this enquiry. I&rsquo;ve read the{" "}
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
          <p className="text-sm font-medium text-ink">{contactPage.form.errorTitle}</p>
          <p className="mt-1 text-sm text-muted">
            {contactPage.form.errorBody} Email{" "}
            <a href={`mailto:${contact.email}`} className="text-accent underline underline-offset-2">
              {contact.email}
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

      <div>
        <ActionButton type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
          {submitting ? (
            <>
              <Spinner />
              {contactPage.form.submittingLabel}
            </>
          ) : (
            contactPage.form.submitLabel
          )}
        </ActionButton>
      </div>
    </form>
  );
}
