import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import { siteConfig } from "@/config/site";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  metadataBase: new URL("https://noor-and-knot.vercel.app"),
  openGraph: {
    title: `${siteConfig.brandName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "https://noor-and-knot.vercel.app",
    siteName: siteConfig.brandName,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F6F1E7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} bg-sand font-sans text-charcoal antialiased`}>{children}</body>
    </html>
  );
}
