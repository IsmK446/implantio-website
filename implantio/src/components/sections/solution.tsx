import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { solution } from "@/config/site";
import { cn } from "@/lib/utils";

export function Solution() {
  return (
    <Section id="solution" tone="paper">
      <Container size="wide">
        <SectionHeading
          eyebrow={solution.eyebrow}
          headline={solution.headline}
          body={solution.body}
          className="max-w-3xl"
        />

        {/* The flow. Order carries meaning here, so the connectors are real
            information rather than decoration. */}
        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {solution.flow.map((stage, index) => {
            const isLast = index === solution.flow.length - 1;
            return (
              <Reveal as="li" key={stage.title} delay={index * 80} className="relative">
                <div
                  className={cn(
                    "flex h-full flex-col gap-2 rounded-card border p-5 transition-shadow duration-300 hover:shadow-card",
                    isLast ? "border-signal/40 bg-signal/[0.06]" : "border-line bg-surface",
                  )}
                >
                  <span
                    className={cn(
                      "t-label",
                      isLast ? "text-signal" : "text-accent",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {stage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{stage.detail}</p>
                </div>

                {!isLast ? (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-line md:block"
                  >
                    <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rotate-45 border-r border-t border-muted/60" />
                  </span>
                ) : null}
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
