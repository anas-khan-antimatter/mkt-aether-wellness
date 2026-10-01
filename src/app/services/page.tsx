import Link from "next/link";
import { services } from "@/lib/data";
import { Leaf, Wind, Sparkles, Heart } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  body: <Wind className="h-5 w-5" />,
  mind: <Heart className="h-5 w-5" />,
  energy: <Sparkles className="h-5 w-5" />,
  recovery: <Leaf className="h-5 w-5" />,
};

const categoryLabels: Record<string, string> = {
  body: "Physical Body",
  mind: "Mind & Spirit",
  energy: "Energy Work",
  recovery: "Recovery & Rest",
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-6 pb-8 pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.58_0.06_145)]">
            Our offerings
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-[oklch(0.25_0.02_140)] md:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[oklch(0.45_0.025_140)]">
            Every treatment at Aether is designed to restore balance — whether
            through energy work, somatic practice, or deep physical recovery.
          </p>
        </div>
      </section>

      {/* Category groups */}
      {(["body", "mind", "energy", "recovery"] as const).map((cat) => {
        const catServices = services.filter((s) => s.category === cat);
        if (catServices.length === 0) return null;
        return (
          <section key={cat} className="px-6 pb-20">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-[oklch(0.55_0.04_140)]">
                {categoryIcons[cat]}
                {categoryLabels[cat]}
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {catServices.map((s, i) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className="group rounded-3xl border border-[oklch(0.82_0.012_110/0.4)] bg-white/60 p-6 transition-all hover:bg-white hover:shadow-lg hover:shadow-[oklch(0.58_0.06_145/0.08)]"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <h3 className="font-serif text-lg text-[oklch(0.25_0.02_140)] group-hover:text-[oklch(0.58_0.06_145)]">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[oklch(0.55_0.04_140)]">
                      {s.duration} · {s.price}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[oklch(0.45_0.025_140)]">
                      {s.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {s.benefits.slice(0, 3).map((b) => (
                        <span
                          key={b}
                          className="rounded-full bg-[oklch(0.58_0.06_145/0.08)] px-2.5 py-0.5 text-[11px] font-medium text-[oklch(0.52_0.06_145)]"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[oklch(0.58_0.06_145)] px-10 py-12 text-white">
            <h2 className="font-serif text-2xl">Not sure where to start?</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80">
              Book a free 15-minute intake call. We&apos;ll listen to your needs
              and recommend the right path.
            </p>
            <Link
              href="/book"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[oklch(0.58_0.06_145)] transition-all hover:bg-white/90"
            >
              Book an intake
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}