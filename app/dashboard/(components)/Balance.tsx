import React from "react";
import { BiMoney } from "react-icons/bi";
const Balance = ({ name, amount }: {name: string, amount: number}) => {
  return (
    <div className="bg-white p-4 flex md:basis-1/3 lg:basis-1 flex-1 justify-between items-center shadow-sm rounded">
      <div className="">
        <p className="uppercase mb-2">{name}</p>
        <p className="text-2xl">${amount}</p>
      </div>
      <BiMoney className="text-3xl text-green-600" />
    </div>
  );
};

export default Balance;
