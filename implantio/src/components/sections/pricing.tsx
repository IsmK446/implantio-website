import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricing } from "@/config/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" tone="ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-field opacity-50" />

      <Container size="wide" className="relative">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          headline={pricing.headline}
          body={pricing.body}
          tone="dark"
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan, index) => {
            const featured = plan.featured;
            const numeric = /^[\d.,]+$/.test(plan.price);

            return (
              <Reveal key={plan.name} delay={index * 90}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-card border p-7 sm:p-8",
                    featured
                      ? "border-transparent bg-surface shadow-lift"
                      : "border-ink-line bg-ink-soft",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={cn(
                          "font-display text-xl font-semibold tracking-display",
                          featured ? "text-ink" : "text-white",
                        )}
                      >
                        {plan.name}
                      </h3>
                      <p className={cn("mt-1.5 text-sm", featured ? "text-muted" : "text-white/55")}>
                        {plan.audience}
                      </p>
                    </div>
                    {plan.badge ? (
                      <span className="rounded-pill bg-accent px-3 py-1 text-center font-mono text-[0.6rem] uppercase tracking-label text-white">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-7 flex items-baseline gap-1.5">
                    {numeric ? (
                      <span
                        className={cn(
                          "font-display text-2xl font-semibold",
                          featured ? "text-ink" : "text-white/70",
                        )}
                      >
                        {pricing.currency}
                      </span>
                    ) : null}
                    <span
                      className={cn(
                        "font-display text-5xl font-bold tracking-display",
                        featured ? "text-ink" : "text-white",
                      )}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p className={cn("mt-2 font-mono text-xs", featured ? "text-muted" : "text-white/45")}>
                    {plan.priceNote}
                  </p>
                  <p className={cn("mt-1 font-mono text-xs", featured ? "text-muted/80" : "text-white/35")}>
                    {pricing.billingNote}
                  </p>

                  <ul className="mt-7 flex flex-col gap-3 border-t pt-7"
                      style={{ borderColor: featured ? "rgb(var(--c-line))" : "rgb(var(--c-ink-line))" }}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-accent" : "text-signal")}
                          strokeWidth={2.2}
                          aria-hidden
                        />
                        <span className={cn("text-sm leading-relaxed", featured ? "text-body" : "text-white/70")}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-2">
                    <Button
                      href={plan.cta.href}
                      size="lg"
                      variant={featured ? "primary" : "onDark"}
                      className="w-full"
                    >
                      {plan.cta.label}
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-white/60">
          {pricing.footnote}
        </p>
      </Container>
    </Section>
  );
}
