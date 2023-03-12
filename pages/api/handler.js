"use strict";

import { createClient } from "@/utils/supabase-browser";

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "wealthaid@outlook.com", // generated ethereal user
      pass: "Forever2021", // generated ethereal password
    },
    tls: {
      cipher: "STARTTLS",
    },
    requireTLS: true,
    pool: true,
    maxConnections: 1,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const supabase = createClient();

  let { data: emails, error } = await supabase.from("test").select("email");

  console.log(emails);

  const message = "Does It Work?";
  const subject = "Testing Purposes Only";

  emails.map(async ({ email }) => {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: '"WealthAid Mining" <wealthaid@outlook.com>', // sender address
          to: `${email}`, // list of receivers
          subject: `${subject}`, // Subject line
          text: `${message}`, // plain text body
          html: `
             <html>
                <body>
                    <p>
                        ${message}
                    </p>
                    <footer>
                      <p style="text-align: center;">WealthAid Mining</p>
                      <p style="text-align: center;">All Rights Reserved Ⓒ 2023</p>
                    </footer>
                </body>
             </html>
             `, // html body
        },
        (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(info);
            resolve(info);
          }
        }
      );
    });
  });

  console.log("Message Sent!");

  res.status(200).json({ status: "OK" });
}
