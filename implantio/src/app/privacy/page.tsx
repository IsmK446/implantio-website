import type { Metadata } from "next";

import { PlaceholderNote } from "@/components/sections/trust";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { company, contact, privacy } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${company.name} handles practice and patient data.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section tone="paper" spacing="tight" className="pt-14 sm:pt-16">
      <Container size="narrow">
        <div className="flex flex-col gap-6">
          <Eyebrow>{privacy.eyebrow}</Eyebrow>
          <h1 className="t-h2 text-ink">{privacy.headline}</h1>
          <p className="font-mono text-xs text-muted">Last updated: {privacy.lastUpdated}</p>
          <PlaceholderNote>{privacy.notice}</PlaceholderNote>
        </div>

        {/* Contents */}
        <nav aria-label="On this page" className="mt-12 rounded-card border border-line bg-surface p-6">
          <p className="t-label mb-4 text-muted">On this page</p>
          <ol className="flex flex-col gap-2">
            {privacy.sections.map((section, index) => (
              <li key={section.id} className="flex gap-3 text-sm">
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <a href={`#${section.id}`} className="text-body transition-colors hover:text-accent">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 flex flex-col gap-12">
          {privacy.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="t-h3 text-ink">{section.title}</h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-line pt-10">
            <h2 className="t-h3 text-ink">Contact us about your data</h2>
            <p className="mt-4 text-base leading-relaxed text-body">
              Write to{" "}
              <a href={`mailto:${contact.email}`} className="text-accent underline underline-offset-2">
                {contact.email}
              </a>{" "}
              and we will respond within one month, as required under the GDPR.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
