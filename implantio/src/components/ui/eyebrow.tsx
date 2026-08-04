import { cn } from "@/lib/utils";

/**
 * The small mono label above a headline. On dark bands pass tone="dark".
 * The leading rule is a deliberate part of the mark — it reads as a record
 * entry rather than a decorative tag.
 */
export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "t-label flex items-center gap-3",
        tone === "dark" ? "text-white/55" : "text-muted",
        className,
      )}
    >
      <span aria-hidden className={cn("h-px w-6", tone === "dark" ? "bg-white/25" : "bg-accent")} />
      {children}
    </p>
  );
}
