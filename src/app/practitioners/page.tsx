import { practitioners } from "@/lib/practitioners";

export default function PractitionersPage() {
  return (
    <>
      <section className="py-8 px-4">
        <div className="mx-auto max-w-6xl">
          <span className="text-sage-500 text-xs tracking-widest uppercase">Our team</span>
          <h1 className="font-serif text-4xl md:text-5xl text-sage-800 mt-3">Meet your guides</h1>
          <p className="text-sage-700 text-lg mt-3 max-w-2xl">
            Every practitioner at Aether holds advanced clinical training and a deep commitment
            to trauma-informed, consent-based care. We are a small, intentional team.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-10">
          {practitioners.map((p) => (
            <article
              key={p.id}
              className="rounded-3xl bg-white/70 backdrop-blur border border-sage-200/30 p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sage-300 to-cream-200 flex-shrink-0 flex items-center justify-center">
                  <span className="text-sage-700 text-3xl font-serif">✦</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h2 className="font-serif text-2xl text-sage-800">{p.name}</h2>
                    <span className="text-sage-500 text-xs">{p.pronouns}</span>
                  </div>
                  <p className="text-sage-600 text-sm font-medium mt-1">{p.title} · {p.credentials}</p>
                  <p className="text-sage-700 text-sm mt-3 leading-relaxed">{p.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.specialties.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full bg-sage-200/50 text-sage-700 text-xs font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-sage-100/40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-sage-800">Work with us</h2>
          <p className="text-sage-700 text-lg mt-4">
            All new clients begin with a complimentary consultation to ensure the right fit.
          </p>
          <a
            href="/book"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-sage-600 text-cream-100 text-sm hover:bg-sage-700 transition"
          >
            Book a consultation
          </a>
        </div>
      </section>
    </>
  );
}