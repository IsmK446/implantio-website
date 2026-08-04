import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { Container } from "@/components/ui/container";
import { company, contact, nav } from "@/config/site";
import { showThemeSwitcher } from "@/config/themes";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink text-white/70">
      <Container size="wide">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <Logo tone="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-white/60">{company.tagline}. {company.shortDescription}</p>
            <div className="flex flex-col gap-1 text-sm">
              <a href={`mailto:${contact.email}`} className="w-fit text-white/80 transition-colors hover:text-white">
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="w-fit font-mono text-white/80 transition-colors hover:text-white"
              >
                {contact.phone}
              </a>
            </div>
            {showThemeSwitcher ? <ThemeSwitcher /> : null}
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {nav.footer.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <p className="t-label text-white/45">{group.title}</p>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-line py-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="font-mono">
            Implantio does not provide clinical advice. Emergencies are routed to your practice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
