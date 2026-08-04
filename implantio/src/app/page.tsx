import type { Metadata } from "next";

import { Benefits } from "@/components/sections/benefits";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { Problem } from "@/components/sections/problem";
import { RoiCalculator } from "@/components/sections/roi-calculator";
import { Solution } from "@/components/sections/solution";
import { Specialties } from "@/components/sections/specialties";
import { Trust } from "@/components/sections/trust";
import { faq, seo } from "@/config/site";

export const metadata: Metadata = {
  title: seo.defaultTitle,
  description: seo.description,
  alternates: { canonical: "/" },
};

/** Rich result for the FAQ block, built from the same config the page renders. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Specialties />
      <RoiCalculator />
      <HowItWorks />
      <Trust />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
