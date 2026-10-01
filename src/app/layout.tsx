import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, DM_Serif_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aether Wellness — Holistic Healing for Body & Mind",
  description:
    "Experience cutting-edge wellness therapies in a serene spa-like sanctuary. Services include sound healing, cryotherapy, float tanks, aromatherapy, and more.",
  keywords: [
    "wellness",
    "holistic health",
    "spa",
    "cryotherapy",
    "float tank",
    "sound healing",
    "aromatherapy",
    "meditation",
    "Aether Wellness",
  ],
  openGraph: {
    title: "Aether Wellness — Holistic Healing for Body & Mind",
    description:
      "Cutting-edge wellness therapies in a serene spa-like sanctuary.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[oklch(0.97_0.008_140)] text-[oklch(0.26_0.025_155)] selection:bg-[oklch(0.72_0.07_155/0.25)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}