# Implantio

Marketing website for Implantio — an AI receptionist for high-value dental practices.

The site has one job: **get dental practice owners to book a demo.** Every section is built to move a visitor toward that button.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS.

---

## 1. Getting it running

You need [Node.js](https://nodejs.org) version 18.18 or newer. Check with `node -v`.

```bash
npm install       # install dependencies (once)
npm run dev       # start the site at http://localhost:3000
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server, reloads as you save |
| `npm run build` | Production build — run this before deploying |
| `npm start` | Serves the production build locally |
| `npm run lint` | Checks code style |
| `npm run typecheck` | Checks for type errors |

Copy `.env.example` to `.env.local` and fill it in:

```
NEXT_PUBLIC_SITE_URL=https://implantio.com   # your live domain, no trailing slash
LEAD_WEBHOOK_URL=                            # where demo requests are delivered
```

---

## 2. Folder structure

```
implantio/
├── public/                    Images and icons served as-is
│   ├── favicon.svg / .ico     Browser tab icon
│   ├── apple-touch-icon.png   Icon when saved to a phone home screen
│   ├── og-image.png           Preview image when the site is shared
│   └── site.webmanifest       App metadata
│
├── src/
│   ├── config/                ← YOU EDIT THESE TWO FILES
│   │   ├── site.ts            Every word, price, link and testimonial
│   │   └── themes.ts          Colours, corner radius, typefaces
│   │
│   ├── app/                   One folder per page
│   │   ├── page.tsx           Homepage
│   │   ├── layout.tsx         Wraps every page — fonts, metadata, header, footer
│   │   ├── globals.css        Base styles and the type scale
│   │   ├── about/page.tsx
│   │   ├── demo/page.tsx      The booking page
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── not-found.tsx      404 page
│   │   ├── loading.tsx        Shown while a page loads
│   │   ├── sitemap.ts         Generates /sitemap.xml
│   │   ├── robots.ts          Generates /robots.txt
│   │   └── api/lead/route.ts  Receives form submissions
│   │
│   ├── components/
│   │   ├── layout/            Header, footer, logo, theme switcher
│   │   ├── sections/          The homepage sections, in page order
│   │   ├── forms/             Demo and contact forms
│   │   └── ui/                Buttons, inputs, containers, headings
│   │
│   └── lib/                   Small helpers (formatting, analytics hook)
│
├── tailwind.config.ts         Maps design tokens to Tailwind classes
└── next.config.mjs            Build and security header settings
```

The homepage sections render in this order, all from `src/app/page.tsx`:

Hero → Problem → Solution → Benefits → Specialties → ROI calculator → How it works → Trust → Pricing → FAQ → Final CTA

---

## 3. Customisation guide

### Changing words, prices and links

Open **`src/config/site.ts`**. Everything is grouped and commented by section. Change the text between the quote marks and save — the site updates instantly while `npm run dev` is running.

Common edits:

| What you want to change | Where to look in `site.ts` |
| --- | --- |
| Company name, tagline, domain | `company` |
| Email, phone, office address | `contact` |
| Menu links and the header button | `nav` |
| Headline and hero call demo | `hero`, `heroCall` |
| Missed-call statistics | `problem.stats` |
| The eight benefit cards | `benefits.items` |
| Implant / veneer / Invisalign copy | `specialties.items` |
| Calculator starting numbers | `roi.defaults` |
| Testimonials and case studies | `trust` |
| Plan names, prices, features | `pricing.plans` |
| FAQ questions and answers | `faq.items` |
| Page titles and search description | `seo` |

**Pricing example.** To change the Growth plan to €499, find `pricing.plans`, locate the block with `name: "Growth"`, and change `price: "449"` to `price: "499"`. To add a feature, add a line to its `features` list. To add a fourth plan, copy an entire `{ ... }` block and paste it inside the list.

**Anything marked `PLACEHOLDER` must be replaced before launch.** These appear on the site inside amber dashed boxes so they can't ship by accident. Search the project for `PLACEHOLDER` to find them all — they cover testimonials, case studies, security claims, the team section and the privacy policy.

### Changing the look

Open **`src/config/themes.ts`**. Three presets ship with the site:

| Preset | Palette | Corners |
| --- | --- | --- |
| `enterprise` | Deep navy, white, electric blue | Rounded (16px) |
| `luxury` | Charcoal, bone, emerald | Sharp (6px) |
| `medical` | White, clinical blue, teal | Soft (22px) |

Pick which one loads by default with `defaultTheme` at the bottom of the file. The switcher in the footer lets you preview them on the live site — set `showThemeSwitcher = false` before launch to hide it.

To adjust a colour, change its hex value in the preset. Each is labelled:

- `accent` — buttons and links. The most visible change you can make.
- `ink` — the dark bands (problem, pricing, footer, final CTA)
- `paper` / `surface` — page and card backgrounds
- `signal` — "booked" and success states
- `warn` — "missed" and error states

To change corner style site-wide, edit `radius.card` and `radius.control`. Setting both to `"0px"` gives a squared-off look; `"999px"` makes buttons fully rounded.

To change typefaces, open `src/app/layout.tsx`, swap the font imports for any [Google Font](https://fonts.google.com), then point the `fonts` values in `themes.ts` at the new variable names.

### Adding a page

Create `src/app/your-page/page.tsx`, copy the structure of `about/page.tsx`, then add the route to `src/app/sitemap.ts` and, if it should appear in the menu, to `nav` in `site.ts`.

---

## 4. Branding guide

**Positioning.** An AI receptionist built specifically for high-value dental practices. Premium, medical, reliable. Not a chatbot vendor, not a marketing agency.

**Voice.** Write about business outcomes, never technology. "Turn missed calls into booked consultations" — not "AI-powered conversational automation." Be specific: a named time (19:41), a real figure (€2,450), an actual moment (your nurse is chairside). Specificity is what makes a practice owner feel understood. Avoid "revolutionary," "cutting-edge," "next-generation," "seamless."

**Typography.** Three faces, each with one job:

- **Archivo** (600/700) — headlines only, set tight
- **Instrument Sans** (400/500/600) — all body copy
- **IBM Plex Mono** (400/500) — timestamps, case values, labels, data

The mono face is deliberate. It makes numbers read like a clinical record rather than marketing copy, and it's the thread tying the hero call panel, the missed-call log and the calculator together. Keep it for data and small labels; never set body copy in it.

Type sizes live in `globals.css` as `.t-display`, `.t-h2`, `.t-h3`, `.t-lead` and `.t-label`. Use these rather than one-off sizes so the scale stays consistent.

**Logo.** The mark is an abstracted implant post — the crown line in accent colour above a tapered fixture. It reads as an "I" at small sizes. It lives in `src/components/layout/logo.tsx`; replace the SVG there and it updates site-wide, including the header and footer.

**Colour use.** Accent is for actions — buttons, links, active states. Don't use it decoratively, or the demo button stops standing out. Dark bands mark emotional beats: the problem, the pricing decision, the closing ask.

**Motion.** Restrained on purpose. Content fades up once on scroll; the hero call panel plays through a single scripted call. Nothing loops or bounces. All of it is disabled automatically for visitors who've asked their device to reduce motion.

**Photography** (if you add it). Real practice interiors and real team members. No stock photos of models with perfect teeth, no glowing-brain AI imagery.

---

## 5. Deployment

### Vercel (recommended — made by the Next.js team)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in, click **Add New → Project**, and pick the repository.
3. Vercel detects Next.js automatically. Leave the build settings alone.
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` (your live domain) and `LEAD_WEBHOOK_URL`.
5. Click **Deploy**. It takes about a minute.
6. Add your domain under **Settings → Domains** and follow the DNS instructions.

Every push to your main branch redeploys automatically.

### Netlify

Same process, using the `@netlify/plugin-nextjs` plugin. Build command `npm run build`.

### Your own server

```bash
npm install
npm run build
npm start          # serves on port 3000
```

Run it behind nginx or Caddy with HTTPS, and keep it alive with `pm2` or a systemd service.

### Receiving demo bookings

Until you set `LEAD_WEBHOOK_URL`, submissions are validated and written to the server log — they work, but nobody gets notified. To receive them:

1. Create a webhook in Zapier, Make, Slack or your CRM.
2. Paste the URL into `LEAD_WEBHOOK_URL` in your hosting environment variables.
3. Submit a test booking and confirm it arrives.

The payload is JSON containing the form fields, a timestamp and the referring page. To send email instead, there's a marked spot in `src/app/api/lead/route.ts`.

### Before you go live

- [ ] Replace every `PLACEHOLDER` (testimonials, case studies, security claims, team, privacy policy)
- [ ] Have the privacy policy reviewed by a data protection adviser
- [ ] Confirm each listed integration actually exists
- [ ] Set `NEXT_PUBLIC_SITE_URL` and `LEAD_WEBHOOK_URL`
- [ ] Set `showThemeSwitcher = false` in `themes.ts`
- [ ] Test a demo booking end to end
- [ ] Check the site on a phone
- [ ] Submit `/sitemap.xml` to Google Search Console
- [ ] Verify the share preview at [opengraph.xyz](https://www.opengraph.xyz)

---

## 6. Suggestions for future improvements

**Worth doing first — they affect bookings directly**

1. **Calendar booking instead of a form.** Embed Cal.com or Calendly on `/demo` so practice owners pick a slot immediately. Removing the wait for a reply is the single biggest conversion gain available.
2. **A real recorded call.** The hero panel is scripted text. A play button on a genuine (consented, anonymised) call would be far more persuasive — practice owners want to hear whether it sounds human.
3. **Real proof.** Three named dentists with photos and audited figures will outperform every other change on this list combined.
4. **Emailed ROI report.** Let visitors send themselves their calculator result. It captures an email from people not yet ready to book, and gives you a reason to follow up.

**Next**

5. **Specialty landing pages** — `/implants`, `/veneers`, `/invisalign`, each matched to its own ad campaign.
6. **Location pages** for your main cities, to pick up "dental answering service Dublin" style searches.
7. **A/B test the headline.** Vercel Analytics or PostHog can run this without new infrastructure.
8. **Exit-intent prompt** offering a call-audit checklist in exchange for an email.

**Later**

9. **A blog or resource section** — "How much is a missed implant call worth?" is the kind of article a practice owner searches for. Use MDX so posts are plain files.
10. **Live availability** showing the next three demo slots, which creates honest urgency.
11. **CRM integration** so bookings land in HubSpot or Pipedrive directly.
12. **Accessibility audit** with a screen reader. The foundations are in place — keyboard focus, reduced motion, semantic headings, labelled fields — but real testing finds what code review can't.
13. **Multi-language** if you expand beyond Ireland and the UK. Next.js handles this natively with the `i18n` routing config.

---

## Notes on what's included

- **Verified:** the project compiles with no type errors, passes linting, and produces a clean production build. All pages are statically pre-rendered.
- **Accessibility:** skip link, keyboard focus rings, `aria` states on the menu and FAQ, labelled form fields, error messages tied to their inputs, reduced-motion support.
- **SEO:** per-page titles and descriptions, Open Graph and Twitter cards, canonical URLs, structured data for the organisation and FAQ, generated sitemap and robots file.
- **The Open Graph image** (`public/og-image.png`) was generated with substitute fonts. Regenerate it in Figma with Archivo when you have the brand assets.
- **Forms** include honeypot spam protection. For a public launch, consider adding rate limiting or Cloudflare Turnstile.
