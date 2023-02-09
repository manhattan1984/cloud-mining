"use client";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSupabase } from "../(context)/supabase-provider";
const SignUp = () => {
  const recaptchaRef = useRef();

  const handleSubmit = (event) => {
    // event.preventDefault();
    // // Execute the reCAPTCHA when the form is submitted
    // recaptchaRef.current.execute();

    handleSignUp();
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

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const referralRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { supabase, session } = useSupabase();

  const handleSignUp = async () => {
    const stuff = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      options: {
        data: {
          first_name: firstNameRef.current.value,
          last_name: lastNameRef.current.value,
          phone_number: phoneNumberRef.current.value,
          email: emailRef.current.value,
          referral_id: referralRef.current.value,
          password: passwordRef.current.value,
        },
      },
    });
  };

  return (
    <div className="bg-neutral-50 p-2">
      <div className="max-w-lg mx-auto p-4 shadow m-4 rounded bg-white flex flex-col gap-3">
        <p className="text-center text-md uppercase text-green-600">Sign Up</p>
        <div className="text-center my-2">
          <p className="text-3xl">ZipoAid Mining</p>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <p className="capitalize mb-2 text-sm">first name</p>
            <input
              ref={firstNameRef}
              placeholder="First name"
              className="w-full border p-2 rounded text-sm"
              type="text"
            />
          </div>
          <div className="w-full">
            <p className="capitalize mb-2 text-sm">last name</p>
            <input
              ref={lastNameRef}
              placeholder="Last name"
              className="w-full border p-2 rounded text-sm"
              type="text"
            />
          </div>
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">phone no.</p>
          <input
            ref={phoneNumberRef}
            placeholder="Enter your Phone No."
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Email address</p>
          <input
            ref={emailRef}
            placeholder="Enter your email"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Referral Id (Optional)</p>
          <input
            ref={referralRef}
            placeholder="Referral Id (Optional)"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Password</p>
          <input
            ref={passwordRef}
            placeholder="Password"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>
        <div className="">
          <p className="capitalize mb-2 text-sm">Confirm Password</p>
          <input
            ref={confirmPasswordRef}
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
          <p className="text-xs">I agree to Zipo Aid Mining terms of use</p>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={onReCAPTCHAChange}
        />
        <button onClick={handleSignUp} className="bg-green-600 text-white p-2">
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
