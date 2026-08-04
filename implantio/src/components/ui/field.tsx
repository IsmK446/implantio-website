import { cn } from "@/lib/utils";

const controlStyles =
  "w-full rounded-control border bg-surface px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/70 transition-colors duration-150 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 disabled:opacity-60";

export function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-accent" aria-hidden>
            *
          </span>
        ) : (
          <span className="ml-2 text-xs font-normal text-muted">optional</span>
        )}
      </label>
      {children}
      {hint && !error ? <p className="text-xs text-muted">{hint}</p> : null}
      {error ? (
        <p id={`${htmlFor}-error`} className="text-xs font-medium text-warn" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput({
  invalid,
  className,
  ...rest
}: React.ComponentProps<"input"> & { invalid?: boolean }) {
  return (
    <input
      className={cn(controlStyles, invalid ? "border-warn" : "border-line", className)}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid && rest.id ? `${rest.id}-error` : undefined}
      {...rest}
    />
  );
}

export function TextArea({
  invalid,
  className,
  ...rest
}: React.ComponentProps<"textarea"> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(controlStyles, "min-h-32 resize-y", invalid ? "border-warn" : "border-line", className)}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid && rest.id ? `${rest.id}-error` : undefined}
      {...rest}
    />
  );
}

export function Select({
  invalid,
  className,
  children,
  ...rest
}: React.ComponentProps<"select"> & { invalid?: boolean }) {
  return (
    <select
      className={cn(
        controlStyles,
        "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10",
        invalid ? "border-warn" : "border-line",
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%235B7089' stroke-width='1.6'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")",
      }}
      aria-invalid={invalid || undefined}
      {...rest}
    >
      {children}
    </select>
  );
}

/** Honeypot field — invisible to people, tempting to bots. */
export function HoneyPot() {
  return (
    <div className="absolute left-[-9999px]" aria-hidden>
      <label htmlFor="practice-website-url">Leave this field empty</label>
      <input id="practice-website-url" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
