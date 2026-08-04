/**
 * ============================================================================
 *  SITE CONFIGURATION
 * ============================================================================
 *  This is the file a non-developer edits. Almost every word, number, link and
 *  price on the website is defined here. Nothing below requires code knowledge:
 *  change the text between the quote marks and save.
 *
 *  Anything marked PLACEHOLDER must be replaced with real, verifiable content
 *  before the site goes live.
 * ============================================================================
 */

export const company = {
  name: "Implantio",
  tagline: "An AI receptionist built for high-value dental practices",
  /** Used in page titles: "Page name — Implantio" */
  shortDescription:
    "Implantio answers every patient enquiry, qualifies it, and books the consultation — so implant and cosmetic practices stop losing cases to the voicemail.",
  /** No trailing slash. Also set NEXT_PUBLIC_SITE_URL in your hosting dashboard. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://implantio.com",
  foundedYear: 2024,
  /** Used in the footer copyright line */
  legalName: "Implantio Ltd.",
};

export const contact = {
  email: "hello@implantio.com",
  salesEmail: "demo@implantio.com",
  phone: "+353 1 234 5678",
  /** Displayed on the contact page. Use "" to hide the address block. */
  address: ["Implantio Ltd.", "12 Merrion Square", "Dublin 2, Ireland"],
  hours: "Monday to Friday, 09:00–18:00 (IST). Your practice line is covered 24/7.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/implantio" },
  ],
};

export const nav = {
  /** Header links. Anchors (#problem) scroll on the homepage. */
  primary: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Why Implantio", href: "/#benefits" },
    { label: "Return", href: "/#roi" },
    { label: "Pricing", href: "/#pricing" },
    { label: "About", href: "/about" },
  ],
  /** The button in the top-right corner. This is the site's main goal. */
  cta: { label: "Book your demo", href: "/demo" },
  footer: [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "/#how-it-works" },
        { label: "Why practices use it", href: "/#benefits" },
        { label: "Return on investment", href: "/#roi" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Questions", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Book a demo", href: "/demo" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Data processing", href: "/privacy#processing" },
      ],
    },
  ],
};

/* ==========================================================================
 *  HOMEPAGE — HERO
 * ========================================================================== */

