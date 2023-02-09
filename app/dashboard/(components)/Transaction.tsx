import React from "react";

// @ts-ignore
const Transaction = ({ created_at, type, amount, status, id, user_id }) => {
  const date = new Date(created_at).toLocaleString();
  return (
    <div className="bg-white border py-2 grid my-2 grid-cols-5">
      <p className="text-xs truncate mx-1">{id}</p>
      <p className="capitalize">{type}</p>
      <p>${amount}</p>
      <p className="text-xs">{date}</p>
      <p className="text-sm">{status ? "Verified" : "Pending"}</p>
    </div>
  );
};

export default Transaction;
