"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

const Withdrawal = ({
  user_id,
  wallets,
}: {
  user_id: string;
  wallets: {
    name: string;
  }[];
}) => {
  const { supabase } = useSupabase();

  const amountRef = useRef(0);

  const addTransactionToDatabase = async (type: string, amount: number) => {
    const { data, error } = await supabase
      .from("transactions")
      .insert([{ user_id, amount, type }]);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Processing Your Withdrawal");
  };
  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center h-[75vh]">
        <div className="bg-white flex flex-col gap-4 shadow p-8 rounded">
          <p className="font-bold">Withdraw Funds</p>
          <div className="">
            <p className="font-light text-sm">Amount ($)</p>
            <input
              //   @ts-ignore
              ref={amountRef}
              className="border p-1 rounded w-full my-2"
              placeholder="USD"
              type="number"
            />
          </div>
          <div className="">
            <p className="font-light text-sm">Withdrawal Type</p>
            <select className="my-2 w-full" name="" id="">
              {wallets.map(({ name }) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <p className="text-xs">
            Ensure your wallet details provided are correct.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                addTransactionToDatabase(
                  "withdrawal",
                  // @ts-ignore
                  +amountRef.current.value
                );
              }}
              className="text-green-600 py-1 px-3"
            >
              Withdraw
            </button>
            <button className="text-neutral-500 py-1 px-3 ">New Deposit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
