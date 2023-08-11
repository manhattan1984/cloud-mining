"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { sendEmailToUser } from "@/utils/emailSender";
import { useRouter } from "next/navigation";
import mjml2html from "mjml";

const Withdrawal = ({
  user_id,
  wallets,
  email,
  profile: { verification_image_approved },
}: {
  user_id: string;
  email: string;
  wallets: {
    name: string;
  }[];
  profile: {
    verification_image_approved: boolean;
  };
}) => {
  const { supabase } = useSupabase();

  const router = useRouter();

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

  function processTransaction() {
    addTransactionToDatabase(
      "withdrawal",
      // @ts-ignore
      +amountRef.current.value
    );
    sendEmailToUser(
      email,
      "Withdrawal",
      // @ts-ignore
      `We have been notified of your recent request of $${amountRef.current.value}. It is currently being processed. Thank you.`
    );
    toast.success("Your withdrawal is being processed.");
    setTimeout(() => {
      router.push(`/dashboard/${user_id}`);
      console.log("timeout");
    }, 3000);
  }

  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center justify-center h-full">
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
              {["Bitcoin", "USDT (TRC20)", "USDT (BEP20)"].map((coin) => (
                <option value={coin} key={coin}>
                  {coin}
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
                console.log("verification", verification_image_approved);
                // @ts-ignore
                if (verification_image_approved || (+amountRef.current.value <= 500)) {
                  processTransaction();
                  return;
                }
                toast.error(
                  "Your account has not been verified. Go to profile and upload your account verification image."
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
