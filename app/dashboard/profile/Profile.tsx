import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded shadow p-4 w-full m-4">
        <p className="text-xl mb-4">Profile Information</p>
        <div className="flex flex-col gap-2">
          <div className="">
            <p className="text-sm">First Name</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Last Name</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Email</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Phone No.</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Bitcoin Wallet</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Ethereum Wallet</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Bitcoin Cash Wallet</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Perfect Money Wallet</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">USDT Wallet</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
          <div className="">
            <p className="text-sm">Referral Link (Click to copy)</p>
            <input type="text" className="border p-1 my-2 w-full" />
          </div>
        </div>
        <button className="text-green-600 my-2">Save Profile</button>
      </div>
    </div>
  );
};

export default Profile;
