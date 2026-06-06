import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import db from "@/lib/db";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { resumeText } = await request.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
Analyze the resume and return ONLY valid JSON.

Format:

{
  "summary": "short professional summary",
  "skills": ["skill1", "skill2"],
  "score": 85,
  "suggestions": [
    "suggestion 1",
    "suggestion 2"
  ]
}
          `,
        },
        {
          role: "user",
          content: resumeText,
        },
      ],
      temperature: 0.3,
    });

    const content =
  completion.choices[0]?.message?.content || "{}";

const cleaned = content
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const analysis = JSON.parse(cleaned);

    await new Promise<void>((resolve, reject) => {
      db.run(
        `
        INSERT INTO analyses
        (resume_id, summary, skills, score)
        VALUES (?, ?, ?, ?)
        `,
        [
          1,
          analysis.summary,
          JSON.stringify(analysis.skills),
          analysis.score,
        ],
        (err) => {
          if (err) {
            reject(err);
            return;
          }

          resolve();
        }
      );
    });

    return NextResponse.json({
      ok: true,
      analysis,
    });
  } catch (error: any) {
    console.error("GROQ ERROR:", error);

    return NextResponse.json(
      {
        error: error?.message || "Analysis failed",
      },
      { status: 500 }
    );
  }
}