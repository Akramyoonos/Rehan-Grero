import { Playfair_Display, Inter } from "next/font/google"; // Keep this order
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";


const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://rjgrero.com'),
  title: {
    default: "Rehan Grero | Strategic Property Advisor & Buyer’s Representative",
    template: "%s | Rehan Grero"
  },
  description: "Exclusively representing buyers in Sri Lanka. Independent property analysis, due diligence, and strategic negotiation for residential and commercial acquisitions in Colombo.",
  keywords: ["Property Advisor Sri Lanka", "Buyer's Representative Colombo", "Real Estate Investment Sri Lanka", "Property Consultant Colombo", "Due Diligence Sri Lanka", "Rehan J Grero", "Strategic Property Advisory"],
  authors: [{ name: "Rehan J. Grero" }],
  creator: "Rehan J. Grero",
  publisher: "Rehan Grero Strategic Advisory",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "Rehan Grero | Strategic Property Advisor & Buyer’s Representative",
    description: "Exclusively representing buyers in Sri Lanka. Independent property analysis, due diligence, and strategic negotiation for residential and commercial acquisitions.",
    url: 'https://rjgrero.com',
    siteName: 'Rehan Grero',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/RJ Grero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rehan J. Grero - Strategic Property Advisor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rehan Grero | Strategic Property Advisor & Buyer’s Representative",
    description: "Exclusively representing buyers in Sri Lanka. Strategic property decisions backed by independent analysis.",
    images: ['/RJ Grero.jpeg'],
  },
};

import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <LayoutWrapper>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          {children}
        </LayoutWrapper>
        <CookieConsent />
      </body>
    </html>
  );
}
