import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-[75vh]">
      <div className="bg-white flex flex-col gap-4 shadow p-8 rounded">
        <p className="font-bold">Withdraw Funds</p>
        <div className="">
          <p className="font-light text-sm">Amount ($)</p>
          <input className="border p-1 rounded w-full my-2" placeholder="USD" type="number" />
        </div>
        <div className="">
          <p className="font-light text-sm">Withdrawal Type</p>
          <select className="my-2 w-full" name="" id="">
            <option value="bitcoin">Bitcoin</option>
          </select>
        </div>
        <p className="text-xs">Ensure your wallet details provided are correct.</p>

        <div className="flex gap-2">
          <button className="text-green-600 py-1 px-3">Withdraw</button>
          <button className="text-neutral-500 py-1 px-3 ">New Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default page;
