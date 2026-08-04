import type { Metadata } from "next";

import { DemoForm } from "@/components/forms/demo-form";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { StatusDot } from "@/components/ui/status-dot";
import { company, contact, demo } from "@/config/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description: demo.body,
  alternates: { canonical: "/demo" },
  openGraph: { title: `Book a demo — ${company.name}`, description: demo.body },
};

export default function DemoPage() {
  return (
    <Section tone="paper" spacing="tight" className="pt-14 sm:pt-16">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* What they're signing up for */}
          <div className="flex flex-col gap-9 lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-6">
              <Eyebrow>{demo.eyebrow}</Eyebrow>
              <h1 className="t-h2 text-ink">{demo.headline}</h1>
              <p className="text-lg leading-relaxed text-muted">{demo.body}</p>
            </div>

            <div className="rounded-card border border-line bg-surface p-6">
              <p className="t-label mb-4 text-muted">The 20 minutes covers</p>
              <ol className="flex flex-col gap-3">
                {demo.agenda.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-0.5 font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <ul className="flex flex-col gap-4">
              {demo.reassurance.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <StatusDot tone="accent" className="mt-2" />
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="text-sm text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line pt-6 text-sm text-muted">
              <p>Would rather talk now?</p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="mt-1 block font-mono text-base text-ink transition-colors hover:text-accent"
              >
                {contact.phone}
              </a>
              <p className="mt-3 text-xs">{contact.hours}</p>
            </div>
          </div>

          <DemoForm />
        </div>
      </Container>
    </Section>
  );
}
