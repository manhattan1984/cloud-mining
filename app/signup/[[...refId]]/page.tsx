import React from "react";
import SignUp from "./SignUp";

// @ts-ignore
const page = ({ params: { refId } }) => {
  let referral_id = "";
  if (refId) {
    console.log("xx", refId);
    referral_id = refId[0];
  }
  console.log("ref", referral_id);
  return <SignUp referral_id={referral_id} />;
};

export default page;
