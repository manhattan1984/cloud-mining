import React from "react";

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
  return (
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
              value={bitcoin_wallet}
              className="border p-1 my-2 w-full"
            />
          </div>
          <div className="">
            <p className="text-sm">Ethereum Wallet</p>
            <input
              type="text"
              value={ethereum_wallet}
              className="border p-1 my-2 w-full"
            />
          </div>
          <div className="">
            <p className="text-sm">Bitcoin Cash Wallet</p>
            <input
              type="text"
              value={bitcoincash_wallet}
              className="border p-1 my-2 w-full"
            />
          </div>
          <div className="">
            <p className="text-sm">Perfect Money Wallet</p>
            <input
              type="text"
              value={perfectmoney_wallet}
              className="border p-1 my-2 w-full"
            />
          </div>
          <div className="">
            <p className="text-sm">USDT Wallet</p>
            <input
              type="text"
              value={usdt_wallet}
              className="border p-1 my-2 w-full"
            />
          </div>
          <div className="">
            <p className="text-sm">Referral Link (Click to copy)</p>
            <input type="text" value={id} className="border p-1 my-2 w-full" />
          </div>
        </div>
        <button className="text-green-600 my-2">Save Profile</button>
      </div>
    </div>
  );
};

export default Profile;
