import { NextRequest, NextResponse } from "next/server";
import { symptomData } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    endpoint: "/api/suggest",
    method: "POST",
    description: "Get wellness modality suggestions based on symptoms",
    parameters: {
      symptoms: "string[] (required, e.g. ['anxiety', 'joint pain'])",
    },
    availableSymptoms: symptomData.map((e) => e.symptoms).flat().filter((v, i, a) => a.indexOf(v) === i),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { symptoms } = body as { symptoms: string[] };

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one symptom." },
        { status: 400 }
      );
    }

    // Try AI-powered suggestion if API key is available
    const openaiKey = process.env.OPENAI_API_KEY;
    if (openaiKey) {
      try {
        const prompt = `You are a clinical wellness intake advisor. Given these symptoms: ${symptoms.join(", ")}, respond with JSON: { "modalities": [string], "recommendation": string, "disclaimer": string }. Suggest 2-4 modalities (Acupuncture, Herbal Medicine, Mind-Body Therapy, Float Therapy, Sound Healing, Cryotherapy, Aromatherapy). Recommendation is 2-3 sentences. Keep tone warm and professional.`;

        const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (aiRes.ok) {
          const aiData = await aiRes.json();
          const parsed = JSON.parse(aiData.choices[0].message.content);
          return NextResponse.json({
            ...parsed,
            source: "ai",
          });
        }
      } catch {
        // Fall through to rule-based
      }
    }

    // Rule-based fallback
    const lowerSymptoms = symptoms.map((s) => s.toLowerCase());

    // Find best match: weigh by number of symptom overlaps
    let bestMatch = symptomData[0];
    let bestScore = 0;

    for (const entry of symptomData) {
      const score = entry.symptoms.filter((s) =>
        lowerSymptoms.some((ls) => ls.includes(s) || s.includes(ls))
      ).length;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    // Collect all modalities from matches with any overlap
    const allModalities = new Set<string>();
    for (const entry of symptomData) {
      const hasOverlap = entry.symptoms.some((s) =>
        lowerSymptoms.some((ls) => ls.includes(s) || s.includes(ls))
      );
      if (hasOverlap) {
        entry.modalities.forEach((m) => allModalities.add(m));
      }
    }

    const modalities =
      allModalities.size > 0
        ? Array.from(allModalities)
        : ["Mind-Body Therapy", "Acupuncture", "Sound Healing"];

    return NextResponse.json({
      modalities,
      recommendation: bestMatch.recommendation,
      disclaimer:
        "This suggestion is based on general wellness patterns and is not a medical diagnosis. Please consult with our practitioners for a personalized plan.",
      source: "rules",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request." },
      { status: 500 }
    );
  }
}