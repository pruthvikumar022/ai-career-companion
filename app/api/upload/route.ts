import { NextResponse } from "next/server";
import db from "@/lib/db";

const pdf = require("pdf-parse/lib/pdf-parse");
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Extract PDF text
   const pdfData = await pdf(buffer);
   const extractedText = pdfData.text.trim();

    return await new Promise<Response>((resolve) => {
      db.run(
        "INSERT INTO resumes (filename, text) VALUES (?, ?)",
        [file.name, extractedText],
        function (err) {
          if (err) {
            console.error("DB Error:", err);

            resolve(
              NextResponse.json(
                { error: err.message },
                { status: 500 }
              )
            );
            return;
          }

          resolve(
            NextResponse.json({
              ok: true,
              resumeId: this.lastID,
              fileName: file.name,
              text: extractedText,
              message: "Resume uploaded and saved successfully",
            })
          );
        }
      );
    });
  } catch (error: any) {
    console.error("Upload Error:", error);

    return NextResponse.json(
      {
        error: error?.message || "Failed to process PDF",
      },
      { status: 500 }
    );
  }
}