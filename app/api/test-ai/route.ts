import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("http://localhost:3001/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resumeText: "HTML CSS JavaScript React Node.js Python SQL"
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}