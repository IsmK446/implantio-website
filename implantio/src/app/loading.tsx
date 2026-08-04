/** Shown while a route segment is still loading. Deliberately quiet. */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <span className="sr-only">Loading</span>
      <span className="relative h-px w-40 overflow-hidden bg-line" aria-hidden>
        <span className="absolute inset-y-0 left-0 w-1/3 animate-sweep bg-accent" />
      </span>
    </div>
  );
}
