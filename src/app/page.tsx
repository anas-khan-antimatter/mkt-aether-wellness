export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden px-4">
        {/* Decorative background circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sage-200/30 blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-cream-300/30 blur-2xl -z-10" />
        <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-sage-400/20 blur-sm animate-float -z-10" />

        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage-200/50 text-sage-700 text-xs font-medium tracking-wide">
              Now accepting new clients
            </span>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight tracking-wide mt-6">
              Where calm meets
              <span className="text-sage-600 block italic">clinical excellence.</span>
            </h1>
            <p className="text-sage-800 text-lg mt-4 max-w-md leading-relaxed">
              Sage-infused wellness, evidence-based modalities, and practitioner-led care in a space designed for restoration.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-600 text-cream-100 font-medium text-sm hover:bg-sage-700 transition shadow-md hover:shadow-lg"
              >
                Book a session
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l14 12M12 5l12 14" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sage-400/50 text-sage-700 font-medium text-sm hover:bg-sage-100/50 transition"
              >
                Explore services
              </a>
            </div>
          </div>
          <div className="relative aspect-square max-w-sm mx-auto">
            <div className="rounded-4xl bg-gradient-to-br from-sage-300 to-cream-200 shadow-2xl aspect-square flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-full bg-white/50 backdrop-blur" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-cream-400/40 blur-xl -z-5" />
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="py-16 px-4 bg-cream-200/30">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sage-500 text-xs tracking-widest uppercase">Our philosophy</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-4 text-sage-800">
            Healing is not a luxury — it is a practice.
          </h2>
          <p className="text-sage-700 text-lg mt-4 max-w-2xl mx-auto">
            Aether bridges ancient wisdom and modern clinical science. Every modality we offer
            is chosen for its measurable impact on nervous system regulation, fascia health, and
            emotional resilience.
          </p>
        </div>
      </section>

      {/* Modality preview */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl text-sage-800 text-center">Our modalities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Craniosacral Therapy", desc: "Gentle palpation to release tension held in the cerebrospinal fluid and dural membranes.", icon: "sparkles" },
              { title: "Gua Sha Facilitation", desc: "Contoured stone guided along meridians to remodel fascia and move stagnant lymph.", icon: "gem" },
              { title: "Somatic Breathwork", desc: "Structured breath patterns that shift autonomic state and unlock held somatic patterns.", icon: "wind" },
            ].map((m) => (
              <a
                key={m.title}
                href={`/services/${m.title.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "")}`}
                className="group rounded-3xl p-6 bg-white/60 backdrop-blur border border-sage-200/40 hover:bg-white/80 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 rounded-full bg-sage-300/40 flex items-center justify-center mb-4">
                  <span className="text-sage-600 text-lg">✦</span>
                </div>
                <h3 className="font-serif text-xl text-sage-800">{m.title}</h3>
                <p className="text-sage-600 text-sm mt-2 leading-relaxed">{m.desc}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="text-sage-700 underline decoration-sage-400/30 text-sm font-medium">
              View all 8 modalities →
            </a>
          </div>
        </div>
      </section>

      {/* Practitioner strip */}
      <section className="py-16 px-4 bg-gradient-to-b from-sage-100/40 to-cream-100/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl text-sage-800">Meet your guides</h2>
          <p className="text-sage-700 text-lg mt-4 max-w-xl mx-auto">
            Every practitioner at Aether holds advanced clinical training and a deep commitment
            to trauma-informed, consent-based care.
          </p>
          <a
            href="/practitioners"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-sage-600 text-cream-100 text-sm hover:bg-sage-700 transition"
          >
            Meet the team
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-sage-200/20 blur-3xl -z-10" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl text-sage-800">Ready to restore?</h2>
          <p className="text-sage-700 text-lg mt-4">
            First session consultations are always complimentary. We&rsquo;ll listen to what your
            body is asking for.
          </p>
          <a
            href="/book"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-sage-600 text-cream-100 text-lg font-medium hover:bg-sage-700 transition shadow-xl"
          >
            Book your free consultation
          </a>
        </div>
      </section>
    </>
  );
}