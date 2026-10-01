'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Practitioners' },
    { href: '/check-in', label: 'Check In' },
    { href: '/book', label: 'Book' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[oklch(0.82_0.012_110/0.5)] bg-[oklch(0.965_0.006_120/0.85)] backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-[oklch(0.25_0.02_140)]"
        >
          Aether Wellness
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[oklch(0.45_0.025_140)] transition-colors hover:text-[oklch(0.25_0.02_140)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="inline-flex h-9 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-5 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)] hover:shadow-lg hover:shadow-[oklch(0.58_0.06_145/0.25)]"
          >
            Book a consult
          </Link>
        </nav>

        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[oklch(0.82_0.012_110/0.3)] bg-[oklch(0.965_0.006_120)] px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[oklch(0.45_0.025_140)] transition-colors hover:bg-[oklch(0.88_0.02_80/0.3)] hover:text-[oklch(0.25_0.02_140)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-[oklch(0.58_0.06_145)] px-5 text-sm font-medium text-white"
            >
              Book a consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}