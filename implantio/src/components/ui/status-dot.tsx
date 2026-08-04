import { cn } from "@/lib/utils";

/** The small live indicator used in the header and on the call panel. */
export function StatusDot({
  tone = "signal",
  className,
}: {
  tone?: "signal" | "warn" | "accent";
  className?: string;
}) {
  const tones = {
    signal: "bg-signal",
    warn: "bg-warn",
    accent: "bg-accent",
  } as const;

  return (
    <span className={cn("relative flex h-2 w-2 shrink-0", className)} aria-hidden>
      <span className={cn("absolute inline-flex h-full w-full rounded-full animate-pulse-dot", tones[tone])} />
      <span className={cn("relative inline-flex h-2 w-2 rounded-full", tones[tone])} />
    </span>
  );
}
