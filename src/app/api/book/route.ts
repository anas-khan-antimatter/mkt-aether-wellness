import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, practitioner, date, time, notes } = body;

    const missing: string[] = [];
    if (!name) missing.push("name");
    if (!email) missing.push("email");
    if (!service) missing.push("service");
    if (!date) missing.push("date");
    if (!time) missing.push("time");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Simulate booking creation
    const booking = {
      id: `BK-${Date.now().toString(36).toUpperCase()}`,
      name,
      email,
      phone: phone || null,
      service,
      practitioner: practitioner || null,
      date,
      time,
      notes: notes || null,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      booking,
      message: `Your ${service} with${practitioner ? ` ${practitioner} on` : " on"} ${date} at ${time} is confirmed. A confirmation email will be sent to ${email}.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your booking." },
      { status: 500 }
    );
  }
}