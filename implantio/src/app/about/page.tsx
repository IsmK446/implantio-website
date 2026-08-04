import type { Metadata } from "next";

import { PlaceholderNote } from "@/components/sections/trust";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { about, company } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: about.intro.slice(0, 155),
  alternates: { canonical: "/about" },
  openGraph: { title: `About — ${company.name}`, description: about.intro.slice(0, 155) },
};

export default function AboutPage() {
  return (
    <>
      <Section tone="paper" spacing="tight" className="pt-16 sm:pt-20">
        <Container>
          <div className="flex flex-col gap-7">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h1 className="t-display max-w-[14ch] text-ink">{about.headline}</h1>
            <p className="t-lead max-w-prose text-muted">{about.intro}</p>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-5">
              {about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="max-w-prose text-base leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
              {about.values.map((value, index) => (
                <Reveal as="li" key={value.title} delay={index * 80}>
                  <div className="flex h-full flex-col gap-2 bg-surface p-6">
                    <h2 className="font-display text-base font-semibold text-ink">{value.title}</h2>
                    <p className="text-sm leading-relaxed text-muted">{value.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="flex flex-col gap-8">
            <h2 className="t-h2 text-ink">{about.team.title}</h2>
            <div className="max-w-2xl">
              <PlaceholderNote>{about.team.note}</PlaceholderNote>
            </div>
            <ul className="grid gap-6 sm:grid-cols-3">
              {about.team.members.map((member) => (
                <li key={member.name} className="flex flex-col gap-4 rounded-card border border-line bg-surface p-6">
                  <span
                    aria-hidden
                    className="h-16 w-16 rounded-full border border-line bg-paper"
                  />
                  <div>
                    <p className="font-medium text-ink">{member.name}</p>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="tight">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3">
              <h2 className="t-h3 text-white">{about.cta.headline}</h2>
              <p className="max-w-prose text-white/70">{about.cta.body}</p>
            </div>
            <Button href="/demo" size="lg" variant="onDark" className="shrink-0">
              Book your demo
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
