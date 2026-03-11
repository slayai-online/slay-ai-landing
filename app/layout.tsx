import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import {
  getOrganizationSchema,
  getWebApplicationSchema,
  getFAQSchema,
} from "@/lib/structured-data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://slayai.in";

export const metadata: Metadata = {
  title: "SLAY AI – Your Personal AI Stylist | Outfit Recommendations from Nearby Stores",
  description:
    "Upload a photo, get personalised outfit recommendations from nearby fashion stores in Bangalore, with fast delivery or pickup. Your AI stylist for every occasion.",
  keywords: [
    "AI stylist",
    "personal styling app",
    "outfit recommendations",
    "nearby fashion stores",
    "fast fashion delivery",
    "virtual outfit discovery",
    "Bangalore fashion shopping",
    "Gen Z fashion tech",
    "personalised style recommendations",
    "SLAY AI",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  applicationName: "SLAY AI",
  authors: [{ name: "FlashFusion Labs Private Limited" }],
  generator: "Next.js",
  category: "Lifestyle application",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "SLAY AI",
    title: "SLAY AI – Your Personal AI Stylist for Outfits That Actually Suit You",
    description:
      "Upload a photo → get style recommendations based on your body and vibe → shop from nearby stores with fast delivery. Launching in Bangalore.",
    images: [
      {
        url: `${siteUrl}/images/hero-avatar.webp`, // Fallback since og-image.jpg may not exist
        width: 1200,
        height: 630,
        alt: "SLAY AI – AI-powered personal stylist app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SLAY AI – Personalised Outfit Recommendations | AI Stylist App",
    description:
      "Discover outfits that actually suit you from nearby fashion stores. Fast delivery or pickup. Launching in Bangalore soon.",
    creator: "@slayai",
    images: [`${siteUrl}/images/hero-avatar.webp`],
  },
  appleWebApp: {
    title: "SLAY AI",
    statusBarStyle: "black-translucent",
  },
  other: {
    "theme-color": "#050505",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const webAppSchema = getWebApplicationSchema();
  const faqSchema = getFAQSchema();

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, webAppSchema, faqSchema]),
          }}
        />
        <GoogleAnalytics gaId="G-HTH9608DCF" />
      </head>
      <body
        className={`${spaceGrotesk.variable} font-display bg-background-dark text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Skip to Content – Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        {/* Noise Overlay – Decorative */}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
