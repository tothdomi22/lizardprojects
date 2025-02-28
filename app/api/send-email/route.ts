// app/api/send-email/route.ts (Correct Path for App Router)

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import generateEmailTemplate from '../../components/email_templates/emailTemplate'
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Parse JSON body properly
    const { firstName, lastName, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: 'mail.lizardprojects.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOption = {
      from: '"Lizard Projects Website" <info@lizardprojects.com>',
      to: 'info@lizardprojects.com',
      subject: 'New contact submission',
      html: generateEmailTemplate(firstName, lastName, email, phone, message),
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Critical error, failed to send email' }, { status: 500 });
  }
}
