"use client";

import { services } from "@/lib/services";
import { useState } from "react";

type Step = "intake" | "modality" | "time" | "confirm";

export default function BookPage() {
  const [step, setStep] = useState<Step>("modality");
  const [selectedModality, setSelectedModality] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Mock time slots
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const slots = [
    { day: "Mon, Jun 10", times: ["9:00 AM", "10:30 AM", "1:00 PM", "3:00 PM"] },
    { day: "Tue, Jun 11", times: ["9:30 AM", "11:00 AM", "2:00 PM", "4:30 PM"] },
    { day: "Wed, Jun 12", times: ["8:00 AM", "10:00 AM", "12:00 PM", "3:30 PM"] },
  ];

  const handleSubmit = () => {
    setConfirmed(true);
  };

  const reset = () => {
    setStep("modality");
    setSelectedModality("");
    setSelectedSlot("");
    setName("");
    setEmail("");
    setSymptoms("");
    setConfirmed(false);
  };

  if (confirmed) {
    return (
      <section className="py-16 px-4">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="w-16 h-16 rounded-full bg-sage-300/50 flex items-center justify-center mx-auto mb-6">
            <span className="text-sage-700 text-3xl">✓</span>
          </div>
          <h1 className="font-serif text-3xl text-sage-800">Your session is reserved</h1>
          <p className="text-sage-700 text-lg mt-4">
            We&rsquo;ve sent a calendar invite to <strong>{email}</strong>. Your {selectedModality.replace("-", " ")} session
            is on <strong>{selectedSlot}</strong>.
          </p>
          <p className="text-sage-600 text-sm mt-2">
            A confirmation reminder will arrive 48 hours before your visit.
          </p>
          <a href="/" className="inline-block mt-6 px-6 py-2 rounded-full bg-sage-600 text-cream-100 text-sm hover:bg-sage-700 transition">
            Return home
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Progress bar */}
      <section className="px-4 py-4">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-2 text-xs text-sage-500 font-medium">
            {["modality", "time", "details"].map((s, i) => (
              <React.Fragment key={s}>
                {i > 0 && <span className="text-sage-400">→</span>}
                <span className={step === s || (step === "confirm" && i <= 2) ? "text-sage-700 font-semibold" : "opacity-50"}>
                  {s === "modality" ? "1. Choose modality" : s === "time" ? "2. Pick time" : "3. Your details"}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Step: Modality */}
      {step === "modality" && (
        <section className="px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-serif text-3xl text-sage-800 mb-2">Choose a modality</h1>
            <p className="text-sage-700 text-sm mb-6">Select the service you&rsquo;d like to book.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => { setSelectedModality(s.slug); setStep("time"); }}
                  className={`rounded-2xl p-5 text-left border-2 transition-all duration-200 ${
                    selectedModality === s.slug
                      ? "bg-sage-200/50 border-sage-500"
                      : "bg-white/60 border-sage-200/30 hover:bg-white/80 hover:shadow-md"
                  }`}
                >
                  <h3 className="font-serif text-lg text-sage-800">{s.title}</h3>
                  <p className="text-sage-600 text-xs mt-1">{s.duration} · {s.price}</p>
                  <p className="text-sage-600 text-xs mt-1 line-clamp-2">{s.tagline}</p>
                </button>
              ))}
            </div>
            {selectedModality && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setStep("time")}
                  className="px-6 py-2.5 rounded-full bg-sage-600 text-cream-100 text-sm hover:bg-sage-700 transition"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Step: Time */}
      {step === "time" && (
        <section className="px-4 py-10">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-3xl text-sage-800 mb-2">Pick your time</h1>
            <p className="text-sage-700 text-sm mb-2">
              <span className="text-sage-600 font-medium">{services.find((s) => s.slug === selectedModality)?.title}</span>
            </p>
            <div className="space-y-4">
              {slots.map((slot) => (
                <div key={slot.day} className="bg-white/70 backdrop-blur border border-sage-200/30 rounded-2xl p-4">
                  <p className="font-serif text-lg text-sage-800">{slot.day}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {slot.times.map((t) => {
                      const slotId = `${slot.day} ${t}`;
                      return (
                        <button
                          key={slotId}
                          onClick={() => { setSelectedSlot(slotId); setStep("details"); }}
                          className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                            selectedSlot === slotId
                              ? "bg-sage-500 text-cream-100"
                              : "bg-sage-200/50 text-sage-700 hover:bg-sage-300/50"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep("modality")} className="text-sage-600 text-sm underline">← Back</button>
            </div>
          </div>
        </section>
      )}

      {/* Step: Details */}
      {(step === "details" || step === "confirm") && (
        <section className="px-4 py-10">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-serif text-3xl text-sage-800 mb-2">Your details</h1>

            <div className="bg-white/70 backdrop-blur border border-sage-200/30 rounded-2xl p-5 space-y-4">
              <div>
                <label className="block text-sage-700 text-xs font-medium mb-1">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/80 border border-sage-300/30 text-sage-800 text-sm outline-none"
                  placeholder="e.g. Jordan Wei"
                />
              </div>
              <div>
                <label className="block text-sage-700 text-xs font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/80 border border-sage-300/30 text-sage-800 text-sm outline-none"
                  placeholder="jordan@example.com"
                />
              </div>
              <div>
                <label className="block text-sage-700 text-xs font-medium mb-1">What brings you in? (optional)</label>
                <textarea
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/80 border border-sage-300/30 text-sage-800 text-sm outline-none min-h-20 resize-none"
                  placeholder="Briefly describe what you&rsquo;re hoping to address..."
                  rows={3}
                />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-sage-100/50 rounded-2xl p-5 mt-6">
              <h3 className="text-sage-700 text-sm font-semibold mb-2">Booking summary</h3>
              <div className="text-sage-800 text-sm space-y-1">
                <p><span className="text-sage-500">Modality:</span> {services.find((s) => s.slug === selectedModality)?.title}</p>
                <p><span className="text-sage-500">Time:</span> {selectedSlot}</p>
                <p><span className="text-sage-500">Name:</span> {name || "—"}</p>
                <p><span className="text-sage-500">Email:</span> {email || "—"}</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep("time")} className="text-sage-600 text-sm underline">← Back</button>
              <button
                onClick={handleSubmit}
                disabled={!name || !email}
                className="px-6 py-2.5 rounded-full bg-sage-600 text-cream-100 text-sm hover:bg-sage-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm booking
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}