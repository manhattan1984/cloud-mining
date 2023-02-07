"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignIn = () => {
  const router = useRouter();
  const signIn = () => {
    router.push("/dashboard");
  };
  return (
    <div className="bg-neutral-50 flex items-center h-[90vh]">
      <div className="max-w-md mx-auto p-4 shadow m-4 rounded bg-white flex flex-col gap-3 w-full">
        <p className="text-center text-md text-green-600 uppercase">Sign In</p>
        <div className="text-center my-2">
          <p className="text-3xl">Zipo Aid Mining</p>
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
          <p className="capitalize mb-2 text-sm">Password</p>
          <input
            placeholder="Password"
            className="border w-full p-2 rounded text-sm"
            type="text"
          />
        </div>

        <div className="w-full flex">
          <Link
            className="text-green-600 text-xs w-full text-right"
            href="/forgotpassword"
          >
            Forgot Your Password?
          </Link>
        </div>

        <button
          onClick={() => signIn()}
          className="bg-green-600 text-white p-2"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/signup" className="text-green-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
