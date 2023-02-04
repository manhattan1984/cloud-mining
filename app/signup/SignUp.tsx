import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="bg-neutral-50">
      <div className="p-4 shadow m-4 rounded bg-white flex flex-col gap-3">
        <p className="text-center text-2xl">Sign Up</p>
        <div className="text-center my-2">
          <p className="text-3xl">cloud mining</p>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <p className="capitalize mb-2 text-sm">first name</p>
            <input placeholder="First name" className="w-full border p-2 rounded text-sm" type="text" />
          </div>
          <div className="w-full">
            <p className="capitalize mb-2 text-sm">last name</p>
            <input placeholder="Last name" className="w-full border p-2 rounded text-sm" type="text" />
          </div>
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">phone no.</p>
          <input placeholder="Enter your Phone No." className="border w-full p-2 rounded text-sm" type="text" />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Email address</p>
          <input placeholder="Enter your email" className="border w-full p-2 rounded text-sm" type="text" />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Referral Id (Optional)</p>
          <input placeholder="Referral Id (Optional)" className="border w-full p-2 rounded text-sm" type="text" />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Password</p>
          <input placeholder="Password" className="border w-full p-2 rounded text-sm" type="text" />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Confirm Password</p>
          <input placeholder="Confirm password" className="border w-full p-2 rounded text-sm" type="text" />
        </div>
        <div className="flex my-4 items-center gap-2">
          <input className="border rounded accent-green-600" type="checkbox" name="" id="" />
          <p>I agree to cloud mining terms of use</p>
        </div>
        <button className="bg-green-600 text-white p-2">create account</button>
        <p className="text-center text-sm text-gray-500">Already have an account? <Link href="/signin" className="text-green-700">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
