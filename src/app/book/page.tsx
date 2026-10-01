"use client";

import { useState, useEffect } from "react";
import { services, practitioners, timeSlots } from "@/lib/data";
import { CheckCircle, Loader2, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPractitioner, setSelectedPractitioner] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState("");

  // Generate next 14 days
  const getAvailableDates = () => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        dates.push(d.toISOString().split("T")[0]);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const handleBook = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: selectedService,
          practitioner: selectedPractitioner,
          date: selectedDate,
          time: selectedTime,
          notes,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setConfirmationMsg(data.message);
        setConfirmed(true);
      } else {
        alert(data.error || "Booking failed");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const canProceedStep2 = selectedService && selectedDate && selectedTime;
  const canProceedStep3 = name && email;

  if (confirmed) {
    return (
      <div className="px-6 pb-24 pt-20">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[oklch(0.58_0.06_145/0.1)]">
            <CheckCircle className="h-8 w-8 text-[oklch(0.58_0.06_145)]" />
          </div>
          <h1 className="mt-6 font-serif text-3xl text-[oklch(0.25_0.02_140)]">
            You&apos;re booked
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[oklch(0.45_0.025_140)]">
            {confirmationMsg}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-full border border-[oklch(0.82_0.012_110/0.5)] px-6 text-sm font-medium text-[oklch(0.45_0.025_140)] hover:bg-white"
            >
              Back home
            </Link>
            <Link
              href="/check-in"
              className="inline-flex h-11 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-6 text-sm font-medium text-white"
            >
              Check in for symptoms
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 pb-24 pt-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.58_0.06_145)]">
          Book an appointment
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-[oklch(0.25_0.02_140)] md:text-5xl">
          Reserve your session
        </h1>

        {/* Steps indicator */}
        <div className="mt-8 flex items-center gap-2 text-sm">
          {["Service & Time", "Your Info", "Confirm"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${
                  step > i + 1
                    ? "bg-[oklch(0.58_0.06_145)] text-white"
                    : step === i + 1
                    ? "border-2 border-[oklch(0.58_0.06_145)] bg-[oklch(0.58_0.06_145/0.08)] text-[oklch(0.58_0.06_145)]"
                    : "border border-[oklch(0.82_0.012_110/0.5)] text-[oklch(0.55_0.04_140)]"
                }`}
              >
                {step > i + 1 ? "✓" : i + 1}
              </span>
              <span
                className={`text-xs ${
                  step === i + 1
                    ? "font-medium text-[oklch(0.25_0.02_140)]"
                    : "text-[oklch(0.55_0.04_140)]"
                }`}
              >
                {label}
              </span>
              {i < 2 && <span className="mx-1 h-px w-6 bg-[oklch(0.82_0.012_110/0.5)]" />}
            </div>
          ))}
        </div>

        {/* Step 1: Service + Time */}
        {step === 1 && (
          <div className="mt-10 animate-soft-fade-up">
            <h2 className="font-serif text-xl text-[oklch(0.25_0.02_140)]">
              Choose your service
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.title)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    selectedService === s.title
                      ? "border-[oklch(0.58_0.06_145)] bg-[oklch(0.58_0.06_145/0.06)] shadow-sm"
                      : "border-[oklch(0.82_0.012_110/0.4)] bg-white/50 hover:border-[oklch(0.58_0.06_145/0.3)]"
                  }`}
                >
                  <p className="font-serif text-base font-medium text-[oklch(0.25_0.02_140)]">
                    {s.title}
                  </p>
                  <p className="mt-1 text-xs text-[oklch(0.55_0.04_140)]">
                    {s.duration} · {s.price}
                  </p>
                </button>
              ))}
            </div>

            {selectedService && (
              <>
                <h2 className="mt-8 font-serif text-xl text-[oklch(0.25_0.02_140)]">
                  Pick a practitioner
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => setSelectedPractitioner("")}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      selectedPractitioner === ""
                        ? "border-[oklch(0.58_0.06_145)] bg-[oklch(0.58_0.06_145/0.06)] shadow-sm"
                        : "border-[oklch(0.82_0.012_110/0.4)] bg-white/50 hover:border-[oklch(0.58_0.06_145/0.3)]"
                    }`}
                  >
                    <p className="font-serif text-base font-medium text-[oklch(0.25_0.02_140)]">
                      No preference
                    </p>
                    <p className="mt-1 text-xs text-[oklch(0.55_0.04_140)]">
                      Let us assign the best match
                    </p>
                  </button>
                  {practitioners.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPractitioner(p.name)}
                      className={`rounded-2xl border p-4 text-left transition-all ${
                        selectedPractitioner === p.name
                          ? "border-[oklch(0.58_0.06_145)] bg-[oklch(0.58_0.06_145/0.06)] shadow-sm"
                          : "border-[oklch(0.82_0.012_110/0.4)] bg-white/50 hover:border-[oklch(0.58_0.06_145/0.3)]"
                      }`}
                    >
                      <p className="font-serif text-base font-medium text-[oklch(0.25_0.02_140)]">
                        {p.name}
                      </p>
                      <p className="mt-1 text-xs text-[oklch(0.55_0.04_140)]">
                        {p.title}
                      </p>
                    </button>
                  ))}
                </div>

                <h2 className="mt-8 font-serif text-xl text-[oklch(0.25_0.02_140)]">
                  Select date
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {availableDates.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`rounded-xl border px-4 py-2.5 text-sm transition-all ${
                        selectedDate === d
                          ? "border-[oklch(0.58_0.06_145)] bg-[oklch(0.58_0.06_145)] text-white"
                          : "border-[oklch(0.82_0.012_110/0.4)] bg-white/50 text-[oklch(0.45_0.025_140)] hover:border-[oklch(0.58_0.06_145/0.3)]"
                      }`}
                    >
                      {formatDate(d)}
                    </button>
                  ))}
                </div>

                {selectedDate && (
                  <>
                    <h2 className="mt-6 font-serif text-xl text-[oklch(0.25_0.02_140)]">
                      Select time
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`rounded-xl border px-4 py-2.5 text-sm transition-all ${
                            selectedTime === t
                              ? "border-[oklch(0.58_0.06_145)] bg-[oklch(0.58_0.06_145)] text-white"
                              : "border-[oklch(0.82_0.012_110/0.4)] bg-white/50 text-[oklch(0.45_0.025_140)] hover:border-[oklch(0.58_0.06_145/0.3)]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}

            <div className="mt-10">
              <button
                onClick={() => setStep(2)}
                disabled={!canProceedStep2}
                className="inline-flex h-12 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-8 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continue to your details
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Personal info */}
        {step === 2 && (
          <div className="mt-10 animate-soft-fade-up space-y-5">
            <h2 className="font-serif text-xl text-[oklch(0.25_0.02_140)]">
              Your contact details
            </h2>

            <div>
              <label className="text-sm font-medium text-[oklch(0.45_0.025_140)]">
                Full name *
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-1 w-full rounded-xl border border-[oklch(0.82_0.012_110/0.5)] bg-white/60 px-4 py-3 text-sm text-[oklch(0.25_0.02_140)] placeholder:text-[oklch(0.6_0.03_140)] focus:border-[oklch(0.58_0.06_145)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.06_145/0.15)]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[oklch(0.45_0.025_140)]">
                Email address *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-[oklch(0.82_0.012_110/0.5)] bg-white/60 px-4 py-3 text-sm text-[oklch(0.25_0.02_140)] placeholder:text-[oklch(0.6_0.03_140)] focus:border-[oklch(0.58_0.06_145)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.06_145/0.15)]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[oklch(0.45_0.025_140)]">
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="mt-1 w-full rounded-xl border border-[oklch(0.82_0.012_110/0.5)] bg-white/60 px-4 py-3 text-sm text-[oklch(0.25_0.02_140)] placeholder:text-[oklch(0.6_0.03_140)] focus:border-[oklch(0.58_0.06_145)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.06_145/0.15)]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[oklch(0.45_0.025_140)]">
                Notes or concerns
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Anything you'd like us to know before your visit..."
                rows={3}
                className="mt-1 w-full resize-none rounded-xl border border-[oklch(0.82_0.012_110/0.5)] bg-white/60 px-4 py-3 text-sm text-[oklch(0.25_0.02_140)] placeholder:text-[oklch(0.6_0.03_140)] focus:border-[oklch(0.58_0.06_145)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.06_145/0.15)]"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="inline-flex h-12 items-center rounded-full border border-[oklch(0.82_0.012_110/0.5)] px-6 text-sm font-medium text-[oklch(0.45_0.025_140)] hover:bg-white"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!canProceedStep3}
                className="inline-flex h-12 items-center rounded-full bg-[oklch(0.58_0.06_145)] px-8 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Review & confirm
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="mt-10 animate-soft-fade-up">
            <h2 className="font-serif text-xl text-[oklch(0.25_0.02_140)]">
              Review your booking
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-[oklch(0.82_0.012_110/0.4)] bg-white/60 p-5">
                <Calendar className="h-5 w-5 text-[oklch(0.58_0.06_145)]" />
                <div>
                  <p className="text-sm font-medium text-[oklch(0.25_0.02_140)]">
                    {formatDate(selectedDate)} at {selectedTime}
                  </p>
                  <p className="text-xs text-[oklch(0.55_0.04_140)]">Date & time</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[oklch(0.82_0.012_110/0.4)] bg-white/60 p-5">
                <User className="h-5 w-5 text-[oklch(0.58_0.06_145)]" />
                <div>
                  <p className="text-sm font-medium text-[oklch(0.25_0.02_140)]">
                    {selectedService}
                    {selectedPractitioner && ` with ${selectedPractitioner}`}
                  </p>
                  <p className="text-xs text-[oklch(0.55_0.04_140)]">Service</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-[oklch(0.82_0.012_110/0.4)] bg-white/60 p-5">
                <Clock className="h-5 w-5 text-[oklch(0.58_0.06_145)]" />
                <div>
                  <p className="text-sm font-medium text-[oklch(0.25_0.02_140)]">
                    {name} · {email}
                  </p>
                  <p className="text-xs text-[oklch(0.55_0.04_140)]">Your details</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="inline-flex h-12 items-center rounded-full border border-[oklch(0.82_0.012_110/0.5)] px-6 text-sm font-medium text-[oklch(0.45_0.025_140)] hover:bg-white"
              >
                Back
              </button>
              <button
                onClick={handleBook}
                disabled={loading}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[oklch(0.58_0.06_145)] px-8 text-sm font-medium text-white transition-all hover:bg-[oklch(0.52_0.06_145)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Confirming...
                  </>
                ) : (
                  "Confirm booking"
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}