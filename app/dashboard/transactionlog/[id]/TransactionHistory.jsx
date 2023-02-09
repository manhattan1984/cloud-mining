import React from "react";
import Transaction from "../../(components)/Transaction";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded p-4 my-4 text-center w-full m-4">
        <p className="text-left my-2 text-xl mb-6">Transaction History</p>

        <div className="border grid grid-cols-5 gap-1 text-sm py-2">
          <p>Id</p>
          <p>Type</p>
          <p>Amount</p>
          <p>Date</p>
          <p>Status</p>
        </div>
        {/* <div className="border p-8"> */}
        {transactions ? (
          <>
            {transactions.map((transaction, index) => (
              <Transaction {...transaction} key={index} />
            ))}
          </>
        ) : (
          <p>No Recent Transactions</p>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default TransactionHistory;
