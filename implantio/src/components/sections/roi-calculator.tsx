"use client";

import { useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { roi } from "@/config/site";
import { track } from "@/lib/analytics";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";

/**
 * The model deliberately compounds three conservative rates rather than showing
 * one flattering number. Practice owners check arithmetic — showing the working
 * is what makes the figure credible.
 */
const models = {
  conservative: { label: "Conservative", answered: 0.6, consult: 0.25, accept: 0.3 },
  typical: { label: "Typical", answered: 0.75, consult: 0.35, accept: 0.4 },
  optimistic: { label: "Optimistic", answered: 0.85, consult: 0.45, accept: 0.5 },
} as const;

type ModelKey = keyof typeof models;

export function RoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(roi.defaults.missedCallsPerMonth);
  const [caseValue, setCaseValue] = useState(roi.defaults.averageCaseValue);
  const [monthlyCost, setMonthlyCost] = useState(roi.defaults.monthlyCost);
  const [model, setModel] = useState<ModelKey>("typical");
  const hasTracked = useRef(false);

  const onInteract = () => {
    if (hasTracked.current) return;
    hasTracked.current = true;
    track("roi_calculator_used");
  };

  const result = useMemo(() => {
    const rates = models[model];
    const recovered = missedCalls * rates.answered;
    const consultations = recovered * rates.consult;
    const cases = consultations * rates.accept;
    const monthlyRevenue = cases * caseValue;
    const net = monthlyRevenue - monthlyCost;
    const multiple = monthlyCost > 0 ? monthlyRevenue / monthlyCost : 0;
    const paybackDays = monthlyRevenue > 0 ? Math.max(1, Math.round((monthlyCost / monthlyRevenue) * 30)) : null;

    return {
      recovered,
      consultations,
      cases,
      monthlyRevenue,
      annualRevenue: monthlyRevenue * 12,
      net,
      multiple,
      paybackDays,
      rates,
    };
  }, [missedCalls, caseValue, monthlyCost, model]);

  const sliderClass =
    "h-1.5 w-full cursor-pointer appearance-none rounded-pill bg-line accent-[rgb(var(--c-accent))]";

  return (
    <Section id="roi" tone="surface">
      <Container size="wide">
        <SectionHeading
          eyebrow={roi.eyebrow}
          headline={roi.headline}
          body={roi.body}
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Inputs */}
          <Reveal>
            <div className="flex h-full flex-col gap-8 rounded-card border border-line bg-paper p-7 sm:p-9">
              <div className="flex flex-col gap-3">
                <span className="t-label text-muted" id="model-label">
                  Assumption set
                </span>
                <div
                  role="radiogroup"
                  aria-labelledby="model-label"
                  className="inline-flex w-fit rounded-control border border-line bg-surface p-1"
                >
                  {(Object.keys(models) as ModelKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      role="radio"
                      aria-checked={model === key}
                      onClick={() => {
                        setModel(key);
                        onInteract();
                      }}
                      className={cn(
                        "rounded-[calc(var(--radius-control)-2px)] px-4 py-2 text-sm transition-colors",
                        model === key ? "bg-ink text-white" : "text-muted hover:text-ink",
                      )}
                    >
                      {models[key].label}
                    </button>
                  ))}
                </div>
              </div>

              <SliderRow
                id="missed-calls"
                label="Calls you currently miss each month"
                value={missedCalls}
                display={`${missedCalls}`}
                min={roi.ranges.missedCallsPerMonth.min}
                max={roi.ranges.missedCallsPerMonth.max}
                step={roi.ranges.missedCallsPerMonth.step}
                onChange={(value) => {
                  setMissedCalls(value);
                  onInteract();
                }}
                className={sliderClass}
                hint="Unanswered, after-hours and voicemail calls combined. Your phone provider can export this."
              />

              <SliderRow
                id="case-value"
                label="Average value of one accepted case"
                value={caseValue}
                display={formatCurrency(caseValue, roi.currency)}
                min={roi.ranges.averageCaseValue.min}
                max={roi.ranges.averageCaseValue.max}
                step={roi.ranges.averageCaseValue.step}
                onChange={(value) => {
                  setCaseValue(value);
                  onInteract();
                }}
                className={sliderClass}
                hint="Use your implant or cosmetic case average, not your overall patient average."
              />

              <SliderRow
                id="monthly-cost"
                label="Implantio cost per month"
                value={monthlyCost}
                display={formatCurrency(monthlyCost, roi.currency)}
                min={roi.ranges.monthlyCost.min}
                max={roi.ranges.monthlyCost.max}
                step={roi.ranges.monthlyCost.step}
                onChange={(value) => {
                  setMonthlyCost(value);
                  onInteract();
                }}
                className={sliderClass}
                hint="Set this to the plan you're considering."
              />
            </div>
          </Reveal>

          {/* Result */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col overflow-hidden rounded-card border border-ink-line bg-ink">
              <div className="border-b border-ink-line px-7 py-6 sm:px-9">
                <p className="t-label text-white/45">Recovered treatment value</p>
                <p
                  className="mt-2 font-display text-4xl font-bold tracking-display text-white sm:text-5xl"
                  aria-live="polite"
                >
                  {formatCurrency(result.monthlyRevenue, roi.currency)}
                  <span className="ml-2 font-sans text-base font-normal tracking-normal text-white/50">
                    / month
                  </span>
                </p>
                <p className="mt-2 font-mono text-xs text-white/50">
                  {formatCurrency(result.annualRevenue, roi.currency)} across a year ·{" "}
                  {result.multiple >= 1
                    ? `${result.multiple.toFixed(1)}× the subscription`
                    : "below the subscription cost"}
                </p>
              </div>

              {/* The working, step by step */}
              <dl className="flex-1 divide-y divide-ink-line/70 px-7 sm:px-9">
                <WorkingRow
                  label="Calls reached or answered"
                  sub={`${formatPercent(result.rates.answered)} of missed calls`}
                  value={result.recovered.toFixed(0)}
                />
                <WorkingRow
                  label="Consultations booked"
                  sub={`${formatPercent(result.rates.consult)} of those calls`}
                  value={result.consultations.toFixed(1)}
                />
                <WorkingRow
                  label="Cases accepted"
                  sub={`${formatPercent(result.rates.accept)} of consultations`}
                  value={result.cases.toFixed(1)}
                />
                <WorkingRow
                  label="Net of subscription"
                  sub={`After ${formatCurrency(monthlyCost, roi.currency)} per month`}
                  value={formatCurrency(result.net, roi.currency)}
                  emphasis={result.net > 0 ? "positive" : "negative"}
                />
                {result.paybackDays ? (
                  <WorkingRow
                    label="Pays for itself in"
                    sub="Based on this month's model"
                    value={`${result.paybackDays} ${result.paybackDays === 1 ? "day" : "days"}`}
                  />
                ) : null}
              </dl>

              <div className="border-t border-ink-line px-7 py-6 sm:px-9">
                <Button href="/demo" variant="onDark" size="md" className="w-full sm:w-auto">
                  Model this with my real numbers
                </Button>
                <p className="mt-4 text-xs leading-relaxed text-white/45">{roi.disclaimer}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function SliderRow({
  id,
  label,
  hint,
  value,
  display,
  min,
  max,
  step,
  onChange,
  className,
}: {
  id: string;
  label: string;
  hint: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  className: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        <output htmlFor={id} className="font-mono text-lg font-medium text-ink">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className={className}
      />
      <p className="text-xs leading-relaxed text-muted">{hint}</p>
    </div>
  );
}

function WorkingRow({
  label,
  sub,
  value,
  emphasis,
}: {
  label: string;
  sub: string;
  value: string;
  emphasis?: "positive" | "negative";
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-4">
      <div>
        <dt className="text-sm text-white/85">{label}</dt>
        <p className="font-mono text-[0.7rem] text-white/40">{sub}</p>
      </div>
      <dd
        className={cn(
          "font-mono text-base",
          emphasis === "positive" && "text-signal",
          emphasis === "negative" && "text-warn",
          !emphasis && "text-white",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
