import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://systemslibrarian.github.io/faith-hope";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faith & Hope — Scripture-centered tools by Paul Clark",
    template: "%s · Faith & Hope",
  },
  description:
    "Scripture-centered tools for understanding, remembering, discerning, and interceding. A ministry-tech portfolio by Paul Clark / Systems Librarian.",
  applicationName: "Faith & Hope",
  authors: [{ name: "Paul Clark", url: "https://github.com/systemslibrarian" }],
  creator: "Paul Clark / Systems Librarian",
  openGraph: {
    title: "Faith & Hope",
    description:
      "Scripture-centered tools for understanding, remembering, discerning, and interceding.",
    type: "website",
    siteName: "Faith & Hope",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith & Hope",
    description:
      "Scripture-centered tools for understanding, remembering, discerning, and interceding.",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [{ url: asset("/icon.svg"), type: "image/svg+xml" }],
    apple: [{ url: asset("/apple-icon.svg"), type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070d",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Faith & Hope",
      description:
        "Scripture-centered tools for understanding, remembering, discerning, and interceding.",
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Paul Clark",
      alternateName: "Systems Librarian",
      url: siteUrl,
      sameAs: ["https://github.com/systemslibrarian"],
      jobTitle: "IT Librarian, Data Analyst, AI Project Builder",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950 focus:shadow-glow"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
