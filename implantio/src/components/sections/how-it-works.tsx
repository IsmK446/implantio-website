import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { howItWorks } from "@/config/site";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="paper">
      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow={howItWorks.eyebrow}
              headline={howItWorks.headline}
            />

            <div className="rounded-card border border-line bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {howItWorks.setupNote.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{howItWorks.setupNote.body}</p>
            </div>
          </div>

          {/* A genuine sequence, so it is numbered and vertically ordered. */}
          <ol className="relative flex flex-col">
            <span aria-hidden className="absolute left-[1.4rem] top-3 bottom-3 w-px bg-line" />

            {howItWorks.steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 80} className="relative pl-16 pb-10 last:pb-0">
                <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm text-accent">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="t-h3 text-ink">{step.title}</h3>
                    <span className="t-label text-muted">{step.meta}</span>
                  </div>
                  <p className="max-w-prose text-base leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
