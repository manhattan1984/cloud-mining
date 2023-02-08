import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded p-4 my-4 text-center w-full m-4">
        <p className="text-left my-2 text-xl mb-6">Deposit History</p>

        <div className="border grid grid-cols-5 gap-4 text-center text-sm py-2">
          <p>Transaction Id</p>
          <p>Plan Name</p>
          <p>Amount</p>
          <p>Interest</p>
          <p>Status</p>
        </div>
        <div className="border p-8">
          <p>No Recent Deposits</p>
        </div>
      </div>
    </div>
  );
};

export default page;
