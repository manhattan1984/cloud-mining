"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
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
            <p className="text-3xl">Zipo Aid Mining</p>
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
    </>
  );
};

export default SignIn;
