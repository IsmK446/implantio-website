"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { StatusDot } from "@/components/ui/status-dot";
import { company, nav } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-surface/85 backdrop-blur-md transition-colors duration-300",
        scrolled || open ? "border-line shadow-[0_1px_0_rgb(var(--c-line))]" : "border-transparent",
      )}
    >
      <Container size="wide">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label={`${company.name} home`}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-control px-3 py-2 text-[0.9rem] text-body/80 transition-colors hover:bg-accent-tint hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-xs text-muted xl:flex">
              <StatusDot />
              Lines answered 24/7
            </span>
            <Button href={nav.cta.href} size="sm" className="hidden sm:inline-flex">
              {nav.cta.label}
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-control border border-line text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-4 w-5" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-5 bg-ink transition-transform duration-300",
                    open ? "top-[7px] rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-[1.5px] w-5 bg-ink transition-opacity duration-200",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-5 bg-ink transition-transform duration-300",
                    open ? "top-[7px] -rotate-45" : "top-[14px]",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-line bg-surface lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
        style={{ transition: "max-height 350ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <Container size="wide">
          <nav aria-label="Mobile" className="flex flex-col gap-1 py-5">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-control px-3 py-3 text-base text-body transition-colors hover:bg-accent-tint hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Button href={nav.cta.href} size="lg" className="mt-3 w-full">
              {nav.cta.label}
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
