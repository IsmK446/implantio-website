import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  headline,
  body,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  headline: string;
  body?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2 className={cn("t-h2 max-w-3xl", tone === "dark" && "text-white")}>{headline}</h2>
      {body ? (
        <p
          className={cn(
            "max-w-prose text-lg leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-muted",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
