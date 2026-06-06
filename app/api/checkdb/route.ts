import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(): Promise<Response> {
  return new Promise<Response>((resolve) => {
    db.all("SELECT * FROM resumes", [], (err, rows) => {
      if (err) {
        resolve(
          NextResponse.json({ error: err.message }, { status: 500 })
        );
      } else {
        resolve(NextResponse.json(rows));
      }
    });
  });
}