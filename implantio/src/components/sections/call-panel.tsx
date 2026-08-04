"use client";

import { useEffect, useState } from "react";

import { StatusDot } from "@/components/ui/status-dot";
import { heroCall } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * The signature element of the site: a real evening enquiry playing out the way
 * a practice owner would recognise it — the call comes in after hours, the
 * questions get answered, the qualification card fills, the slot is booked.
 *
 * Everything it says comes from `heroCall` in src/config/site.ts.
 */

const LINE_DELAY = 1500;
const ROW_DELAY = 380;
const OUTCOME_DELAY = 700;

export function CallPanel() {
  const { transcript, qualification } = heroCall;
  const totalSteps = transcript.length + qualification.length + 1;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setStep(totalSteps);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const advance = (current: number) => {
      if (current >= totalSteps) return;
      const delay =
        current < transcript.length
          ? LINE_DELAY
          : current < transcript.length + qualification.length
            ? ROW_DELAY
            : OUTCOME_DELAY;

      timer = setTimeout(() => {
        setStep(current + 1);
        advance(current + 1);
      }, delay);
    };

    // A short beat before the call "connects"
    timer = setTimeout(() => {
      setStep(1);
      advance(1);
    }, 600);

    return () => clearTimeout(timer);
  }, [totalSteps, transcript.length, qualification.length]);

  const visibleLines = transcript.slice(0, step);
  const visibleRows = Math.max(0, Math.min(step - transcript.length, qualification.length));
  const showOutcome = step >= totalSteps;

  return (
    <div className="relative">
      {/* Soft glow behind the panel */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 20%, rgb(var(--c-accent) / 0.22), transparent 70%)",
        }}
      />

      <div className="overflow-hidden rounded-card border border-ink-line bg-ink shadow-lift">
        {/* Call header */}
        <div className="flex items-center justify-between gap-4 border-b border-ink-line px-5 py-4">
          <div className="flex items-center gap-3">
            <StatusDot />
            <div className="flex flex-col">
              <span className="t-label text-white/50">{heroCall.callerLabel}</span>
              <span className="font-mono text-sm text-white">{heroCall.callerNumber}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-white/50">{heroCall.callerTime}</p>
            <p className="text-xs text-white/70">{heroCall.practiceName}</p>
          </div>
        </div>

        {/* Transcript */}
        <div
          className="flex min-h-[19rem] flex-col gap-3 px-5 py-5"
          aria-live="polite"
          aria-atomic="false"
        >
          {visibleLines.map((line, index) => {
            const isPractice = line.speaker === "implantio";
            const isLatest = index === visibleLines.length - 1 && step <= transcript.length;
            return (
              <div
                key={index}
                className={cn(
                  "animate-fade-up max-w-[85%] rounded-card px-4 py-3 text-[0.92rem] leading-relaxed",
                  isPractice
                    ? "self-end border border-accent/35 bg-accent/15 text-white"
                    : "self-start border border-ink-line bg-white/[0.04] text-white/75",
                )}
              >
                <span className="t-label mb-1.5 block text-[0.6rem] text-white/40">
                  {isPractice ? "Implantio" : "Patient"}
                </span>
                {line.text}
                {isLatest && isPractice ? (
                  <span className="ml-1 inline-block h-4 w-[2px] translate-y-[3px] animate-caret-blink bg-accent" />
                ) : null}
              </div>
            );
          })}

          {step === 0 ? (
            <p className="m-auto font-mono text-xs text-white/40">Connecting…</p>
          ) : null}
        </div>

        {/* Qualification card */}
        <div className="border-t border-ink-line bg-ink-soft px-5 py-4">
          <p className="t-label mb-3 text-white/45">Captured on the call</p>
          <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {qualification.map((item, index) => {
              const filled = index < visibleRows;
              return (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-baseline justify-between gap-3 border-b border-ink-line/60 py-1.5 transition-opacity duration-500",
                    filled ? "opacity-100" : "opacity-25",
                  )}
                >
                  <dt className="text-xs text-white/50">{item.label}</dt>
                  <dd className="font-mono text-xs text-white">
                    {filled ? item.value : <span className="text-white/30">—</span>}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Outcome */}
        <div
          className={cn(
            "flex items-center gap-3 border-t px-5 py-4 transition-all duration-500",
            showOutcome
              ? "border-signal/40 bg-signal/15 opacity-100"
              : "border-ink-line bg-ink opacity-40",
          )}
        >
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
              showOutcome ? "bg-signal text-white" : "bg-white/10 text-white/40",
            )}
            aria-hidden
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-medium text-white">{heroCall.outcome.label}</p>
            <p className="font-mono text-xs text-white/60">{heroCall.outcome.detail}</p>
          </div>
        </div>
      </div>

      {/* A quiet note so nobody mistakes the demo for a real patient */}
      <p className="mt-3 text-center font-mono text-[0.68rem] uppercase tracking-label text-muted">
        Illustrative call · Patient details fictional
      </p>
    </div>
  );
}
