import Plans from "@/app/(components)/Plans";
import plans from "@/app/(data)/plans";
import React from "react";

const page = () => {
  // const plans = []
  return <Plans plans={plans} />;
};

export default page;
