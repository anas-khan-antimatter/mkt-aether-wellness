"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, Heart, Sun, Moon, Spline, Quote } from "lucide-react";

const services = [
  { title: "Acupuncture", body: "Restore balance with precise, calming treatments tailored to your body." },
  { title: "Herbal Medicine", body: "Custom formulas that support recovery, sleep, and steady energy." },
  { title: "Mind-Body Therapy", body: "Breathwork and guided practice for stress that lives in the nervous system." },
  { title: "Float Therapy", body: "Weightlessness for the overstimulated mind — a reset button for the nervous system." },
];

export default function Home() {
  const [promptOfDay, setPrompt] = useState("");
  const [promptLoading, setPromptLoading] = useState(true);

  // Fetch journal prompt on load
  fetch("/api/prompt")
    .then((r) => r.json())
    .then((d) => { setPrompt(d.prompt); setPromptLoading(false); })
    .catch(() => setPromptLoading(false));

  return (
    <main>
      {/* Hero — soft clinical, breathing-room whitespace */}
      <section className="relative overflow-hidden px-6 pb-28 pt-20">
        {/* Ambient gradient */}
        <div className="absolute inset-0 bg-clay-sage -z-10" />
        <div className="mx-auto max-w-6xl relative">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.62_0.045_130)]">
            Holistic clinic · Brooklyn
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight text-[oklch(0.22_0.012_55)] md:text-6xl">
            A space to arrive as you are
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[oklch(0.52_0.025_75)]">
            Aether Wellness blends ancient practice with modern clinical care — so you leave
            lighter, clearer, and more yourself.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/book" className="inline-flex h-12 items-center rounded-spa bg-[oklch(0.62_0.045_130)] px-7 text-sm font-medium text-white transition-all hover:bg-[oklch(0.58_0.045_130)]">
              Book a consult
            </Link>
            <Link href="/services" className="inline-flex h-12 items-center rounded-spa border border-[oklch(0.88_0.01_75/0.5)] px-7 text-sm font-medium text-[oklch(0.52_0.025_75)] transition-all hover:bg-[oklch(0.99_0.003_80)] hover:text-[oklch(0.22_0.012_55)]">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-[oklch(0.88_0.01_75/0.3)] bg-[oklch(0.85_0.02_70/0.1)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.62_0.045_130)]">
            Our offerings
          </p>
          <h2 className="mt-2 font-serif text-3xl text-[oklch(0.22_0.012_55)]">
            Care that feels human
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-spa bg-[oklch(0.99_0.003_80)] p-6 shadow-sm ring-1 ring-[oklch(0.88_0.01_75/0.3)] transition-all hover:shadow-md">
                <h3 className="font-serif text-lg text-[oklch(0.22_0.012_55)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[oklch(0.52_0.025_75)]">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="text-sm font-medium text-[oklch(0.62_0.045_130)] transition-colors hover:text-[oklch(0.58_0.045_130)]">
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Journal prompt — daily */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-spa-lg border border-[oklch(0.88_0.01_75/0.4)] bg-[oklch(0.99_0.003_80)] p-8">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-[oklch(0.62_0.045_130)]" />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.62_0.045_130)]">
                  Journal prompt of the day
                </p>
                {promptLoading ? (
                  <p className="mt-2 text-sm italic text-[oklch(0.52_0.025_75)]">Loading today&apos;s prompt...</p>
                ) : (
                  <p className="mt-2 font-serif text-lg italic leading-relaxed text-[oklch(0.22_0.012_55)]">
                    &ldquo;{promptOfDay}&rdquo;
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Check-in + Portal CTA */}
      <section className="bg-[oklch(0.85_0.02_70/0.1)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-spa-lg bg-[oklch(0.62_0.045_130)] p-8 text-white">
              <h2 className="font-serif text-2xl">Not sure where to start?</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                Our symptom check-in tool listens to what you&apos;re experiencing and recommends the modalities most likely to help.
              </p>
              <div className="mt-6">
                <Link href="/check-in" className="inline-flex h-11 items-center rounded-spa bg-white px-6 text-sm font-medium text-[oklch(0.62_0.045_130)] transition-all hover:bg-white/90">
                  Check in now
                </Link>
              </div>
            </div>
            <div className="rounded-spa-lg border border-[oklch(0.88_0.01_75/0.4)] bg-[oklch(0.99_0.003_80)] p-8">
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-[oklch(0.62_0.045_130)]" />
                <div>
                  <h2 className="font-serif text-2xl text-[oklch(0.22_0.012_55)]">Member portal</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-[oklch(0.52_0.025_75)]">
                    Upcoming visits, care plan checklist, and your wellness continuity — all in one place.
                  </p>
                  <div className="mt-6">
                    <Link href="/portal" className="inline-flex h-11 items-center rounded-spa bg-[oklch(0.62_0.045_130)] px-6 text-sm font-medium text-white transition-all hover:bg-[oklch(0.58_0.045_130)]">
                      Open portal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners callout */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-spa-lg bg-[oklch(0.85_0.02_70/0.2)] p-8">
            <div className="flex items-start gap-4">
              <Sun className="h-6 w-6 text-[oklch(0.62_0.045_130)]" />
              <div>
                <h2 className="font-serif text-2xl text-[oklch(0.22_0.012_55)]">Meet our practitioners</h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[oklch(0.52_0.025_75)]">
                  Every member of our clinical team brings deep expertise, genuine warmth, and a commitment to meeting you where you are.
                </p>
                <div className="mt-5">
                  <Link href="/team" className="inline-flex h-11 items-center rounded-spa bg-[oklch(0.62_0.045_130)] px-6 text-sm font-medium text-white transition-all hover:bg-[oklch(0.58_0.045_130)]">
                    See our team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}