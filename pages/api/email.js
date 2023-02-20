"use strict";
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const { email, message, subject } = data;

  console.log(email);
  console.log(message);

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "support@zipoaidmining.com", // generated ethereal user
      pass: "Forever2021.", // generated ethereal password
    },
    tls: {
      cipher: "STARTTLS",
    },
    requireTLS: true,
  });

  let info = await transporter.sendMail({
    from: '"Zipo Aid" <support@zipoaidmining.com>', // sender address
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
                      <p style="text-align: center;">Zipo Aid</p>
                      <p style="text-align: center;">All Rights Reserved Ⓒ 2023</p>
                    </footer>
                </body>
             </html>
             `, // html body
  });

  let adminInfo = await transporter.sendMail({
    from: '"Zipo Aid" <support@zipoaidmining.com>', // sender address
    to: `support@zipoaidmining.com`, // list of receivers
    subject: `Update ${subject}`, // Subject line
    text: `${message}`, // plain text body
    html: `
             <html>
                <body>
                    <p>
                    Update from ${email} <br /> ${message}
                    </p>
                    <footer>
                      <p style="text-align: center;">Zipo Aid</p>
                      <p style="text-align: center;">All Rights Reserved Ⓒ 2023</p>
                    </footer>
                </body>
             </html>
             `, // html body
  });

  console.log("Message Sent!");
}
