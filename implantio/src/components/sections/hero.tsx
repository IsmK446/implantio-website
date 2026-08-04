import { CallPanel } from "@/components/sections/call-panel";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { hero } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-14 sm:pb-28 sm:pt-20">
      {/* Ambient wash — kept very quiet so the call panel carries the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem]"
        style={{
          background:
            "radial-gradient(50% 55% at 82% 12%, rgb(var(--c-accent) / 0.10), transparent 68%)",
        }}
      />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-7">
            <Eyebrow>{hero.eyebrow}</Eyebrow>

            <h1 className="t-display max-w-[16ch] text-ink">{hero.headline}</h1>

            <p className="t-lead max-w-prose text-muted">{hero.subheadline}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <p className="font-mono text-xs leading-relaxed text-muted">{hero.reassurance}</p>

            <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-bold tracking-display text-ink sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <CallPanel />
        </div>
      </Container>
    </section>
  );
}
