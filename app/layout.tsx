import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://faithandhopelab.com"),
  title: {
    default: "Faith & Hope Lab — Scripture-centered tools by Paul Clark",
    template: "%s · Faith & Hope Lab",
  },
  description:
    "Scripture-centered tools for understanding, remembering, discerning, and interceding. A ministry-tech portfolio by Paul Clark / Systems Librarian.",
  openGraph: {
    title: "Faith & Hope Lab",
    description:
      "Scripture-centered tools for understanding, remembering, discerning, and interceding.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith & Hope Lab",
    description:
      "Scripture-centered tools for understanding, remembering, discerning, and interceding.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
