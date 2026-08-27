import type { Metadata } from "next";
import { Marcellus, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kemetfc.com"),
  title: {
    default: "KEMET FC | Youth Soccer Academy, Michigan",
    template: "%s | KEMET FC",
  },
  description:
    "KEMET FC is a next-generation youth soccer academy in Michigan for ages 6-12, combining professional coaching, individualized player development, and technology-assisted assessment. Develop the person before the player.",
  keywords: [
    "youth soccer academy Michigan",
    "youth soccer ages 6-12",
    "KEMET FC",
    "player development academy",
    "AI player assessment soccer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KEMET FC | Youth Soccer Academy, Michigan",
    description:
      "Develop the Person Before the Player. Professional coaching, individualized development, and technology-assisted assessment for ages 6-12.",
    url: "https://kemetfc.com",
    siteName: "KEMET FC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
