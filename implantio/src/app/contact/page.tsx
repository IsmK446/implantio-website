import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";
import { company, contact, contactPage } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.body,
  alternates: { canonical: "/contact" },
  openGraph: { title: `Contact — ${company.name}`, description: contactPage.body },
};

export default function ContactPage() {
  return (
    <Section tone="paper" spacing="tight" className="pt-14 sm:pt-16">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-6">
              <Eyebrow>{contactPage.eyebrow}</Eyebrow>
              <h1 className="t-h2 text-ink">{contactPage.headline}</h1>
              <p className="text-lg leading-relaxed text-muted">{contactPage.body}</p>
            </div>

            <dl className="flex flex-col gap-6 border-t border-line pt-8">
              <div>
                <dt className="t-label text-muted">Email</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${contact.email}`} className="text-ink transition-colors hover:text-accent">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="t-label text-muted">Phone</dt>
                <dd className="mt-1.5">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="font-mono text-ink transition-colors hover:text-accent"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              {contact.address.length ? (
                <div>
                  <dt className="t-label text-muted">Office</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-body">
                    {contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="t-label text-muted">Hours</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-body">{contact.hours}</dd>
              </div>
              {contact.social.length ? (
                <div>
                  <dt className="t-label text-muted">Elsewhere</dt>
                  <dd className="mt-1.5 flex gap-4 text-sm">
                    {contact.social.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="text-ink underline underline-offset-4 transition-colors hover:text-accent"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
