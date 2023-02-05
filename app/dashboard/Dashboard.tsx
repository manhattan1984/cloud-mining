import React from "react";
import Balance from "./(components)/Balance";
import { MdOutlineFilterNone } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="py-4 w-11/12 mx-auto bg-gray-100">
      {/* Amounts */}
      <div className="flex flex-col gap-6">
        <Balance />
        <Balance />
        <Balance />
        <Balance />
      </div>

      {/* Deposits */}

      <div className="bg-white rounded p-4 my-4 text-center">
        <p className="text-left my-2">Latest Active Deposits</p>

        <div className="border grid grid-cols-5 gap-4 text-center text-sm py-2">
          <p>Ref Id</p>
          <p>Plan Name</p>
          <p>Amount ($)</p>
          <p>Interest ($)</p>
          <p>Status</p>
        </div>
        <div className="border p-8">
          <p>No Active Deposits</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded p-4 my-4">
        <p className="my-2">Latest Transactions</p>

        <div className="border p-4 flex gap-3 justify-between items-center">
          <div className="bg-green-100 p-4 rounded-full">
            <MdOutlineFilterNone className="text-green-600" />
          </div>
          <div className="flex-1">
            <p>No Transaction Done</p>
            <p className="text-xs text-gray-500">05 Feb, 2023</p>
          </div>
          <p className="text-xs text-gray-500">N/A</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
