import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/public/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aether Wellness — Holistic Healing Studio",
  description: "Where calm meets clinical excellence. Sage-infused wellness, evidence-based modalities, and practitioner-led care in a space designed for restoration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#F7F4EE] text-[#354838] antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/70 border-b border-sage-100/30">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-sage-700 font-serif text-xl tracking-wide">
              <span className="w-8 h-8 rounded-full bg-sage-500/20 inline-block" />
              Aether
            </a>
            <div className="flex gap-6 text-sm font-medium text-sage-800">
              <a href="/services" className="hover:text-sage-600 transition">Services</a>
              <a href="/practitioners" className="hover:text-sage-600 transition">Practitioners</a>
              <a href="/book" className="hover:text-sage-600 transition">Book</a>
              <a href="/portal" className="hover:text-sage-600 transition">Portal</a>
            </div>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="bg-sage-800 text-cream-100 mt-24">
          <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-lg tracking-wide mb-4">Aether Wellness</h3>
              <p className="text-sm opacity-80">Holistic healing rooted in clinical science. Your sanctuary for restoration.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Services</h4>
              <ul className="text-sm space-y-1 opacity-80">
                <li><a href="/services/craniosacral" className="hover:underline">Craniosacral Therapy</a></li>
                <li><a href="/services/guasha" className="hover:underline">Gua Sha Facilitation</a></li>
                <li><a href="/services/acupuncture" className="hover:underline">Acupuncture</a></li>
                <li><a href="/services/soma-breath" className="hover:underline">Somatic Breathwork</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Connect</h4>
              <p className="text-sm opacity-80">123 Serenity Lane<br />Willowbrook, CA 94027<br />(415) 555-0199</p>
            </div>
          </div>
          <div className="border-t border-cream-700/20 text-center text-xs py-4 opacity-60">
            &copy; 2025 Aether Wellness. Healing is a practice, not a product.
          </div>
        </footer>
      </body>
    </html>
  );
}