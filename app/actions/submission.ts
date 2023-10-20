"use server";

import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: email,
    pass: password,
  },
});

export async function submit(prevState: any, formData: FormData) {
  try {
    console.log("starting");
    const mailOptions: Object = {
      from: email,
      to: "contact@kreatis.io",
      subject: `New Message from ${formData.get("name")}, Email: ${formData.get(
        "email"
      )}`,
      text: formData.get("message"),
      debug: true,
      logger: true,
    };

    console.log("info taken");

    const info = await transporter.sendMail(mailOptions);

    console.log("sent");

    return { message: "success" };
  } catch (e) {
    console.error(e);
    return { message: "err" };
  }
}
