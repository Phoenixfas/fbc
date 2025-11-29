import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import ProviderWrapper from "../components/ProviderWrapper";
import Navbar from "@/components/Navbar";
import TabsBar from "@/components/TabsBar";
import FloatingChatBot from "@/components/FloatingChatBot";
import { Footer } from "@/components/footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thefbc.xyz';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  // TITLE: Includes the brand name + primary keyword + location for high relevance
  title: {
    default: 'Foundation Business Consultancy | Business Setup, Tax & Audit UAE',
    template: '%s | Foundation Business Consultancy UAE',
  },

  // DESCRIPTION: Combines the mission statement with high-value local keywords
  // Derived from the "Mission Statement" in your email and branding "Complexity to Clarity" 
  description:
    'FBC turns financial complexity into clarity for startups and SMEs in the UAE. Expert guidance in Company Formation (Freezone & Mainland), Accounting, Tax, Audit, and CFO Services. Transform unknown risks into known opportunities.',

  // KEYWORDS: Targeted specifically for UAE search intent
  // Services listed in email and PDF [cite: 96, 98, 103, 106, 208]
  keywords: [
    'Foundation Business Consultancy',
    'FBC Dubai',
    'Company Formation UAE',
    'Business Setup Dubai',
    'UAE Freezone License',
    'Mainland Business Setup',
    'Accounting Services Dubai',
    'Tax Consultants UAE',
    'Audit Services Dubai',
    'CFO Services UAE',
    'VAT Registration UAE',
    'PRO Services Dubai',
    'Business Advisory UAE'
  ],

  // AUTHORS & CREATOR
  authors: [{ name: 'Foundation Business Consultancy' }, { name: 'Chris De Guzman' }], // [cite: 87]
  creator: 'Foundation Business Consultancy',

  // OPEN GRAPH: Controls how the link looks when shared on LinkedIn/WhatsApp/Socials
  openGraph: {
    type: 'website',
    locale: 'en_AE', // CRITICAL: Sets the locale to English - United Arab Emirates
    url: baseUrl,
    siteName: 'Foundation Business Consultancy (FBC)',
    title: 'Focus. Build. Conquer. | Premier Business Consultancy in UAE', // Tagline from email
    description: 'Empowering businesses in the UAE with expert Company Formation, Tax, and Audit services. We help you make bold decisions and drive real change.', // [cite: 31, 33]
    images: [
      {
        url: `/logo_card.png`, // Ensure you have a branded image at this path
        width: 1200,
        height: 630,
        alt: 'Foundation Business Consultancy - From Complexity to Clarity', // 
      },
    ],
  },

  // TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Business Consultancy | UAE Business Experts',
    description: 'Navigate complexity with confidence. Expert Company Formation, Tax, and Advisory services in Dubai & UAE.', // [cite: 28]
    images: [`/logo_card.png`],
  },

  // ROBOTS: Ensures Google indexes the site
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // GEO TAGS: Helps local SEO for "consultancy near me" searches
  // Coordinates based on "Meydan Grandstand" address provided in PDF 
  other: {
    'geo.region': 'AE-DU', // UAE - Dubai
    'geo.placename': 'Dubai',
    'geo.position': '25.1558;55.2976', // Approximate coordinates for Meydan/Discovery Tower area
    'ICBM': '25.1558, 55.2976',
  },

  // ALTERNATES: Prevents duplicate content issues
  alternates: {
    canonical: baseUrl,
  },
  icons: "/logo_arrow.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <ProviderWrapper>
          <div>
            <Navbar />
            <TabsBar />
            {children}
            <FloatingChatBot />
            <Footer />
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
