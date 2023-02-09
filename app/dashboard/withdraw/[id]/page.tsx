import React from "react";
import Withdrawal from "./Withdrawal";

// @ts-ignore
const page = ({ params: { id } }) => {

  return <Withdrawal user_id={id} />;
};

export default page;
