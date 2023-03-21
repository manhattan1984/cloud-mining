"use strict";
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const { email, message, subject } = data;

  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: "support@wealthaidmining.com", // generated ethereal user
      pass: "6sAGK8tI3XrHyC0g", // generated ethereal password
    },
  });

  // let info = await transporter.sendMail({
  //   from: '"WealthAid Mining" <support@wealthaidmining.com>', // sender address
  //   to: `${email}`, // list of receivers
  //   subject: `${subject}`, // Subject line
  //   text: `${message}`, // plain text body
  //   html: `
  //            <html>
  //               <body>
  //                   <p>
  //                       ${message}
  //                   </p>
  //                   <footer>
  //                     <p style="text-align: center;">WealthAid Mining</p>
  //                     <p style="text-align: center;">All Rights Reserved Ⓒ 2023</p>
  //                   </footer>
  //               </body>
  //            </html>
  //            `, // html body
  // });

  let adminInfo = await transporter.sendMail({
    from: '"WealthAid" <support@wealthaidmining.com>', // sender address
    to: `support@wealthaidmining.com`, // list of receivers
    subject: `Update ${subject}`, // Subject line
    text: `${message}`, // plain text body
    html: `
             <html>
                <body>
                    <p>
                    Update from ${email} <br /> ${message}
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
  return res.status(200);
}
