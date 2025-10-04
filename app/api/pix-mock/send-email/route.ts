import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Redis } from '@upstash/redis';

if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
  console.error("CRITICAL ERROR: Missing Gmail or Redis environment variables.");
  throw new Error("Server configuration incomplete.");
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const tenMinutesInSeconds = 10 * 60;
    const redisKey = `email-code:${email}`;

    await redis.set(redisKey, code, { ex: tenMinutesInSeconds });
    console.log(`[Email] Storing code ${code} for key: ${redisKey}`);

    const mailOptions = {
      from: `"LenDeFi" <${process.env.GMAIL_EMAIL}>`, 
      to: email,
      subject: 'Your Verification Code',
      html: `<p>Your verification code is: <strong>${code}</strong></p><p>This code will expire in 10 minutes.</p>`, 
    };


    await transporter.sendMail(mailOptions);

    console.log(`[Email] Code sent successfully to ${email} via Nodemailer/Gmail.`);
    return NextResponse.json({ message: "Verification code sent." }, { status: 200 });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to send email.";
    console.error("Error sending email:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}