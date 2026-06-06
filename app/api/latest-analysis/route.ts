import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    summary: "No analysis yet",
    skills: "[]",
    score: 0,
  });
}