import React from "react";

const Plan = () => {
  return (
    <div className="border py-2 px-4 rounded shadow w-5/6 mx-auto">
      <p className="font-medium text-center text-2xl capitalize my-4 text-green-600">sha-256 cloud mining</p>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p>Cryptocurrency:</p>
          <p>Bitcoin</p>
        </div>
        <div className="flex justify-between">
          <p>Minimum Hashrate:</p>
          <p>10 GH/s</p>
        </div>
        <div className="flex justify-between">
          <p>Maintainance fee:</p>
          <p className="text-xs text-right w-1/2">$0.0000009 / 10GH/s / day</p>
        </div>
        <div className="flex justify-between">
          <p>Hardware:</p>
          <p>Antminer Z11</p>
        </div>
        <div className="flex justify-between">
          <p>Payout In:</p>
          <p>BTC</p>
        </div>
        <div className="flex justify-between">
          <p>In Stock:</p>
          <p>Yes</p>
        </div>
        <div className="flex justify-between">
          <p>Term:</p>
          <p>2 years contract</p>
        </div>
        <div className="flex justify-between my-4">
          <div className="text-left">
            <p className="text-lg font-medium">$0.50</p>
            <p>per 10 GH/S</p>
          </div>
          <button className="text-green-700 uppercase">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
