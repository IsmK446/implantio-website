import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { trust } from "@/config/site";

/** A deliberately obvious marker so placeholder content never ships by accident. */
export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-2 rounded-control border border-dashed border-warn/50 bg-warn/[0.06] px-4 py-3 font-mono text-[0.7rem] leading-relaxed text-warn">
      <span aria-hidden>▲</span>
      <span>{children}</span>
    </p>
  );
}

export function Trust() {
  return (
    <Section id="trust" tone="paper">
      <Container size="wide">
        <SectionHeading eyebrow={trust.eyebrow} headline={trust.headline} className="max-w-3xl" />

        <div className="mt-8 max-w-3xl">
          <PlaceholderNote>{trust.placeholderNotice}</PlaceholderNote>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {trust.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 90}>
              <figure className="flex h-full flex-col gap-6 rounded-card border border-line bg-surface p-7">
                <span aria-hidden className="font-display text-3xl leading-none text-accent/40">
                  &ldquo;
                </span>
                <blockquote className="flex-1 text-[0.98rem] leading-relaxed text-body">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="border-t border-line pt-5 text-sm">
                  <p className="font-medium text-ink">{testimonial.name}</p>
                  <p className="text-muted">{testimonial.role}</p>
                  <p className="font-mono text-xs text-muted/80">{testimonial.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Case studies */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {trust.caseStudies.map((study, index) => (
            <Reveal key={study.headline} delay={index * 90}>
              <article className="flex h-full flex-col gap-5 rounded-card border border-line bg-surface p-7">
                <p className="t-label text-muted">{study.practice}</p>
                <h3 className="t-h3 text-ink">{study.headline}</h3>
                <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-line pt-5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="font-mono text-sm text-ink">{metric.value}</dd>
                      <dt className="mt-1 text-xs leading-snug text-muted">{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Security */}
        <div className="mt-16 grid gap-10 rounded-card border border-line bg-surface p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <h3 className="t-h3 text-ink">{trust.security.title}</h3>
            <p className="max-w-prose text-sm leading-relaxed text-muted">{trust.security.body}</p>
            <PlaceholderNote>{trust.security.note}</PlaceholderNote>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
            {trust.security.items.map((item) => (
              <li key={item.title} className="flex flex-col gap-1.5 bg-surface p-5">
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="text-xs leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Integrations */}
        <div className="mt-6 flex flex-col gap-6 rounded-card border border-line bg-surface p-8 sm:p-10">
          <div className="flex flex-col gap-3">
            <h3 className="t-h3 text-ink">{trust.integrations.title}</h3>
            <p className="max-w-prose text-sm leading-relaxed text-muted">
              {trust.integrations.body}
            </p>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {trust.integrations.items.map((item) => (
              <li
                key={item}
                className="rounded-control border border-line bg-paper px-4 py-2.5 font-mono text-xs text-body/75"
              >
                {item}
              </li>
            ))}
          </ul>

          <PlaceholderNote>{trust.integrations.note}</PlaceholderNote>
        </div>
      </Container>
    </Section>
  );
}
