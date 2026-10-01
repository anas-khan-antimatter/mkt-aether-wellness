import Link from "next/link";

const services = [
  { title: "Acupuncture", body: "Restore balance with precise, calming treatments tailored to your body." },
  { title: "Herbal Medicine", body: "Custom formulas that support recovery, sleep, and steady energy." },
  { title: "Mind-Body Therapy", body: "Breathwork and guided practice for stress that lives in the nervous system." },
  { title: "Float Therapy", body: "Weightlessness for the overstimulated mind — a reset button for the nervous system." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.58_0.06_145)]">
            Holistic clinic · Brooklyn
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight text-[oklch(0.25_0.02_140)] md:text-6xl">
            Healing that meets you where you are
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[oklch(0.45_0.025_140)]">
            Aether Wellness blends ancient practice with modern clinical care — so you leave
            lighter, clearer, and more yourself.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/book" className="inline-flex h-12 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-7 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)] hover:shadow-lg hover:shadow-[oklch(0.58_0.06_145/0.25)]">
              Book a consult
            </Link>
            <Link href="/services" className="inline-flex h-12 items-center rounded-full border border-[oklch(0.82_0.012_110/0.5)] px-7 text-sm font-medium text-[oklch(0.45_0.025_140)] transition-all hover:bg-white/70 hover:text-[oklch(0.25_0.02_140)]">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-[oklch(0.82_0.012_110/0.3)] bg-[oklch(0.88_0.025_80/0.15)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.58_0.06_145)]">
            Our offerings
          </p>
          <h2 className="mt-2 font-serif text-3xl text-[oklch(0.25_0.02_140)]">
            Care that feels human
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-[oklch(0.82_0.012_110/0.3)] transition-all hover:bg-white hover:shadow-md">
                <h3 className="font-serif text-lg text-[oklch(0.25_0.02_140)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[oklch(0.45_0.025_140)]">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="text-sm font-medium text-[oklch(0.58_0.06_145)] transition-colors hover:text-[oklch(0.52_0.06_145)]">
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Check-in prompt */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[oklch(0.58_0.06_145)] px-10 py-14 text-white">
            <h2 className="font-serif text-3xl">Not sure where to start?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">
              Our symptom check-in tool listens to what you&apos;re experiencing and recommends the modalities most likely to help — no medical degree required.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/check-in" className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[oklch(0.58_0.06_145)] transition-all hover:bg-white/90">
                Check in now
              </Link>
              <Link href="/team" className="inline-flex h-11 items-center rounded-full border border-white/30 px-6 text-sm font-medium text-white/90 transition-all hover:bg-white/10">
                Meet our practitioners
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}