import React from "react";
import { BiMoney } from "react-icons/bi";
const Balance = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-sm rounded">
      <div className="">
        <p className="uppercase mb-2">balance</p>
        <p className="text-2xl">$0.00</p>
      </div>
      <BiMoney className="text-3xl" />
    </div>
  );
};

export default Balance;
