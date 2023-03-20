"use strict";

export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const { email, message, subject } = data;

  const SENDGRID_KEY =
    "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";

  console.log("Message Sent!");
}
