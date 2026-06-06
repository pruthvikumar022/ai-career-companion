import { NextResponse } from "next/server";


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

      return NextResponse.json({
        ok: true,
        fileName: file.name,
        text: extractedText,
        message: "Resume processed successfully",
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