"use strict";
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  //   const data = JSON.parse(req.body);

//   const { email, message, subject } = data;

  const email = "mikkimanhattan@gmail.com";
  const message = "hello world";
  const subject = "cold world";

  console.log(email);
  console.log(message);

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
  });

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

  console.log("Message Sent!");
}
