"use server";
import { FormData } from "@/types/mail-form";
import nodemailer from "nodemailer";
import mailFormSchema from "../validation/mail-form";
import { getErrorMessage } from "./error";
import sanitizeHtml from "sanitize-html";

const SMTP_SERVER_USERNAME = process.env.SMTP_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.MAIL_RECEIVER_ADDRESS;

export async function sendMail(formData: FormData) {
  try {
    // Validate input structure
    mailFormSchema.parse(formData);

    // Sanitize user input to prevent HTML injection/XSS
    const safeName = sanitizeHtml(formData.name);
    const safeEmail = sanitizeHtml(formData.email);
    const safeSubject = sanitizeHtml(formData.subject);
    const safeMessage = sanitizeHtml(formData.message, {
      allowedTags: [],
      allowedAttributes: {},
    });

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: safeEmail,
      to: SITE_MAIL_RECIEVER,
      subject: safeSubject,
      text: safeMessage,
      replyTo: safeEmail,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; font-size: 16px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; white-space: pre-wrap;">
            ${safeMessage}
          </div>
          <hr />
          <small>This email was sent from your website contact form.</small>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error),
    };
  }
}
