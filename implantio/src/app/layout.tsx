import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeScript, ThemeStyles } from "@/components/layout/theme-styles";
import { company, contact, seo } from "@/config/site";
import { defaultTheme } from "@/config/themes";

import "./globals.css";

/* Display face — headlines only, set tight and heavy */
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

/* Body face — everything you actually read */
const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

/* Utility face — timestamps, call values, labels, data */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: company.name,
  authors: [{ name: company.legalName, url: company.url }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: company.url,
    siteName: company.name,
    title: seo.defaultTitle,
    description: seo.description,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: company.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    site: seo.twitterHandle,
    title: seo.defaultTitle,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#08172C",
  width: "device-width",
  initialScale: 1,
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: company.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: seo.description,
  url: company.url,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "249",
    highPrice: "449",
    offerCount: "3",
  },
  provider: {
    "@type": "Organization",
    name: company.legalName,
    url: company.url,
    email: contact.email,
    telephone: contact.phone,
    areaServed: "IE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IE"
      data-theme={defaultTheme}
      className={`${archivo.variable} ${instrument.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeStyles />
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only-focusable absolute left-4 top-4 z-[100] rounded-control bg-ink px-4 py-2 text-sm font-medium text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
