import { NextResponse } from "next/server";
import { journalPrompts } from "@/lib/data";

export async function GET() {
  const today = new Date();
  // Deterministic "random" selection based on day of year
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const index = dayOfYear % journalPrompts.length;

  const prompt = journalPrompts[index];

  return NextResponse.json({
    prompt,
    date: today.toISOString().split("T")[0],
    dayOfYear,
  });
}