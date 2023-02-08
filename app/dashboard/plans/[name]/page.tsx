import React from "react";
import Invest from "./Invest";
import plans from "../../../(data)/plans";

// @ts-ignore
const page = ({ params: name }) => {
  const plan = plans.find((plan) => plan.name === name.name);
  // @ts-ignore
  return <Invest plan={plan} />;
};

export default page;
