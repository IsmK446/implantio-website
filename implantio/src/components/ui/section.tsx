import { cn } from "@/lib/utils";

/**
 * Vertical rhythm lives in one place. `tone` picks the background band so
 * light and dark sections alternate consistently down the page.
 */
export function Section({
  children,
  id,
  className,
  tone = "paper",
  spacing = "default",
  ...rest
}: React.ComponentProps<"section"> & {
  tone?: "paper" | "surface" | "ink";
  spacing?: "default" | "tight" | "loose";
}) {
  const tones = {
    paper: "bg-paper text-body",
    surface: "bg-surface text-body",
    ink: "bg-ink text-white/80",
  } as const;

  const spacings = {
    tight: "py-14 sm:py-16",
    default: "py-20 sm:py-28",
    loose: "py-24 sm:py-36",
  } as const;

  return (
    <section id={id} className={cn("relative", tones[tone], spacings[spacing], className)} {...rest}>
      {children}
    </section>
  );
}
