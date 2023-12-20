"use server";

import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { randomUUID } from "crypto";
import { z } from "zod";


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

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  name: z.string().min(3, { message: "Minimum 3 chracters" }),
});

export type State = {
  errors?: {
    email?: string[];
    name?: string[];
  };
  message?: string | null;
  userFound?: boolean | null;
};

export async function subscribeUser(prevState: State, formdata: FormData) {
  const validateData = FormSchema.safeParse({
    email: formdata.get("email"),
    name: formdata.get("name"),
  });

  if (!validateData.success) {
    return {
      errors: validateData.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { email, name } = validateData.data;

  try {
    const alredyUser = await prisma.user.findUnique({
      where: {
        email,
        AND: {
          subscribed: true,
        },
      },
    });

    if (!alredyUser) {
      // const user = await prisma.user.create({
      //   data: {
      //     email,
      //     name,
      //   },
      // });

      // const token = await prisma.activatToken.create({
      //   data: {
      //     token: `${randomUUID()}`.replace(/-/g, ""),
      //     userId: user.id,
      //   },
      // });

      // await sendMail(
      //   email,
      //   "Email Verification",
      //   `${process.env.NEXT_PUBLIC_VAR_URL}/api/subscribe/${token.token}`
      // );
      return {
        message: null,
        errors: undefined,
      };
    } else {
      return {
        message: "Already User",
        errors: { email: undefined, name: undefined },
        userFound: true,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "Database Under Maintenance",
      errors: undefined,
    };
  } finally {
    prisma.$disconnect();
  }
}
