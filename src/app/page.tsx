import Link from "next/link";

const services = [
  { title: "Acupuncture", body: "Restore balance with precise, calming treatments tailored to your body." },
  { title: "Herbal Medicine", body: "Custom formulas that support recovery, sleep, and steady energy." },
  { title: "Mind-Body Therapy", body: "Breathwork and guided practice for stress that lives in the nervous system." },
  { title: "Wellness Memberships", body: "Ongoing care plans so progress compounds—not resets every season." },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-700/80">
            Holistic clinic · Brooklyn
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight tracking-tight text-stone-900 md:text-6xl">
            Healing that meets you where you are
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600">
            Aether Wellness blends ancient practice with modern clinical care—so you leave
            lighter, clearer, and more yourself.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/book" className="inline-flex h-11 items-center rounded-full bg-emerald-800 px-6 text-sm font-medium text-white hover:bg-emerald-900">
              Book a consult
            </Link>
            <Link href="/services" className="inline-flex h-11 items-center rounded-full border border-stone-300 px-6 text-sm font-medium text-stone-800 hover:bg-stone-50">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl text-stone-900">Care that feels human</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200/70">
                <h3 className="text-lg font-semibold text-stone-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl bg-emerald-900 px-10 py-14 text-emerald-50 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl">Ready to begin?</h2>
            <p className="mt-3 max-w-xl text-emerald-100/90">
              Book a complimentary intake. We&apos;ll listen first, then map a plan that fits your life.
            </p>
          </div>
          <Link href="/book" className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-emerald-900 hover:bg-emerald-50">
            Book your visit
          </Link>
        </div>
      </section>
    </main>
  );
}
