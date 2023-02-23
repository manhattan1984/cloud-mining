"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Profile = ({
  userData: {
    id,
    name_changes,
    first_name,
    last_name,
    email,
    phone_number,
    bitcoin_wallet,
    ethereum_wallet,
    litecoin_wallet,
    doge_wallet,
    zcash_wallet,
    ethereumclassic_wallet,
    cardano_wallet,
    usdt_bep20_wallet,
    usdt_trc20_wallet,
  },
}) => {
  const { supabase } = useSupabase();

  const [bitcoin, setBitcoin] = useState(bitcoin_wallet);
  const [ethereum, setEthereum] = useState(ethereum_wallet);
  const [liteCoin, setLiteCoin] = useState(litecoin_wallet);
  const [doge, setDoge] = useState(doge_wallet);
  const [zcash, setZcash] = useState(zcash_wallet);
  const [ethereumClassic, setEthereumClassic] = useState(
    ethereumclassic_wallet
  );
  const [cardano, setCardano] = useState(cardano_wallet);
  const [usdtBep20Wallet, setUsdtBep20Wallet] = useState(usdt_bep20_wallet);
  const [usdtTrc20Wallet, setUsdtTrc20Wallet] = useState(usdt_trc20_wallet);
  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);

  const url =
    process.env.NODE_ENV === "development"
      ? "evilworld.com:3000"
      : "www.wealthaidmining.com";

  const handleUpdateWallets = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .update({
        bitcoin_wallet: bitcoin,
        ethereum_wallet: ethereum,
        litecoin_wallet: liteCoin,
        doge_wallet: doge,
        zcash_wallet: zcash,
        ethereumclassic_wallet: ethereumClassic,
        cardano_wallet: cardano,
        usdt_bep20_wallet: usdtBep20Wallet,
        usdt_trc20_wallet: usdtTrc20Wallet,
      })
      .eq("id", id);

    updateNameChanges();

    if (error) {
      toast.error("Failed To Update Wallets");
      return;
    }
    toast.success("Wallets updated successfully");
  };

  const updateNameChanges = async () => {
    const firstNameChanged = first_name !== firstName;
    const lastNameChanged = last_name !== lastName;
    const { data, error } = await supabase
      .from("profiles")
      .update({
        first_name: firstName,
        last_name: lastName,
      })
      .eq("id", id);

    if (error) {
      toast.error("Failed To Update Names");
      return;
    }
    toast.success("Names updated successfully");

    if (firstNameChanged || lastNameChanged) {
      const { data, error } = await supabase.rpc("decrement", {
        userid: id,
      });
      if (error) {
        console.log(error);
        throw error;
      }
      console.log(data);
    }
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
              <p className="text-xs text-gray-500 mb-1">
                Number Of Name Changes Left: {name_changes}
              </p>
              <p className="text-sm">First Name</p>
              <input
                disabled={name_changes < 1}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Last Name</p>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={name_changes < 1}
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
              <p className="text-sm">Lite Coin Wallet</p>
              <input
                type="text"
                value={liteCoin}
                onChange={(e) => setLiteCoin(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Doge Wallet</p>
              <input
                type="text"
                value={doge_wallet}
                onChange={(e) => setDoge(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Zcash Wallet</p>
              <input
                type="text"
                value={zcash_wallet}
                onChange={(e) => setZcash(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Ethereum Classic Wallet</p>
              <input
                type="text"
                value={ethereumClassic}
                onChange={(e) => setEthereumClassic(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Cardano Wallet</p>
              <input
                type="text"
                value={zcash_wallet}
                onChange={(e) => setCardano(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">USDT (BEP20) Wallet</p>
              <input
                type="text"
                value={zcash_wallet}
                onChange={(e) => setUsdtBep20Wallet(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">USDT (TRC20) Wallet</p>
              <input
                type="text"
                value={zcash_wallet}
                onChange={(e) => setUsdtTrc20Wallet(e.target.value)}
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
