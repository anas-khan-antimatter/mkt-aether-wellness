import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="px-6 pb-24 pt-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-[oklch(0.55_0.04_140)] transition-colors hover:text-[oklch(0.25_0.02_140)]"
        >
          <ArrowLeft className="h-4 w-4" />
          All services
        </Link>

        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.58_0.06_145)]">
          {service.category}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-[oklch(0.25_0.02_140)] md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-2 font-serif text-lg italic text-[oklch(0.58_0.06_145)]">
          {service.tagline}
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-[oklch(0.45_0.025_140)]">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {service.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <DollarSign className="h-4 w-4" />
            {service.price}
          </span>
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-[oklch(0.4_0.02_140)]">
          <p>{service.fullDescription}</p>
        </div>

        <div className="mt-10">
          <h2 className="font-serif text-xl text-[oklch(0.25_0.02_140)]">Benefits</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-[oklch(0.82_0.012_110/0.3)] bg-white/50 px-4 py-3 text-sm text-[oklch(0.4_0.02_140)]"
              >
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.58_0.06_145)]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <Link
            href={`/book?service=${service.id}`}
            className="inline-flex h-12 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-8 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)] hover:shadow-lg hover:shadow-[oklch(0.58_0.06_145/0.25)]"
          >
            Book {service.title}
          </Link>
        </div>
      </div>
    </div>
  );
}