"use strict";
const nodemailer = require("nodemailer");
import mjml2html from "mjml";

export default async function handler(req, res) {
  const EMAIL = "contact@wealthaidmining.com";
  const data = JSON.parse(req.body);

  const { email, message, subject } = data;

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: EMAIL, // generated ethereal user
      pass: "Forever2021$", // generated ethereal password
    },
    tls: {
      cipher: "STARTTLS",
    },
    requireTLS: true,
  });

  const htmlOutput = mjml2html(`<mjml>
  <mj-body background-color="#ffffff" font-size="13px">
    <mj-section background-color="#333333" vertical-align="top" padding-bottom="0px" padding-top="0">
      <mj-column vertical-align="top" width="100%">
        <mj-text align="left" color="#ffffff" font-size="45px" font-weight="bold" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px" padding-bottom="30px" padding-top="50px">${subject}</mj-text>
      </mj-column>
    </mj-section>
    <mj-section background-color="#333333" padding-bottom="20px" padding-top="20px">
      <mj-column vertical-align="middle" width="100%">
        <mj-text align="left" color="#ffffff" font-size="15px" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px">${message}</mj-text>
        <mj-text align="left" color="#ffffff" font-size="15px" font-family="open Sans Helvetica, Arial, sans-serif" padding-left="25px" padding-right="25px">Thanks, <br /> The WealthAid Mining Team</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`);
  let info = await transporter.sendMail({
    from: '"WealthAid Mining" <contact@wealthaidmining.com>', // sender address
    to: `${email}`, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
    html: htmlOutput.html, // html body
  });

  // let adminInfo = await transporter.sendMail({
  //   from: '"WealthAid Mining" <wealthaidmining@outlook.com>', // sender address
  //   to: `wealthaid@outlook.com`, // list of receivers
  //   subject: `Update ${subject}`, // Subject line
  //   text: `${message}`, // plain text body
  //   html: `
  //            <html>
  //               <body>
  //                   <p>
  //                   Update from ${email} <br /> ${message}
  //                   </p>
  //                   <footer>
  //                     <p style="text-align: center;">WealthAid Mining</p>
  //                     <p style="text-align: center;">All Rights Reserved Ⓒ 2023</p>
  //                   </footer>
  //               </body>
  //            </html>
  //            `, // html body
  // });

  console.log("Message Sent!");
  return res.status(200).end();
}
