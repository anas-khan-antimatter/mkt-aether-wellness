"use client";

import { useState } from "react";
import { Sparkles, Loader2, AlertCircle } from "lucide-react";

const allSymptoms = [
  "Chronic Pain",
  "Headaches",
  "Muscle Tension",
  "Anxiety",
  "Insomnia",
  "Restlessness",
  "Fatigue",
  "Low Energy",
  "Brain Fog",
  "Digestive Issues",
  "Bloating",
  "Food Sensitivity",
  "Stress",
  "Burnout",
  "Overwhelm",
  "Mood Swings",
  "Irritability",
  "Sadness",
];

interface SuggestResult {
  modalities: string[];
  recommendation: string;
  disclaimer?: string;
  source?: string;
}

export default function CheckInPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<SuggestResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleSymptom = (symptom: string) => {
    setSelected((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
    setResult(null);
    setError("");
  };

  const handleSubmit = async () => {
    if (selected.length === 0) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms: selected }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Unable to get suggestions");
      }
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 pb-24 pt-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.58_0.06_145)]">
          Wellness Check-In
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-[oklch(0.25_0.02_140)] md:text-5xl">
          What brings you in today?
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[oklch(0.45_0.025_140)]">
          Select the symptoms or concerns you&apos;re experiencing. We&apos;ll
          suggest the modalities most likely to help.
        </p>

        {/* Symptom grid */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {allSymptoms.map((symptom) => {
              const isSelected = selected.includes(symptom);
              return (
                <button
                  key={symptom}
                  onClick={() => toggleSymptom(symptom)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-[oklch(0.58_0.06_145)] bg-[oklch(0.58_0.06_145)] text-white shadow-md"
                      : "border-[oklch(0.82_0.012_110/0.5)] bg-white/60 text-[oklch(0.45_0.025_140)] hover:border-[oklch(0.58_0.06_145/0.4)] hover:bg-[oklch(0.58_0.06_145/0.06)]"
                  }`}
                >
                  {symptom}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            disabled={selected.length === 0 || loading}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[oklch(0.58_0.06_145)] px-8 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)] hover:shadow-lg hover:shadow-[oklch(0.58_0.06_145/0.25)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Get suggestions
              </>
            )}
          </button>
          {selected.length > 0 && !loading && (
            <p className="mt-2 text-xs text-[oklch(0.55_0.04_140)]">
              {selected.length} selected
            </p>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50/50 px-5 py-4 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="mt-10 animate-soft-fade-up">
            <div className="rounded-3xl border border-[oklch(0.82_0.012_110/0.4)] bg-white/70 p-8">
              <h2 className="font-serif text-2xl text-[oklch(0.25_0.02_140)]">
                Suggested modalities
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {result.modalities.map((m) => (
                  <a
                    key={m}
                    href={`/services/${m.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-full bg-[oklch(0.58_0.06_145/0.1)] px-4 py-2 text-sm font-medium text-[oklch(0.52_0.06_145)] transition-colors hover:bg-[oklch(0.58_0.06_145/0.18)]"
                  >
                    {m}
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[oklch(0.58_0.06_145/0.05)] px-5 py-4">
                <p className="text-sm leading-relaxed text-[oklch(0.4_0.02_140)]">
                  {result.recommendation}
                </p>
              </div>

              {result.disclaimer && (
                <p className="mt-4 text-xs leading-relaxed text-[oklch(0.55_0.04_140)]">
                  {result.disclaimer}
                </p>
              )}

              <div className="mt-6">
                <a
                  href="/book"
                  className="inline-flex h-11 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-6 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)]"
                >
                  Book a session
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}