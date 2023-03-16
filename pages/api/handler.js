"use strict";

import { createClient } from "@/utils/supabase-browser";

export default async function handler(req, res) {
  const supabase = createClient();

  let { data: emails, error } = await supabase.from("test").select("email");



  // Newsletters

  let { data: unpublishedNewsletterIssues, error: selectIssuesError } =
    await supabase.from("newsletter-issues").select().eq("published", false);



  const todayDate = new Date();
  const issueScheduledForToday = unpublishedNewsletterIssues.find((issue) => {
    const issueScheduleDate = new Date(issue.scheduled_at);
    return (
      todayDate.getFullYear() === issueScheduleDate.getFullYear() &&
      todayDate.getMonth() === issueScheduleDate.getMonth() &&
      todayDate.getDate() === issueScheduleDate.getDate()
    );
    
  });

  if (!issueScheduledForToday) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Found no unpublished issue that is scheduled for today: ${JSON.stringify(
          unpublishedNewsletterIssues
        )}`,
      }),
    };
  } else {
    // Emails and sending begins

    const emailAddresses = emails.map(({ email }) => email);

    const message = "Does It Work?";
    const subject = issueScheduledForToday.title;

    const sgMail = require("@sendgrid/mail");

    sgMail.setApiKey(
      "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"
    );

    const msg = {
      to: emailAddresses, // Change to your recipient
      from: "support@wealthaidmining.com", // Change to your verified sender
      subject,
      text: message,
      html: issueScheduledForToday.html,
    };

    await sgMail
      .sendMultiple(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  res.status(200).json({ status: "OK" });
}