export const hero = {
  eyebrow: "For implant, cosmetic and orthodontic practices",
  headline: "Turn missed dental calls into booked consultations",
  subheadline:
    "Implantio answers every enquiry, qualifies the patient, and books the consultation — so the implant case that rang at 19:40 is in your diary before morning huddle.",
  primaryCta: { label: "Book your demo", href: "/demo" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  /** Small proof line under the buttons */
  reassurance: "20-minute demo · Uses your real call scenarios · No system change required",
  /** The three figures beside the hero panel. Keep them short. */
  stats: [
    { value: "24/7", label: "Line answered" },
    { value: "< 2 rings", label: "Pick-up time" },
    { value: "6 weeks", label: "Typical payback" },
  ],
};

/**
 * The live call panel in the hero. This is a scripted demonstration — write it
 * the way your best receptionist actually speaks.
 */
export const heroCall = {
  callerLabel: "Incoming call",
  callerNumber: "+353 87 •• •• 412",
  callerTime: "Tuesday, 19:41",
  practiceName: "Merrion Dental Studio",
  transcript: [
    { speaker: "patient" as const, text: "Hi — do you do dental implants? I lost a molar last year." },
    {
      speaker: "implantio" as const,
      text: "We do. I can book you a consultation with Dr. Byrne. Is the gap on the upper or lower jaw?",
    },
    { speaker: "patient" as const, text: "Lower right. How much would something like that cost?" },
    {
      speaker: "implantio" as const,
      text: "A single implant with a crown starts at €2,450, and the consultation with a CBCT scan is €150. There's a Thursday at 10:20 or a Saturday at 09:00 — which suits?",
    },
    { speaker: "patient" as const, text: "Saturday morning, please." },
  ],
  /** The qualification card that fills in beside the transcript */
  qualification: [
    { label: "Treatment", value: "Single implant" },
    { label: "Site", value: "Lower right, #46" },
    { label: "Timeframe", value: "Within 4 weeks" },
    { label: "Source", value: "Google Ads — implants" },
    { label: "Est. case value", value: "€2,450" },
  ],
  outcome: {
    label: "Consultation booked",
    detail: "Saturday 09:00 · Dr. Byrne · Confirmed by SMS",
  },
};

/* ==========================================================================
 *  HOMEPAGE — THE PROBLEM
 * ========================================================================== */

export const problem = {
  eyebrow: "The quiet leak",
  headline: "You already paid for the call. You just weren't there to answer it.",
  body: "Practices spend thousands a month on Google Ads, SEO and referral marketing to make the phone ring. The spend buys the ring. Nothing in that budget covers the moment nobody picks up — and that moment is where high-value cases are lost.",
  /** Replace with your own audited figures before launch. */
  stats: [
    {
      value: "1 in 4",
      label: "Practice calls go unanswered",
      note: "Peak times: lunch cover, end of day, Saturdays",
    },
    {
      value: "62%",
      label: "Of callers never ring back",
      note: "They call the next practice on the results page",
    },
    {
      value: "€2,450+",
      label: "Value of one missed implant case",
      note: "Before considering the full treatment plan",
    },
  ],
  /** The moments when calls actually get missed. Specific beats generic. */
  moments: [
    { time: "07:40", text: "Before the first nurse arrives" },
    { time: "12:15", text: "Both reception staff on lunch cover" },
    { time: "14:30", text: "Your receptionist is chairside, gowned up" },
    { time: "17:55", text: "Phones diverted, cleaning down" },
    { time: "19:41", text: "The evening Google Ads click rings out" },
    { time: "Sat", text: "Weekend enquiries land in voicemail" },
  ],
  closing:
    "A voicemail is not a lead. By the time you play it back on Monday, the patient has already booked somewhere else.",
};

/* ==========================================================================
 *  HOMEPAGE — THE SOLUTION FLOW
 * ========================================================================== */

export const solution = {
  eyebrow: "What Implantio is",
  headline: "An AI receptionist trained on dental enquiries — not a chatbot",
  body: "Implantio picks up your overflow, after-hours and missed calls in your practice's name. It speaks like your front desk, knows your treatments and prices, and hands you a qualified patient with the consultation already in the diary.",
  flow: [
    { title: "Patient calls", detail: "Overflow, after-hours, or a call your team can't reach" },
    { title: "Implantio answers", detail: "In your practice name, within two rings" },
    { title: "Questions answered", detail: "Treatments, pricing bands, parking, finance" },
    { title: "Patient qualified", detail: "Treatment interest, urgency, source, case value" },
    { title: "Consultation booked", detail: "Written into your diary, confirmed by SMS" },
  ],
};

/* ==========================================================================
 *  HOMEPAGE — BENEFIT CARDS
 * ========================================================================== */

export const benefits = {
  eyebrow: "Why practices keep it",
  headline: "Eight things that stop happening the week you switch it on",
  items: [
    {
      icon: "phone" as const,
      title: "24/7 call answering",
      body: "Evenings, lunch cover, weekends and bank holidays. The line is never a voicemail again.",
    },
    {
      icon: "zap" as const,
      title: "Instant patient response",
      body: "Web forms and enquiries get a call back in under a minute, while the patient is still on your site.",
    },
    {
      icon: "filter" as const,
      title: "Implant lead qualification",
      body: "Treatment interest, jaw site, timeframe, budget band and how they found you — captured on every call.",
    },
    {
      icon: "calendar" as const,
      title: "Appointment scheduling",
      body: "Real availability, real slots, written straight into your practice diary with an SMS confirmation.",
    },
    {
      icon: "phone-missed" as const,
      title: "Missed-call recovery",
      body: "Any call your team can't reach is rung back automatically within 60 seconds.",
    },
    {
      icon: "repeat" as const,
      title: "Patient follow-up",
      body: "Unconverted enquiries get a structured follow-up sequence instead of sitting in a notepad.",
    },
    {
      icon: "users" as const,
      title: "Lighter reception workload",
      body: "Your team stops fielding parking and pricing questions and gets back to the patients in front of them.",
    },
    {
      icon: "bar-chart" as const,
      title: "Lead tracking",
      body: "Every enquiry logged by treatment and marketing source, so you can see which ads actually produce cases.",
    },
  ],
};

/* ==========================================================================
 *  HOMEPAGE — DENTAL SPECIALTIES
 * ========================================================================== */

export const specialties = {
  eyebrow: "Built for your case mix",
  headline: "It knows the difference between a chipped veneer and a failing bridge",
  body: "Generic answering services treat every call as an appointment request. Implantio is configured around the treatments that carry your margin.",
  items: [
    {
      name: "Implants",
      claim: "Capture more implant enquiries",
      body: "Handles the questions that decide an implant case: bone grafting, healing time, sedation, full-arch options and staged payment.",
      qualifiers: ["Missing teeth", "Denture wearer", "Referral or self-referred", "CBCT required"],
      valueLabel: "Typical case value",
      value: "€2,450 – €18,000",
    },
    {
      name: "Veneers",
      claim: "Respond instantly to cosmetic prospects",
      body: "Cosmetic enquiries are impulsive and comparison-shopped. Implantio answers the aesthetics, longevity and smile-design questions before the patient clicks the next result.",
      qualifiers: ["Number of units", "Composite or porcelain", "Event deadline", "Photos requested"],
      valueLabel: "Typical case value",
      value: "€4,000 – €12,000",
    },
    {
      name: "Invisalign",
      claim: "Convert more orthodontic consultations",
      body: "Explains treatment length, refinements, retainers and monthly finance — the four questions that stall an aligner booking.",
      qualifiers: ["Crowding or spacing", "Previous ortho", "Finance interest", "Scan appointment"],
      valueLabel: "Typical case value",
      value: "€3,200 – €6,500",
    },
  ],
};

/* ==========================================================================
 *  HOMEPAGE — ROI CALCULATOR
 * ========================================================================== */

export const roi = {
  eyebrow: "The arithmetic",
  headline: "One recovered case usually covers the year",
  body: "Move the sliders to your own numbers. The calculation is deliberately conservative: it only counts calls you currently miss, and only the ones that convert to a paid treatment.",
  /** Starting values for the calculator */
  defaults: {
    missedCallsPerMonth: 40,
    answeredRate: 0.75, // share of missed calls Implantio reaches or answers
    consultRate: 0.35, // share of those that book a consultation
    caseConversion: 0.4, // share of consultations that accept treatment
    averageCaseValue: 2450,
    monthlyCost: 349,
  },
  currency: "€",
  /** Ranges for the sliders — adjust if your market differs */
  ranges: {
    missedCallsPerMonth: { min: 5, max: 200, step: 5 },
    averageCaseValue: { min: 500, max: 20000, step: 50 },
    monthlyCost: { min: 99, max: 1500, step: 10 },
  },
  disclaimer:
    "Illustrative only. Figures depend on your call volume, case mix and treatment acceptance rate. We build this model with your own practice numbers during the demo.",
};

/* ==========================================================================
 *  HOMEPAGE — HOW IT WORKS
 * ========================================================================== */

export const howItWorks = {
  eyebrow: "Five steps, no system change",
  headline: "How a missed call becomes a booked consultation",
  steps: [
    {
      title: "A patient contacts your practice",
      body: "They ring your existing number or submit a form on your website. Nothing changes for them, and nothing changes on your handsets.",
      meta: "Your number, your caller ID",
    },
    {
      title: "Implantio responds instantly",
      body: "It answers overflow and after-hours calls in your practice's name, within two rings. Web enquiries get a call back inside a minute.",
      meta: "Under 60 seconds",
    },
    {
      title: "It answers their questions",
      body: "Treatments, pricing bands, finance, parking, what the consultation involves — all from the script you approve in setup.",
      meta: "Your prices, your wording",
    },
    {
      title: "The patient is guided to a booking",
      body: "It offers real slots from your diary, confirms by SMS, and sends the pre-consultation information the patient needs.",
      meta: "Live diary availability",
    },
    {
      title: "Your team gets a qualified enquiry",
      body: "A written summary, the recording, the treatment interest and the marketing source land in your inbox and practice software.",
      meta: "Before the next morning huddle",
    },
  ],
  setupNote: {
    title: "Setup takes about two weeks",
    body: "Week one: we record your treatment scripts, prices and diary rules. Week two: we run it alongside your team on overflow only, review every call with you, then hand over the after-hours line.",
  },
};

/* ==========================================================================
 *  HOMEPAGE — TRUST
 *  ⚠️ Everything in this block is PLACEHOLDER content. Replace it with real,
 *  consented quotes and audited figures before publishing.
 * ========================================================================== */

export const trust = {
  eyebrow: "Proof",
  headline: "What practices report after 90 days",
  placeholderNotice:
    "PLACEHOLDER — testimonials and case studies below are examples of format only. Replace with real, written-consent quotes and audited practice figures before launch.",
  testimonials: [
    {
      quote:
        "We were losing implant enquiries every evening and never knew the scale of it until we saw the call log. The first month paid for two years of the subscription.",
      name: "PLACEHOLDER — Practice principal",
      role: "PLACEHOLDER — Implant clinic, 3 surgeries",
      location: "PLACEHOLDER — Dublin",
      isPlaceholder: true,
    },
    {
      quote:
        "My reception team was sceptical. They now describe it as a third pair of hands rather than a replacement — they get the phone off their shoulder while they're chairside.",
      name: "PLACEHOLDER — Practice manager",
      role: "PLACEHOLDER — Cosmetic and orthodontic practice",
      location: "PLACEHOLDER — Cork",
      isPlaceholder: true,
    },
    {
      quote:
        "The part I didn't expect was the source tracking. We cut two ad campaigns that were producing calls but never producing cases.",
      name: "PLACEHOLDER — Clinical director",
      role: "PLACEHOLDER — Multi-site group, 4 locations",
      location: "PLACEHOLDER — Galway",
      isPlaceholder: true,
    },
  ],
  caseStudies: [
    {
      practice: "PLACEHOLDER — Implant clinic, 3 surgeries",
      headline: "PLACEHOLDER — 14 recovered consultations in the first month",
      metrics: [
        { label: "Calls recovered", value: "PLACEHOLDER" },
        { label: "Consultations booked", value: "PLACEHOLDER" },
        { label: "Treatment value", value: "PLACEHOLDER" },
      ],
      isPlaceholder: true,
    },
    {
      practice: "PLACEHOLDER — Cosmetic practice, single site",
      headline: "PLACEHOLDER — After-hours enquiries answered for the first time",
      metrics: [
        { label: "After-hours calls", value: "PLACEHOLDER" },
        { label: "Booking rate", value: "PLACEHOLDER" },
        { label: "Payback period", value: "PLACEHOLDER" },
      ],
      isPlaceholder: true,
    },
  ],
  security: {
    title: "Patient data, handled properly",
    body: "Call handling touches patient information, so this is checked before anything else in procurement. Confirm each item with your DPO before publishing.",
    items: [
      { title: "GDPR compliant", body: "Data processing agreement provided as standard. EU data residency." },
      { title: "Encrypted end to end", body: "Recordings and transcripts encrypted in transit and at rest." },
      { title: "Access controlled", body: "Role-based access, full audit trail, configurable retention periods." },
      { title: "Consent captured", body: "Call recording notice and consent handled at the start of every call." },
    ],
    note: "PLACEHOLDER — verify each claim with your Data Protection Officer and legal adviser before publishing. Add certification marks (ISO 27001, Cyber Essentials) only once held.",
  },
  integrations: {
    title: "Works with what you already run",
    body: "Implantio sits alongside your practice management software and phone system. No rip and replace.",
    /** PLACEHOLDER — list only the systems you have genuinely integrated with. */
    items: ["Dentally", "SOE Exact", "Software of Excellence", "Carestream R4", "Google Calendar", "Twilio", "RingCentral", "HubSpot"],
    note: "PLACEHOLDER — confirm each integration before listing it publicly.",
  },
};

/* ==========================================================================
 *  HOMEPAGE — PRICING
 * ========================================================================== */

export const pricing = {
  eyebrow: "Pricing",
  headline: "Priced against one case, not per seat",
  body: "Every plan includes setup, script building, your practice's treatment and pricing rules, and a named account contact. No per-user fees.",
  currency: "€",
  billingNote: "per month, excluding VAT · 30-day rolling after the first three months",
  plans: [
    {
      name: "Starter",
      audience: "For smaller practices testing after-hours cover",
      price: "249",
      priceNote: "up to 150 calls / month",
      features: [
        "After-hours and weekend answering",
        "Missed-call recovery within 60 seconds",
        "Treatment and pricing script for one specialty",
        "Enquiry summaries by email",
        "Call recordings and transcripts",
        "Email support",
      ],
      cta: { label: "Book your demo", href: "/demo" },
      featured: false,
    },
    {
      name: "Growth",
      audience: "For growing implant and cosmetic clinics",
      price: "449",
      priceNote: "up to 500 calls / month",
      features: [
        "Everything in Starter",
        "Daytime overflow answering",
        "Live diary booking into your practice software",
        "Qualification for implants, veneers and aligners",
        "Structured patient follow-up sequences",
        "Marketing source and campaign tracking",
        "Named account contact",
      ],
      cta: { label: "Book your demo", href: "/demo" },
      featured: true,
      badge: "Most practices start here",
    },
    {
      name: "Premium",
      audience: "For multi-location practices and groups",
      price: "Custom",
      priceNote: "unlimited calls, per location",
      features: [
        "Everything in Growth",
        "Multi-site routing and per-location diaries",
        "Group-level reporting across practices",
        "Custom integrations and data exports",
        "Bespoke consent and retention policies",
        "Quarterly performance review with your TCO",
        "Priority support with response SLA",
      ],
      cta: { label: "Talk to us", href: "/contact" },
      featured: false,
    },
  ],
  footnote:
    "All plans include a two-week supervised setup. If Implantio hasn't recovered its own cost by day 90, we'll refund the difference.",
};

/* ==========================================================================
 *  HOMEPAGE — FAQ
 * ========================================================================== */

export const faq = {
  eyebrow: "Before you ask",
  headline: "The questions practice owners actually ask",
  items: [
    {
      question: "Will patients know they're not speaking to my receptionist?",
      answer:
        "Implantio identifies itself as your practice's virtual receptionist at the start of the call, alongside the recording notice. Practices consistently find that patients care far more about being answered at 19:40 than about who answered.",
    },
    {
      question: "Am I replacing my reception team?",
      answer:
        "No. Implantio covers the calls your team can't physically reach — overflow, chairside, lunch cover, evenings and weekends. Your team keeps the relationships and the complex conversations, and stops losing the routine ones.",
    },
    {
      question: "What if it can't answer something?",
      answer:
        "It says so plainly, takes the details, and either transfers to a named team member during hours or flags the enquiry as urgent for the next morning. It never guesses clinical advice.",
    },
    {
      question: "Does it give clinical advice?",
      answer:
        "Never. It handles treatment information, pricing bands and scheduling only. Anything clinical is routed to your team, and dental emergencies follow the escalation rules you set during setup.",
    },
    {
      question: "How does it know my prices and treatments?",
      answer:
        "You give us your price list, treatment descriptions and diary rules in week one of setup. Nothing goes live until you have listened to test calls and signed off on the wording.",
    },
    {
      question: "Do I have to change my phone system?",
      answer:
        "No. You keep your number and handsets. We set a divert rule for after-hours and unanswered calls, which takes your provider around ten minutes.",
    },
    {
      question: "What happens to call recordings and patient data?",
      answer:
        "Recordings and transcripts are encrypted in transit and at rest, held in the EU, and retained for the period you choose. We provide a data processing agreement as standard and act as processor, not controller.",
    },
    {
      question: "How long until it's working?",
      answer:
        "About two weeks. Week one is scripting and diary rules. Week two runs supervised on overflow calls only, reviewed with you daily, before the after-hours line is handed over.",
    },
  ],
};

/* ==========================================================================
 *  HOMEPAGE — FINAL CALL TO ACTION
 * ========================================================================== */

export const finalCta = {
  headline: "Every missed call is a missed opportunity",
  body: "Bring your last month's call report to the demo. We'll show you, on your own numbers, what the unanswered calls were worth — and what Implantio would have done with them.",
  cta: { label: "Book your Implantio demo", href: "/demo" },
  secondary: { label: "Send us a question instead", href: "/contact" },
  reassurance: "20 minutes · No slide deck · A live call with your own scenarios",
};

/* ==========================================================================
 *  ABOUT PAGE
 * ========================================================================== */

export const about = {
  eyebrow: "About Implantio",
  headline: "We built one thing, for one kind of practice",
  intro:
    "Implantio started after a conversation with an implant surgeon who had spent €4,000 in a month on Google Ads and could not say what happened to the calls it produced. The answer, once we pulled the phone records, was that a quarter of them rang out. The marketing was working. The phone wasn't.",
  body: [
    "General-purpose answering services already existed. They took messages. What they could not do was tell an implant enquiry apart from a hygiene reminder, quote a price band with any confidence, or put a consultation into the diary while the patient was still interested.",
    "So we built for the narrow case instead of the broad one. Implantio only serves practices where a single enquiry is worth thousands: implants, veneers, full-arch, aligners. That focus is why the scripts sound like your front desk rather than a call centre, and why the qualification questions are the ones your treatment coordinator would have asked.",
    "We are deliberately small, and we onboard a limited number of practices each month. Every account has a named contact who has listened to your calls.",
  ],
  values: [
    {
      title: "Outcomes over features",
      body: "We report on consultations booked and cases accepted. If those numbers don't move, the product isn't working, whatever the dashboard says.",
    },
    {
      title: "Your voice, not ours",
      body: "Nothing goes live until you have listened to test calls and approved the wording. Your practice's tone is a clinical asset, not a setting.",
    },
    {
      title: "Careful with patient data",
      body: "We act as a data processor, hold data in the EU, and put the processing agreement in front of you before you ask for it.",
    },
    {
      title: "Honest about limits",
      body: "Implantio does not give clinical advice and does not handle emergencies alone. We would rather lose a sale than overstate what it does.",
    },
  ],
  /** PLACEHOLDER — replace with your real team, or delete the section entirely. */
  team: {
    title: "Who you'll deal with",
    note: "PLACEHOLDER — replace with real team members and photos, or remove this section.",
    members: [
      { name: "PLACEHOLDER — Founder", role: "PLACEHOLDER — Product and onboarding" },
      { name: "PLACEHOLDER — Clinical advisor", role: "PLACEHOLDER — Practising implant dentist" },
      { name: "PLACEHOLDER — Account lead", role: "PLACEHOLDER — Practice success" },
    ],
  },
  cta: {
    headline: "See it handle one of your own calls",
    body: "Bring a scenario your team gets weekly. We'll run it live in the demo.",
  },
};

/* ==========================================================================
 *  DEMO PAGE
 * ========================================================================== */

export const demo = {
  eyebrow: "Book a demo",
  headline: "See what your unanswered calls are worth",
  body: "Twenty minutes, with your own call scenarios. We'll run a live enquiry, show you the qualification summary your team would receive, and build the return model on your practice's numbers.",
  agenda: [
    "A live call, using a scenario your practice gets weekly",
    "The enquiry summary and recording your team would receive",
    "Your return model, built on your call volume and case values",
    "Setup timeline, pricing and the data processing agreement",
  ],
  reassurance: [
    { title: "No slide deck", body: "We spend the time on your calls, not our roadmap." },
    { title: "No system change", body: "Nothing to install before or after the demo." },
    { title: "No pressure", body: "If your call volume doesn't justify it, we'll tell you." },
  ],
  form: {
    title: "Request your demo",
    submitLabel: "Book my demo",
    submittingLabel: "Booking…",
    successTitle: "Demo requested",
    successBody:
      "You'll get an email within one working day with two or three times to choose from. If it's urgent, call us directly.",
    errorTitle: "That didn't send",
    errorBody: "Something went wrong on our side. Try again, or email us and we'll pick it up straight away.",
    practiceTypes: [
      "Implant clinic",
      "Cosmetic and veneers",
      "Orthodontics / Invisalign",
      "General practice with high-value treatments",
      "Multi-location group",
      "Other",
    ],
    callVolumes: [
      "Under 200 calls a month",
      "200–500 calls a month",
      "500–1,000 calls a month",
      "Over 1,000 calls a month",
      "Not sure",
    ],
  },
};

/* ==========================================================================
 *  CONTACT PAGE
 * ========================================================================== */

export const contactPage = {
  eyebrow: "Contact",
  headline: "Talk to someone who has listened to dental calls all week",
  body: "Questions about integrations, data processing or whether your call volume justifies it — ask directly. We answer in plain terms.",
  form: {
    title: "Send a message",
    submitLabel: "Send message",
    submittingLabel: "Sending…",
    successTitle: "Message sent",
    successBody: "We reply within one working day, usually sooner.",
    errorTitle: "That didn't send",
    errorBody: "Something went wrong on our side. Try again, or email us directly.",
    topics: [
      "Booking a demo",
      "Pricing and plans",
      "Integrations and phone systems",
      "Data protection and GDPR",
      "Multi-location group enquiry",
      "Something else",
    ],
  },
};

/* ==========================================================================
 *  PRIVACY POLICY
 *  ⚠️ PLACEHOLDER — this is a structural template, not legal advice.
 *  Have it reviewed by a qualified adviser before publishing.
 * ========================================================================== */

export const privacy = {
  eyebrow: "Legal",
  headline: "Privacy policy",
  lastUpdated: "PLACEHOLDER — 1 January 2025",
  notice:
    "PLACEHOLDER — this policy is a structural template only. It is not legal advice. Have it reviewed by a qualified data protection adviser, and reconcile it with your data processing agreement, before publishing.",
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      body: [
        "PLACEHOLDER — Implantio Ltd. provides AI receptionist services to dental practices. Registered office and company number to be inserted here.",
        "For questions about this policy, contact our data protection contact at the email address at the end of this page.",
      ],
    },
    {
      id: "what-we-collect",
      title: "What we collect",
      body: [
        "Website visitors: information you submit through the demo and contact forms — your name, practice name, email address, phone number and the details of your enquiry. Basic analytics about how the site is used.",
        "Practice customers: account and billing details, and the configuration of your practice's scripts, prices and diary rules.",
        "Patient callers: where we handle calls for a practice, this may include call recordings, transcripts, contact details and treatment enquiry details. PLACEHOLDER — describe exactly what your service captures.",
      ],
    },
    {
      id: "processing",
      title: "How we act on patient data",
      body: [
        "For calls handled on behalf of a dental practice, the practice is the data controller and Implantio acts as data processor. We process patient data only on the practice's documented instructions, under a written data processing agreement.",
        "PLACEHOLDER — state your lawful basis, sub-processors, EU data residency, retention periods, and the process for responding to data subject requests.",
      ],
    },
    {
      id: "call-recording",
      title: "Call recording and consent",
      body: [
        "PLACEHOLDER — describe your recording notice, how consent is captured at the start of each call, and how a caller can decline recording.",
      ],
    },
    {
      id: "sharing",
      title: "Who we share data with",
      body: [
        "PLACEHOLDER — list your sub-processors (hosting, telephony, transcription, email, analytics), what each receives, and where they are located.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep data",
      body: [
        "PLACEHOLDER — set out retention periods for enquiry data, call recordings, transcripts and account records, and the deletion process at the end of a contract.",
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      body: [
        "Under the GDPR you have the right to access, correct, erase, restrict and object to the processing of your personal data, and the right to data portability. Patients whose data is processed on behalf of a practice should contact that practice in the first instance.",
        "You also have the right to lodge a complaint with your supervisory authority. In Ireland this is the Data Protection Commission.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      body: [
        "PLACEHOLDER — describe the cookies this site sets. Note that this site stores your theme preference locally in your browser; that information never leaves your device and is not used for tracking.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: ["We will post any changes on this page and update the date at the top."],
    },
  ],
};

/* ==========================================================================
 *  SEO / SOCIAL SHARING
 * ========================================================================== */

export const seo = {
  defaultTitle: "Implantio — AI receptionist for high-value dental practices",
  titleTemplate: "%s — Implantio",
  description:
    "Implantio answers every dental enquiry, qualifies the patient and books the consultation. Built for implant, cosmetic and orthodontic practices. Book a 20-minute demo.",
  keywords: [
    "AI receptionist for dentists",
    "dental call answering service",
    "dental implant lead qualification",
    "missed call recovery dental practice",
    "cosmetic dentistry enquiry handling",
    "Invisalign consultation booking",
  ],
  /** Path to the social sharing image inside /public */
  ogImage: "/og-image.png",
  twitterHandle: "@implantio",
  locale: "en_IE",
};
