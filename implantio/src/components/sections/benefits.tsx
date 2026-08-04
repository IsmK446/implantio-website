import {
  BarChart3,
  CalendarCheck,
  Filter,
  Phone,
  PhoneMissed,
  Repeat2,
  Users,
  Zap,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { benefits } from "@/config/site";

/** Add a new icon here if you add a benefit with a new `icon` value. */
const icons = {
  phone: Phone,
  zap: Zap,
  filter: Filter,
  calendar: CalendarCheck,
  "phone-missed": PhoneMissed,
  repeat: Repeat2,
  users: Users,
  "bar-chart": BarChart3,
} as const;

export function Benefits() {
  return (
    <Section id="benefits" tone="surface">
      <Container size="wide">
        <SectionHeading eyebrow={benefits.eyebrow} headline={benefits.headline} />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal as="li" key={item.title} delay={(index % 4) * 70}>
                <div className="group flex h-full flex-col gap-3 bg-surface p-6 transition-colors duration-300 hover:bg-accent-tint/50">
                  <span className="flex h-10 w-10 items-center justify-center rounded-control bg-accent-tint text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
