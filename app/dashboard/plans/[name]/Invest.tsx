"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

// @ts-ignore
const Payment = ({ amount, setShow }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="bg-white p-4 max-w-md w-full">
        <div className="flex justify-between items-center">
          <p className="text-green-600 text-xl">
            Transaction is being processed
          </p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="mt-2">
          <p className="text-xs">Transaction Id: 4pPyWTKBEU7</p>
          <p className="my-1">
            Kindly pay <span className="font-bold">{amount.value}</span> to this
            Address.
          </p>
          <p>
            Bitcoin Wallet: <span className="font-bold">xxxxxx</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const calculateInterest = (amount: number, interest: number) => {
  const profit = (interest / 100) * amount;
  const payout = profit + amount;

  return { profit, payout };
};

const Invest = ({
  plan: { name, interest, minimum, maximum },
  user_id,
}: {
  plan: {
    name: string;
    interest: number;
    minimum: number;
    maximum: number;
  };
  user_id: string;
}) => {
  const { supabase, session } = useSupabase();
  const [showPayment, setShowPayment] = useState(false);
  const amountRef = useRef(0);
  const [payout, setPayout] = useState(0);
  const [profit, setProfit] = useState(0);

  const addTransactionToDatabase = async (type: string, amount: number) => {
    const { data, error } = await supabase
      .from("transactions")
      .insert([{ type, user_id, amount }]);

  };

  const handleAmountChange = () => {
    const { profit, payout } = calculateInterest(
      // @ts-ignore
      +amountRef.current.value,
      interest
    );

    setProfit(profit);
    setPayout(payout);
  };
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="bg-white p-4 max-w-md mx-auto w-full">
        <p className="mb-4 text-xl">Process Plan Payment</p>

        <div className="flex flex-col gap-4">
          <div className="">
            <p className="text-sm mb-2">Plan Name</p>
            <input
              disabled
              className="border p-2 rounded w-full"
              type="text"
              value={name}
            />
          </div>
          <div className="">
            <p className="text-sm mb-2">Amount To Invest</p>
            <input
              // @ts-ignore
              ref={amountRef}
              min={minimum}
              max={maximum}
              onChange={handleAmountChange}
              className="border p-2 rounded w-full"
              type="number"
            />
          </div>
          <div className="">
            <p className="text-sm mb-2">Interest Rate (%)</p>
            <input
              className="border p-2 rounded w-full"
              disabled
              type="number"
              value={interest}
            />
          </div>
          <div className="">
            <p className="text-sm mb-2">Expected Interest ($)</p>
            <input
              value={profit}
              className="border p-2 rounded w-full"
              type="number"
              disabled
            />
          </div>
          <div className="">
            <p className="text-sm mb-2">Expected Payout ($)</p>
            <input
              value={payout}
              className="border p-2 rounded w-full"
              type="number"
            />
          </div>
          <div className="">
            <p className="text-sm mb-2">Deposit Type</p>
            <select className="w-full p-2">
              <option value="bitcoin">Bitcoin</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 py-4">
          <button
            onClick={() => {
              setShowPayment(!showPayment);
              // @ts-ignore
              addTransactionToDatabase("deposit", +amountRef.current.value);
            }}
            className="px-2 text-green-500"
          >
            Submit
          </button>
          <Link href="/dashboard/plans">
            <button className="px-2 text-neutral-500">New Deposit</button>
          </Link>
        </div>
      </div>
      <div className={`${showPayment ? "block" : "hidden"} w-full`}>
        <Payment amount={amountRef.current} setShow={setShowPayment} />
      </div>
    </div>
  );
};

export default Invest;
