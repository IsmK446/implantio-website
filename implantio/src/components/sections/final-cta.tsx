import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StatusDot } from "@/components/ui/status-dot";
import { finalCta } from "@/config/site";

export function FinalCta() {
  return (
    <Section tone="ink" spacing="loose" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 70% at 50% 100%, rgb(var(--c-accent) / 0.22), transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-7 text-center">
          <span className="flex items-center gap-2 rounded-pill border border-ink-line px-4 py-2 font-mono text-[0.68rem] uppercase tracking-label text-white/60">
            <StatusDot />
            Someone is answering right now
          </span>

          <h2 className="t-h2 max-w-[18ch] text-white">{finalCta.headline}</h2>

          <p className="max-w-prose text-lg leading-relaxed text-white/70">{finalCta.body}</p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href={finalCta.cta.href} size="lg" variant="onDark">
              {finalCta.cta.label}
            </Button>
            <Button
              href={finalCta.secondary.href}
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              {finalCta.secondary.label}
            </Button>
          </div>

          <p className="font-mono text-xs text-white/45">{finalCta.reassurance}</p>
        </div>
      </Container>
    </Section>
  );
}
