"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Profile = ({
  userData: {
    id,
    first_name,
    last_name,
    email,
    phone_number,
    bitcoin_wallet,
    ethereum_wallet,
    bitcoincash_wallet,
    perfectmoney_wallet,
    usdt_wallet,
  },
}) => {
  const { supabase, session } = useSupabase();

  const [bitcoin, setBitcoin] = useState(bitcoin_wallet);
  const [ethereum, setEthereum] = useState(ethereum_wallet);
  const [bitcoinCash, setbitcoinCash] = useState(bitcoincash_wallet);
  const [perfectMoney, setPerfectMoney] = useState(perfectmoney_wallet);
  const [usdt, setUsdt] = useState(usdt_wallet);


  const url =
    process.env.NODE_ENV === "development"
      ? "evilworld.com:3000"
      : "zipoaidmining.vercel.app";

  const handleUpdateWallets = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .update({
        bitcoin_wallet: bitcoin,
        ethereum_wallet: ethereum,
        bitcoincash_wallet: bitcoinCash,
        perfectmoney_wallet: perfectMoney,
        usdt_wallet: usdt,
      })
      .eq("id", id);

    if (error) {
      toast.error("Failed To Update Wallets");
      return;
    }
    toast.success("Wallets updated successfully");
  };
  const signUpLink = `${url}/signup/${id}`;
  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center">
        <div className="bg-white rounded shadow p-4 w-full m-4 max-w-md">
          <p className="text-xl mb-4">Profile Information</p>
          <div className="flex flex-col gap-2">
            <div className="">
              <p className="text-sm">First Name</p>
              <input
                type="text"
                value={first_name}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Last Name</p>
              <input
                type="text"
                value={last_name}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Email</p>
              <input
                type="text"
                value={email}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Phone No.</p>
              <input
                type="text"
                value={phone_number}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Bitcoin Wallet</p>
              <input
                type="text"
                value={bitcoin}
                onChange={(e) => setBitcoin(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Ethereum Wallet</p>
              <input
                type="text"
                value={ethereum}
                onChange={(e) => setEthereum(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Bitcoin Cash Wallet</p>
              <input
                type="text"
                value={bitcoinCash}
                onChange={(e) => setbitcoinCash(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Perfect Money Wallet</p>
              <input
                type="text"
                value={perfectmoney_wallet}
                onChange={(e) => setPerfectMoney(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">USDT Wallet</p>
              <input
                type="text"
                value={usdt_wallet}
                onChange={(e) => setUsdt(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Referral Link (Click to copy)</p>
              <input
                onClick={() => {
                  navigator.clipboard.writeText(signUpLink);
                  toast.success("Copied To Clipboard");
                }}
                type="text"
                value={signUpLink}
                className="border p-1 my-2 w-full text-xs"
              />
            </div>
          </div>
          <button onClick={handleUpdateWallets} className="text-green-600 my-2">
            Save Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
