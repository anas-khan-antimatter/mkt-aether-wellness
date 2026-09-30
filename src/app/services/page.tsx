import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <>
      <section className="py-8 px-4">
        <div className="mx-auto max-w-6xl">
          <span className="text-sage-500 text-xs tracking-widest uppercase">Our modalities</span>
          <h1 className="font-serif text-4xl md:text-5xl text-sage-800 mt-3">Services &amp; modalities</h1>
          <p className="text-sage-700 text-lg mt-3 max-w-2xl">
            Every offering at Aether is chosen for its measurable impact on the nervous system, fascia health, and emotional resilience. Below, you&rsquo;ll find the full scope of our clinical modalities.
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-3xl p-6 bg-white/60 backdrop-blur border border-sage-200/40 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sage-300/40 flex items-center justify-center">
                    <span className="text-sage-600 text-lg">✦</span>
                  </div>
                  <span className="text-xs text-sage-500 font-medium">{s.duration}</span>
                </div>
                <h2 className="font-serif text-xl text-sage-800">{s.title}</h2>
                <p className="text-sage-600 text-sm mt-2 line-clamp-3">{s.tagline}</p>
                <div className="flex items-center gap-2 mt-4 text-sage-600 text-xs font-medium">
                  <span>From {s.price}</span>
                  <span>·</span>
                  <span>Learn more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-sage-100/40 to-cream-200/30">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-sage-800">Not sure where to start?</h2>
          <p className="text-sage-700 text-lg mt-4">
            Take our symptom assessment and we&rsquo;ll recommend the right modality for your presentation.
          </p>
          <div className="flex gap-4 mt-6 justify-center">
            <a href="/book" className="px-6 py-2.5 rounded-full bg-sage-600 text-cream-100 text-sm hover:bg-sage-700 transition">Book a session</a>
            <a href="/book?intake=true" className="px-6 py-2.5 rounded-full border border-sage-400/50 text-sage-700 text-sm hover:bg-sage-100/50 transition">Symptom assessment →</a>
          </div>
        </div>
      </section>
    </>
  );
}