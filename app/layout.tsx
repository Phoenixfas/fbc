import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thefbc.xyz"),
  generator: "Foundation Business Consulting",
  applicationName: "Foundation Business Consulting",
  title: "Foundation Business Consulting",
  description: "",
  keywords: "",
  authors: [{ name: "Foundation Business Consulting" }],
  robots: "index, follow",
  openGraph: {
    title: "Foundation Business Consulting",
    description: "",
    url: "https://thefbc.xyz",
    siteName: "Foundation Business Consulting",
    images: [
      {
        url: "/logo_card.png",
        width: 1200,
        height: 630,
        alt: "Foundation Business Consulting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@FoundationBusinessConsulting",
    title: "Foundation Business Consulting",
    description: ".",
    images: "/logo_card.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
