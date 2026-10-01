import { practitioners } from "@/lib/data";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 pb-8 pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.58_0.06_145)]">
            Our team
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[oklch(0.25_0.02_140)] md:text-5xl">
            Practitioners
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[oklch(0.45_0.025_140)]">
            Every member of our clinical team brings deep expertise, genuine
            warmth, and a commitment to meeting you where you are.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {practitioners.map((p, i) => (
              <div
                key={p.id}
                className="group rounded-3xl border border-[oklch(0.82_0.012_110/0.4)] bg-white/60 p-6 transition-all hover:bg-white hover:shadow-lg hover:shadow-[oklch(0.58_0.06_145/0.08)] sm:p-8"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  {/* Avatar placeholder */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[oklch(0.58_0.06_145/0.1)] text-lg font-medium text-[oklch(0.58_0.06_145)]">
                    {p.imageInitials}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-serif text-xl text-[oklch(0.25_0.02_140)]">
                      {p.name}
                    </h2>
                    <p className="mt-0.5 text-sm font-medium text-[oklch(0.58_0.06_145)]">
                      {p.title}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[oklch(0.45_0.025_140)]">
                  {p.fullBio}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-[oklch(0.58_0.06_145/0.08)] px-2.5 py-0.5 text-[11px] font-medium text-[oklch(0.52_0.06_145)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.credentials.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-[oklch(0.82_0.012_110/0.4)] px-2 py-0.5 text-[11px] font-mono text-[oklch(0.55_0.04_140)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[oklch(0.88_0.025_80)] px-10 py-12">
            <div className="flex items-start gap-4">
              <Sparkles className="mt-0.5 h-6 w-6 shrink-0 text-[oklch(0.58_0.06_145)]" />
              <div>
                <h2 className="font-serif text-2xl text-[oklch(0.25_0.02_140)]">
                  Meet us in person
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[oklch(0.45_0.025_140)]">
                  All practitioners offer complimentary 15-minute discovery
                  calls. Find the right fit before your first session.
                </p>
                <Link
                  href="/book"
                  className="mt-6 inline-flex h-11 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-6 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)]"
                >
                  Book a discovery call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}