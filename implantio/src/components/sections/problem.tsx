import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { problem } from "@/config/site";

export function Problem() {
  return (
    <Section id="problem" tone="ink">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-field opacity-60" />

      <Container size="wide" className="relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow={problem.eyebrow}
              headline={problem.headline}
              body={problem.body}
              tone="dark"
            />

            <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {problem.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 90}>
                  <div className="border-t border-ink-line pt-4">
                    <dd className="font-display text-3xl font-bold tracking-display text-white">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-sm text-white/75">{stat.label}</dt>
                    <p className="mt-1 font-mono text-[0.7rem] text-white/45">{stat.note}</p>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* The day, as your phone system sees it */}
          <Reveal className="flex flex-col gap-5">
            <div className="panel-dark overflow-hidden">
              <div className="flex items-center justify-between border-b border-ink-line px-5 py-3.5">
                <p className="t-label text-white/50">Where the calls go</p>
                <p className="font-mono text-[0.7rem] text-white/40">A typical week</p>
              </div>

              <ul className="divide-y divide-ink-line/70">
                {problem.moments.map((moment, index) => (
                  <li
                    key={moment.time}
                    className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="w-12 shrink-0 font-mono text-xs text-white/50">{moment.time}</span>
                    <span className="flex-1 text-sm text-white/80">{moment.text}</span>
                    <span
                      className={
                        index === problem.moments.length - 2
                          ? "rounded-pill border border-warn/40 bg-warn/15 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-label text-warn"
                          : "rounded-pill border border-ink-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-label text-white/45"
                      }
                    >
                      Missed
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="max-w-prose border-l-2 border-warn/60 pl-5 text-base leading-relaxed text-white/80">
              {problem.closing}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
