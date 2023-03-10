"use strict";

import { createClient } from "@/utils/supabase-browser";

export default async function handler(req, res) {
  const supabase = createClient();

  let { data: emails, error } = await supabase.from("test").select("email");

  console.log(emails);

  const emailAddresses = emails.map(({ email }) => email);

  const message = "Does It Work?";
  const subject = "Testing Purposes Only";

  const sgMail = require("@sendgrid/mail");

  sgMail.setApiKey(
    "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"
  );

  // emails.map(({ email }) => {
  const msg = {
    to: emailAddresses, // Change to your recipient
    from: "wealthaid@outlook.com", // Change to your verified sender
    subject,
    text: message,
    html: `<strong>${message}</strong>`,
  };

  await sgMail
    .sendMultiple(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
  // });
  res.status(200).json({ status: "OK" });
}
