"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import { sendEmailToUser } from "@/utils/emailSender";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

// @ts-ignore
const Payment = ({ amount, setShow, name, address, qr_code_url }) => {
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
          {/* <p className="text-xs">Transaction Id: {crypto.randomUUID()}</p> */}
          <p className="my-1">
            Kindly pay <span className="font-bold">{amount.value}</span> to this
            Address.
          </p>
          <div className="flex w-full justify-center my-3">
            <div className="relative h-28 w-28">
              <Image fill={true} src={qr_code_url} alt={name} />
            </div>
          </div>
          <p>
            {name} Wallet: <span className="font-bold w-full break-all text-xs">{address}</span>{" "}
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
  wallets,
  email,
}: {
  email: string;
  plan: {
    name: string;
    interest: number;
    minimum: number;
    maximum: number;
  };
  user_id: string;
  wallets: {
    name: string;
    address: string;
    qr_code_url: string;
  }[];
}) => {
  const { supabase, session } = useSupabase();
  const [showPayment, setShowPayment] = useState(false);
  const amountRef = useRef(0);
  const walletRef = useRef();
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);
  const [payout, setPayout] = useState(0);
  const [profit, setProfit] = useState(0);

  const addTransactionToDatabase = async (type: string, amount: number) => {
    const { data, error } = await supabase
      .from("transactions")
      .insert([{ plan: name, user_id, amount, type: "deposit" }]);
    if (error) {
      toast.error(`Error, ${error}`);
      return;
    }
    toast.success("Processing Your Investment");
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
    <>
      <Toaster />
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
                required
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
              <select
                onChange={() => {
                  setSelectedWallet(
                    // @ts-ignore
                    () =>
                      wallets.find(
                        // @ts-ignore
                        ({ name }) => name === walletRef.current.value
                      )
                  );
                  setShowPayment(false);
                }}
                // @ts-ignore
                ref={walletRef}
                className="w-full p-2"
              >
                {wallets.map(({ name }) => (
                  <option value={name}>{name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-4 py-4">
            <button
              onClick={() => {
                // @ts-ignore
                const amountValue = amountRef.current.value;
                if (
                  !amountValue ||
                  amountValue < minimum ||
                  amountValue > maximum
                ) {
                  toast.error(
                    `Enter amount greater than ${minimum - 1} or less than ${
                      maximum + 1
                    }`
                  );
                  return;
                }
                setShowPayment(!showPayment);

                // @ts-ignore
                addTransactionToDatabase("deposit", +amountRef.current.value);
                sendEmailToUser(
                  email,
                  "Deposit",
                  `Your deposit of $${amountValue} in ${selectedWallet.name} is being processed.`
                );
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
          <Payment
            amount={amountRef.current}
            setShow={setShowPayment}
            name={selectedWallet.name}
            address={selectedWallet.address}
            qr_code_url={selectedWallet.qr_code_url}
          />
        </div>
      </div>
    </>
  );
};

export default Invest;
