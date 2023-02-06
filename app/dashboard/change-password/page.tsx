import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded p-4 shadow w-full m-4">
        <p className="text-xl">Change Password</p>
        <p className="text-xs my-2">Don't share password with anyone</p>

        <div className="">
          <p className="font-light text-sm">Old Password</p>
          <input
            type="text"
            placeholder="Old Password"
            className="border p-1 my-2 w-full"
          />
        </div>
        <div className="">
          <p className="font-light text-sm">New Password</p>
          <input
            type="text"
            placeholder="New Password"
            className="border p-1 my-2 w-full"
          />
        </div>

        <button className="text-green-600 my-2">Save</button>
      </div>
    </div>
  );
};

export default page;
