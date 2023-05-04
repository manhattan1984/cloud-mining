"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../(context)/supabase-provider";

const SignIn = () => {
  const router = useRouter();

  const { supabase, session } = useSupabase();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async () => {
    setLoading(true);
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (!error) {
      toast.success("Sign In Successful");
      router.push(`/dashboard/${user.user.id}`);
      return;
    }

    toast.error(`Failed To Sign In, ${error}`);
    setLoading(false);
  };

  const signIn = () => {
    handleEmailLogin();
  };
  return (
    <>
      <Toaster />
      <div className="bg-neutral-50 flex items-center h-[90vh]">
        <div className="max-w-md mx-auto p-4 shadow m-4 rounded bg-white flex flex-col gap-3 w-full">
          <p className="text-center text-md text-green-600 uppercase">
            Sign In
          </p>
          <div className="text-center my-2">
            <p className="text-3xl">WealthAid Mining</p>
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
            <p className="capitalize mb-2 text-sm">Password</p>
            <input
              ref={passwordRef}
              placeholder="Password"
              className="border w-full p-2 rounded text-sm"
              type="password"
            />
          </div>

          <div className="w-full flex">
            <Link
              className="text-green-600 text-xs w-full text-right"
              href="/forgot-password"
            >
              Forgot Your Password?
            </Link>
          </div>

          <button
            onClick={() => signIn()}
            className="bg-green-600 text-white p-2"
            disabled={loading}
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
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
              <span>Sign In</span>
            )}
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/signup" className="text-green-700">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
