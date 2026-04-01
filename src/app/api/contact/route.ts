import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure your email service here
// Example using Gmail (you need to use app-specific password)
// Or use other email services like SendGrid, Mailgun, etc.

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Optional: Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Rantika Ayuning</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
