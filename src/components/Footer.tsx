import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[oklch(0.82_0.012_110/0.3)] bg-[oklch(0.88_0.025_80/0.1)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-base text-[oklch(0.25_0.02_140)]">Aether Wellness</h3>
            <p className="mt-2 text-xs leading-relaxed text-[oklch(0.55_0.04_140)]">
              242 Wythe Ave, Brooklyn, NY 11249<br />
              hello@aetherwellness.com<br />
              (929) 555-0182
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-[oklch(0.55_0.04_140)]">Explore</h4>
            <nav className="mt-3 flex flex-col gap-2">
              <Link href="/services" className="text-sm text-[oklch(0.45_0.025_140)] transition-colors hover:text-[oklch(0.25_0.02_140)]">Services</Link>
              <Link href="/team" className="text-sm text-[oklch(0.45_0.025_140)] transition-colors hover:text-[oklch(0.25_0.02_140)]">Practitioners</Link>
              <Link href="/check-in" className="text-sm text-[oklch(0.45_0.025_140)] transition-colors hover:text-[oklch(0.25_0.02_140)]">Symptom Check-In</Link>
              <Link href="/book" className="text-sm text-[oklch(0.45_0.025_140)] transition-colors hover:text-[oklch(0.25_0.02_140)]">Book an Appointment</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.12em] text-[oklch(0.55_0.04_140)]">Practice</h4>
            <nav className="mt-3 flex flex-col gap-2">
              <span className="text-sm text-[oklch(0.45_0.025_140)]">Mon–Fri: 8am – 7pm</span>
              <span className="text-sm text-[oklch(0.45_0.025_140)]">Sat: 9am – 5pm</span>
              <span className="text-sm text-[oklch(0.45_0.025_140)]">Sun: Closed</span>
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t border-[oklch(0.82_0.012_110/0.2)] pt-6 text-center text-xs text-[oklch(0.6_0.03_140)]">
          &copy; {year} Aether Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}