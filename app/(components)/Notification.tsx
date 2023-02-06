import React from "react";

const Notification = () => {
  return (
    <div className="p-4 py-8 rounded fixed bg-gray-100 z-10 shadow right-5 top-10 my-8">
      <p className="">
        Someone from <span className="font-bold">Canada</span> has <span className="font-bold">withdrawn</span>{" "}
        <span className="text-green-600 font-bold">$100,000</span>{" "}
      </p>
    </div>
  );
};

export default Notification;
