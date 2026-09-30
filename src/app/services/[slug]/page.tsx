import { getServiceBySlug, services } from "@/lib/services";
import { notFound } from "next/navigation";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  // Sibling nav
  const idx = services.findIndex((s: { slug: string }) => s.slug === params.slug);
  const prev = idx > 0 ? services[idx - 1] : null;
  const next = idx < services.length - 1 ? services[idx + 1] : null;

  return (
    <>
      {/* Back link */}
      <section className="px-4 py-4">
        <a href="/services" className="text-sage-600 text-sm flex items-center gap-2">
          ← Back to all services
        </a>
      </section>

      {/* Header */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-sage-500 text-xs tracking-widest uppercase">{service.duration} · from {service.price}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-sage-800 mt-3">{service.title}</h1>
          <p className="text-sage-700 text-xl mt-3 italic">{service.tagline}</p>
        </div>
      </section>

      {/* Description */}
      <section className="px-4 py-8 bg-cream-100/30">
        <div className="mx-auto max-w-3xl prose prose-sage">
          <p className="text-sage-800 text-lg leading-relaxed">{service.fullDescription}</p>
        </div>
      </section>

      {/* Two-column: benefits + contraindications */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-2xl text-sage-800 mb-4">Benefits</h2>
            <ul className="space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sage-700 text-sm">
                  <span className="text-sage-500">+</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-sage-800 mb-4">Contraindications</h2>
            <p className="text-sage-600 text-xs font-medium mb-4">This modality may not be suitable for everyone. Please review:</p>
            <ul className="space-y-2">
              {service.contraindications.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sage-700 text-sm">
                  <span className="text-sage-500">·</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sibling nav */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-4xl flex justify-between">
          {prev ? (
            <a href={`/services/${prev.slug}`} className="group max-w-xs">
              <span className="text-xs text-sage-500">Previous</span>
              <p className="font-serif text-lg text-sage-800">{prev.title}</p>
            </a>
          ) : <div />}
          {next ? (
            <a href={`/services/${next.slug}`} className="group max-w-xs text-right">
              <span className="text-xs text-sage-500">Next</span>
              <p className="font-serif text-lg text-sage-800">{next.title}</p>
            </a>
          ) : <div />}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-sage-100/40">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sage-700 text-lg">Ready to experience {service.title}?</p>
          <a
            href={`/book?service=${service.slug}`}
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-sage-600 text-cream-100 text-sm hover:bg-sage-700 transition"
          >
            Book {service.title}
          </a>
        </div>
      </section>
    </>
  );
}