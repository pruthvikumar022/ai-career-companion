import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
return new Promise<Response>((resolve) => {
db.get(
`       SELECT *
      FROM analyses
      ORDER BY id DESC
      LIMIT 1
      `,
[],
(err, row: any) => {
if (err) {
resolve(
NextResponse.json(
{ error: err.message },
{ status: 500 }
)
);
return;
}

    if (!row) {
      resolve(
        NextResponse.json({
          message: "No analysis found"
        })
      );
      return;
    }

    resolve(
      NextResponse.json({
        id: row.id,
        resume_id: row.resume_id,
        summary: row.summary,
        skills: row.skills,
        score: row.score,
        suggestions: row.suggestions,
        interview_questions: row.interview_questions,
        created_at: row.created_at
      })
    );
  }
);

});
}
