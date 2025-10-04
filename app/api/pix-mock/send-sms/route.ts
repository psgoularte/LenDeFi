import { NextResponse } from 'next/server';
import Twilio from 'twilio';
import { Redis } from '@upstash/redis';
import { Ratelimit } from "@upstash/ratelimit";

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.error("CRITICAL ERROR: Missing required environment variables for Twilio or Redis.");
  throw new Error("Server configuration incomplete.");
}

const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "30 s"),
  analytics: true,
  prefix: "sms_ratelimit",
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json({ error: "Too many requests. Please try again in a moment." }, { status: 429 });
  }

  try {
    const { phone } = await request.json();

    if (!phone || typeof phone !== 'string') {
      return NextResponse.json({ error: "Phone number is required and must be a string" }, { status: 400 });
    }

    const sanitizedPhone = phone.replace(/\D/g, '');
    
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const tenMinutesInSeconds = 10 * 60;
    const redisKey = `sms-code:${sanitizedPhone}`;

    await redis.set(redisKey, code, { ex: tenMinutesInSeconds });

    await twilioClient.messages.create({
      body: `Your verification code is: ${code}`,
      from: twilioPhoneNumber,
      to: phone, 
    });

    return NextResponse.json({ message: "Verification code sent." }, { status: 200 });

  } catch (error: unknown) {
    console.error("Error sending SMS:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send SMS.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}