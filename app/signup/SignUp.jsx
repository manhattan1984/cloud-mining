"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const SignUp = () => {
  const recaptchaRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    alert(`Hey, ${email}`);
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    recaptchaRef.current.reset();
  };
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
            <input
              placeholder="First name"
              className="w-full border p-2 rounded text-sm"
              type="text"
            />
          </div>
          <div className="w-full">
            <p className="capitalize mb-2 text-sm">last name</p>
            <input
              placeholder="Last name"
              className="w-full border p-2 rounded text-sm"
              type="text"
            />
          </div>
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">phone no.</p>
          <input
            placeholder="Enter your Phone No."
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Email address</p>
          <input
            placeholder="Enter your email"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Referral Id (Optional)</p>
          <input
            placeholder="Referral Id (Optional)"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Password</p>
          <input
            placeholder="Password"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Confirm Password</p>
          <input
            placeholder="Confirm password"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="flex my-4 items-center gap-2">
          <input
            className="border rounded accent-green-600"
            type="checkbox"
            name=""
            id=""
          />
          <p>I agree to cloud mining terms of use</p>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />
        <button onClick={handleSubmit} className="bg-green-600 text-white p-2">
          create account
        </button>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/signin" className="text-green-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
