"use client";
import { sendEmailToUser } from "@/utils/emailSender";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../../(context)/supabase-provider";
const SignUp = ({ referral_id }) => {
  const router = useRouter();
  const handleSubmit = (event) => {
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

  const [referralId, setReferralId] = useState(referral_id);
  const [loading, setLoading] = useState(false);

  const handleReferralId = (e) => {
    setReferralId(e.target.value);
  };

  const { supabase, session } = useSupabase();

  const handleSignUp = async () => {
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const first_name = firstNameRef.current.value.trim();
    const last_name = lastNameRef.current.value.trim();
    const phone_number = phoneNumberRef.current.value.trim();

    if (!(email && password && first_name && last_name && phone_number)) {
      toast.error("Please Fill The Form Completely");
      return;
    }
    setLoading(true);
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
          phone_number,
          email,
          referral_id: referralId,
          password,
        },
      },
    });

    if (user) {
      sendEmailToUser(
        email,
        "Welcome To WealthAid Mining",
        `Your Account details: <br /> Email: ${email} <br /> Password: ${password} <br />
        Log Into your account: <a href="https://www.wealthaidmining.com/signin">Log In</a>
        `
      );
      toast.success("Sign Up Successful", {
        duration: 4000,
      });
      setTimeout(() => {
        router.push("/signin");
      }, 5000);
      return;
    }
    toast.error(`Sign Up Error, ${error}`);
    setLoading(false);
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
            <p className="text-3xl">WealthAid Mining</p>
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
            <p className="text-xs">I agree to WealthAid Mining terms of use</p>
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
            disabled={loading}
            onClick={handleSignUp}
            className="bg-green-600 text-white p-2 uppercase"
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </span>
            ) : (
              <span>create account</span>
            )}
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
