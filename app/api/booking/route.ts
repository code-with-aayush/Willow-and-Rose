import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload) {
    return NextResponse.json({ error: "Invalid booking webhook payload." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    mode: "demo",
    message: "Booking webhook received. Connect Cal.com and Airtable credentials for production lead sync."
  });
}
