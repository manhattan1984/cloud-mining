import React from "react";

// @ts-ignore
const Transaction = ({
  created_at,
  plan,
  amount,
  status,
  id,
  user_id,
  type,
}: {
  created_at: Date;
  plan: string;
  amount: number;
  status: boolean;
  id: string;
  user_id: string;
  type: string;
}) => {
  const date = new Date(created_at).toLocaleString();
  return (
    <div className="bg-white border py-2 grid my-2 grid-cols-5 text-center">
      <p className="text-xs truncate mx-1">{id}</p>
      <p className="capitalize">{plan}</p>
      <p>{`${type === "deposit" ? "" : "-"}$${amount}`}</p>
      <p className="text-xs">{date}</p>
      <p className="text-sm">{status ? "Verified" : "Pending"}</p>
    </div>
  );
};

export default Transaction;
