export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const { email, message, subject } = data;
  const client = require("twilio")(
    process.env.NEXT_PUBLIC_TWILIO_ACCOUNT,
    process.env.NEXT_PUBLIC_TWILIO_AUTH
  );

  await client.messages
    .create({
      body: `${email}: ${message}`,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+2349061188276",
    })
    .then((message) => console.log(message.sid));
  // .done();

  return res.status(200);
}
