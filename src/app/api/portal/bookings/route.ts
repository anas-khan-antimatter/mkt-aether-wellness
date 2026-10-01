import { NextResponse } from "next/server";

export async function GET() {
  // Mock member portal data — upcoming visits + care plan
  const mockBookings = [
    {
      id: "BK-MOCK-001",
      service: "Acupuncture",
      practitioner: "Elara Voss",
      date: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: "BK-MOCK-002",
      service: "Float Therapy",
      practitioner: "Thomas Rivera",
      date: new Date(Date.now() + 86400000 * 5).toISOString().split("T")[0],
      time: "2:00 PM",
      status: "confirmed",
    },
  ];

  const carePlan = [
    { id: "cp-1", task: "Morning breathwork (5 min)", completed: true },
    { id: "cp-2", task: "Hydrate — 8 glasses today", completed: true },
    { id: "cp-3", task: "Evening journal entry", completed: false },
    { id: "cp-4", task: "Self-massage / foam roll", completed: false },
    { id: "cp-5", task: "Prepare for next session", completed: false },
  ];

  return NextResponse.json({
    upcomingBookings: mockBookings,
    carePlan,
    memberSince: "2024-09-15",
  });
}