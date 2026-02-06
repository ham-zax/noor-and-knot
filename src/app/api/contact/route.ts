import { NextResponse } from "next/server";
import { Resend } from "resend";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const store = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return ip || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = store.get(key);

  if (!current || now > current.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      cityCountry?: string;
      interestedIn?: string;
      message?: string;
      website?: string;
    };

    if (body.website) {
      return NextResponse.json({ success: true, message: "Thanks" });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ success: false, message: "Name is required." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Valid email is required." }, { status: 400 });
    }

    if (!message || message.length < 6) {
      return NextResponse.json({ success: false, message: "Message is too short." }, { status: 400 });
    }

    const clientKey = getClientKey(request);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!resendApiKey || !toEmail) {
      return NextResponse.json(
        { success: false, message: "Contact service is not configured yet." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: "Noor & Knot <onboarding@resend.dev>",
      to: toEmail,
      subject: `New order request from ${name}`,
      replyTo: process.env.CONTACT_REPLY_TO || email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `City/Country: ${body.cityCountry || "-"}`,
        `Interested In: ${body.interestedIn || "-"}`,
        `Message: ${message || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true, message: "Request sent successfully." });
  } catch {
    return NextResponse.json(
      { success: false, message: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
