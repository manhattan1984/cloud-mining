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

  const supabase = createClient();

  let { data: emails, error } = await supabase.from("test").select("email");

  console.log(emails);

  const message = "Does It Work?";
  const subject = "Testing Purposes Only";

  emails.map(async ({ email }) => {
    let info = await transporter.sendMail({
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
    });
  });

  console.log("Message Sent!");

  return res.end(JSON.stringify(emails));
}
