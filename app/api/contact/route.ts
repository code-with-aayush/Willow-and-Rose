import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload?.name || !payload?.email || !payload?.message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: "Contact request accepted. Configure RESEND_API_KEY to send production email."
    });
  }

  // Production hook: create a Resend client here and send to hello@willowandrose.com.
  return NextResponse.json({ ok: true });
}
