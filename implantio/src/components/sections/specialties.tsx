import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { specialties } from "@/config/site";

export function Specialties() {
  return (
    <Section id="specialties" tone="paper">
      <Container size="wide">
        <SectionHeading
          eyebrow={specialties.eyebrow}
          headline={specialties.headline}
          body={specialties.body}
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {specialties.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <article className="flex h-full flex-col rounded-card border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card">
                <p className="t-label text-accent">{item.name}</p>
                <h3 className="t-h3 mt-3 text-ink">{item.claim}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>

                <div className="mt-6 border-t border-line pb-6 pt-5">
                  <p className="t-label mb-3 text-muted">Qualified on every call</p>
                  <ul className="flex flex-wrap gap-2">
                    {item.qualifiers.map((qualifier) => (
                      <li
                        key={qualifier}
                        className="rounded-pill border border-line bg-paper px-3 py-1.5 text-xs text-body/80"
                      >
                        {qualifier}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-baseline justify-between gap-3 border-t border-line pt-5">
                  <span className="text-xs text-muted">{item.valueLabel}</span>
                  <span className="font-mono text-sm font-medium text-ink">{item.value}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
