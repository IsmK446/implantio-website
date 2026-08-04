"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { faq } from "@/config/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="surface">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionHeading
            eyebrow={faq.eyebrow}
            headline={faq.headline}
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <div className="divide-y divide-line border-y border-line">
            {faq.items.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent"
                    >
                      <span className="font-display text-base font-semibold text-ink sm:text-lg">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className="relative mt-1.5 h-4 w-4 shrink-0 text-accent"
                      >
                        <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                        <span
                          className={cn(
                            "absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300",
                            isOpen ? "scale-y-0" : "scale-y-100",
                          )}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    hidden={!isOpen}
                  >
                    <p className="max-w-prose pb-6 pr-10 text-[0.95rem] leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
