"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Loader2, Calendar, User, ClipboardList, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Booking {
  id: string;
  service: string;
  practitioner: string;
  date: string;
  time: string;
  status: string;
}

interface CareItem {
  id: string;
  task: string;
  completed: boolean;
}

interface PortalData {
  upcomingBookings: Booking[];
  carePlan: CareItem[];
  memberSince: string;
}

export default function PortalPage() {
  const [data, setData] = useState<PortalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/portal/bookings")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load portal data");
        return r.json();
      })
      .then((d: PortalData) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  const toggleCareItem = (id: string) => {
    if (!data) return;
    setData({
      ...data,
      carePlan: data.carePlan.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    });
  };

  return (
    <div className="px-6 pb-24 pt-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[oklch(0.62_0.045_130)]">
          Member Portal
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-[oklch(0.22_0.012_55)] md:text-5xl">
          Your wellness hub
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-[oklch(0.52_0.025_75)]">
          Upcoming visits, care plan, and continuity — all in one place.
        </p>

        {loading && (
          <div className="mt-10 flex items-center gap-3 text-sm text-[oklch(0.52_0.025_75)]">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading your portal...
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-2xl border border-[oklch(0.55_0.18_25/0.3)] bg-[oklch(0.55_0.18_25/0.06)] px-5 py-4 text-sm text-[oklch(0.55_0.18_25)]">
            {error}
          </div>
        )}

        {data && (
          <>
            {/* Upcoming visits */}
            <section className="mt-10">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[oklch(0.62_0.045_130)]" />
                <h2 className="font-serif text-xl text-[oklch(0.22_0.012_55)]">
                  Upcoming visits
                </h2>
              </div>

              {data.upcomingBookings.length === 0 && (
                <p className="mt-4 text-sm text-[oklch(0.52_0.025_75)]">
                  No upcoming appointments.
                </p>
              )}

              <div className="mt-4 grid gap-4">
                {data.upcomingBookings.map((b) => {
                  const formattedDate = new Date(b.date + "T12:00:00").toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  });
                  return (
                    <div
                      key={b.id}
                      className="rounded-2xl border border-[oklch(0.88_0.01_75/0.5)] bg-[oklch(0.99_0.003_80)] p-5 transition-all hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-serif text-lg font-medium text-[oklch(0.22_0.012_55)]">
                            {b.service}
                          </p>
                          <p className="mt-1 text-sm text-[oklch(0.52_0.025_75)]">
                            with {b.practitioner}
                          </p>
                          <p className="mt-1 text-xs text-[oklch(0.52_0.025_75)]">
                            {formattedDate} · {b.time}
                          </p>
                        </div>
                        <span className="rounded-full bg-[oklch(0.62_0.045_130/0.1)] px-3 py-1 text-xs font-medium text-[oklch(0.62_0.045_130)]">
                          {b.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Care Plan Checklist */}
            <section className="mt-12">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-[oklch(0.62_0.045_130)]" />
                <h2 className="font-serif text-xl text-[oklch(0.22_0.012_55)]">
                  Today&apos;s care plan
                </h2>
              </div>
              <p className="mt-1 text-xs text-[oklch(0.52_0.025_75)]">
                Member since {new Date(data.memberSince + "T12:00:00").toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>

              <div className="mt-4 space-y-3">
                {data.carePlan.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleCareItem(item.id)}
                    className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      item.completed
                        ? "border-[oklch(0.62_0.045_130)] bg-[oklch(0.62_0.045_130/0.06)]"
                        : "border-[oklch(0.88_0.01_75/0.5)] bg-[oklch(0.99_0.003_80)] hover:border-[oklch(0.62_0.045_130/0.3)]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        item.completed
                          ? "bg-[oklch(0.62_0.045_130)] text-white"
                          : "border-2 border-[oklch(0.88_0.01_75)]"
                      }`}
                    >
                      {item.completed ? "✓" : ""}
                    </span>
                    <span
                      className={`flex-1 text-sm ${
                        item.completed
                          ? "line-through text-[oklch(0.52_0.025_75/0.6)]"
                          : "text-[oklch(0.22_0.012_55)]"
                      }`}
                    >
                      {item.task}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mt-12">
              <Link
                href="/book"
                className="inline-flex h-12 items-center rounded-full bg-[oklch(0.62_0.045_130)] px-8 text-sm font-medium text-white transition-all hover:bg-[oklch(0.58_0.045_130)]"
              >
                Book another session
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
}