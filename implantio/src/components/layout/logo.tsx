import { company } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * The mark is an abstracted implant post: a tapered fixture below, the crown
 * line above in the accent colour. It reads as an "I" at small sizes.
 * Swap the SVG for your own artwork here and it updates site-wide.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="32" height="32" rx="8" className="fill-ink" />
      <rect x="10" y="8.5" width="12" height="3" rx="1.5" className="fill-accent" />
      <path
        d="M12.6 13.5h6.8l-1 5.2a3.6 3.6 0 0 1-.9 1.8L16 23.5l-1.5-3a3.6 3.6 0 0 1-.9-1.8l-1-5.2Z"
        className="fill-white"
      />
      <path d="M13.5 16.4h5M13.9 18.6h4.2" stroke="rgb(var(--c-ink))" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-[1.35rem] font-bold tracking-display",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {company.name}
      </span>
    </span>
  );
}
