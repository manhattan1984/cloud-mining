"use client";
import React from "react";
import Referral from "../../(components)/Referral";

const ReferralsPage = ({ referrals }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded p-4 my-4 text-center w-full m-4">
        <p className="text-left my-2 text-xl mb-6">Referrals</p>

        <div className="border grid grid-cols-4 gap-4 text-center text-sm py-2">
          <p>User Id</p>
          <p>First Name</p>
          <p>Last Name</p>
          <p>Email</p>
        </div>
        {referrals ? (
          <>
            {referrals.map((referral, index) => (
              <Referral key={index} {...referral} />
            ))}
          </>
        ) : (
          <p>No Referrals</p>
        )}
      </div>
    </div>
  );
};

export default ReferralsPage;
