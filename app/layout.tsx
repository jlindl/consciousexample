import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import CanvasGradient from "@/components/CanvasGradient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conscious Solutions | Legal Sector Marketing Specialists",
  description: "High-performance law firm websites designed to generate enquiries. Full-service digital marketing including SEO, PPC, branding and content. Get a free website health check.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CanvasGradient />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
