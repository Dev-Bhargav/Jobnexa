"use server";

import nodemailer from "nodemailer";

export async function sendMail(to: string, subject: string, template: string) {
  const mailOptions = {
    from: process.env.EMAIL_ID,
    to,
    subject,
    text: template,
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error.message);
    } else {
      return true;
    }
  });
}