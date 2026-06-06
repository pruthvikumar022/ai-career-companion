import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS resumes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          filename TEXT NOT NULL,
          text TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      db.run(`
        CREATE TABLE IF NOT EXISTS analyses (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          resume_id INTEGER NOT NULL,
          summary TEXT NOT NULL,
          skills TEXT NOT NULL,
          score INTEGER NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (resume_id) REFERENCES resumes(id)
        )
      `);
    });

    return NextResponse.json({
      ok: true,
      message: "Database initialized."
    });
  } catch (error) {
    console.error("DB init error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to initialize database."
      },
      { status: 500 }
    );
  }
}