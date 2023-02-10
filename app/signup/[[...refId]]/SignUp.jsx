"use client";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../../(context)/supabase-provider";
const SignUp = ({ referral_id }) => {
  const router = useRouter();
  const handleSubmit = (event) => {
    // console.log(event);
    // event.preventDefault();
    // handleSignUp();
  };

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [referralId, setReferralId] = useState(referral_id);

  const handleReferralId = (e) => {
    setReferralId(e.target.value);
  };

  console.log(referralId);

  const { supabase, session } = useSupabase();

  const handleSignUp = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      options: {
        data: {
          first_name: firstNameRef.current.value,
          last_name: lastNameRef.current.value,
          phone_number: phoneNumberRef.current.value,
          email: emailRef.current.value,
          referral_id: referralId,
          password: passwordRef.current.value,
        },
      },
    });

    if (user) {
      console.log("user", user);
      toast.success("Sign Up Successful, Check email for verification");
      router.push("/signin");
      return;
    }
    toast.error(`Sign Up Error, ${error}`);
    console.log("err", error);
  };

  return (
    <>
      <Toaster />
      <div className="bg-neutral-50 p-2">
        <div className="max-w-lg mx-auto p-4 shadow m-4 rounded bg-white flex flex-col gap-3">
          <p className="text-center text-md uppercase text-green-600">
            Sign Up
          </p>
          <div className="text-center my-2">
            <p className="text-3xl">ZipoAid Mining</p>
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <label className="capitalize mb-2 text-sm">first name</label>
              <input
                id="firstname"
                required
                ref={firstNameRef}
                placeholder="First name"
                className="w-full border p-2 rounded text-sm"
                type="text"
              />
            </div>
            <div className="w-full">
              <label className="capitalize mb-2 text-sm">last name</label>
              <input
                required
                ref={lastNameRef}
                placeholder="Last name"
                className="w-full border p-2 rounded text-sm"
                type="text"
              />
            </div>
          </div>
          <div className="">
            <label className="capitalize mb-2 text-sm">phone no.</label>
            <input
              required
              ref={phoneNumberRef}
              placeholder="Enter your Phone No."
              className="border w-full p-2 rounded text-sm"
              type="text"
            />
          </div>
          <div className="">
            <label className="capitalize mb-2 text-sm">Email address</label>
            <input
              required
              ref={emailRef}
              placeholder="Enter your email"
              className="border w-full p-2 rounded text-sm"
              type="text"
            />
          </div>
          <div className="">
            <label className="capitalize mb-2 text-sm">
              Referral Id (Optional)
            </label>
            <input
              value={referralId}
              onChange={handleReferralId}
              placeholder="Referral Id (Optional)"
              className="border w-full p-2 rounded text-sm"
              type="text"
            />
          </div>
          <div className="">
            <label className="capitalize mb-2 text-sm">Password</label>
            <input
              required
              ref={passwordRef}
              placeholder="Password"
              className="border w-full p-2 rounded text-sm"
              type="password"
            />
          </div>
          {/* <div className="">
            <label className="capitalize mb-2 text-sm">Confirm Password</label>
            <input
              required
              ref={confirmPasswordRef}
              placeholder="Confirm password"
              className="border w-full p-2 rounded text-sm"
              type="password"
            />
          </div> */}
          <div className="flex my-4 items-center gap-2">
            <input
              className="border rounded accent-green-600"
              type="checkbox"
              name=""
              id=""
            />
            <p className="text-xs">I agree to Zipo Aid Mining terms of use</p>
          </div>
          <div className="">
            <HCaptcha
              sitekey="ef9e404a-f816-4451-a677-d15493f17fc5"
              onLoad={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
          </div>
          <button
            type="submit"
            onClick={handleSignUp}
            className="bg-green-600 text-white p-2"
          >
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
    </>
  );
};

export default SignUp;
