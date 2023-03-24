export const sendEmailToUser = async (email, subject, message) => {
  const data = {
    email,
    subject,
    message,
  };
  const results = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(data),
  });
  // await fetch("/api/whatsapp", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  // });
  if (results.status == 200) {
    console.log("success");
  } else {
    console.log("error");
  }
};
