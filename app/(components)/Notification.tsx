import React from "react";

const Notification = () => {
  return (
    <div className="p-4 py-8 rounded fixed bg-gray-100 right-5 z-10 shadow">
      <p className="">
        Someone from <span className="font-bold">Canada</span> has <span className="font-bold">withdrawn</span>{" "}
        <span className="text-green-600 font-bold">$100,000</span>{" "}
      </p>
    </div>
  );
};

export default Notification;
