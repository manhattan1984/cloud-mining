"use client";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../(context)/supabase-provider";

const ForgotPassword = () => {
  const { supabase } = useSupabase();

  const emailRef = useRef();

  const resetPassword = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      emailRef.current.value
    );

    if (error) {
      toast.error(`Error: ${error}`);
      return;
    }
    toast.success("Password Reset Sent To Your Email");
  };
  return (
    <>
      <Toaster />
      <div className="bg-neutral-100 flex justify-center items-center h-screen">
        <div className="w-4/5 mx-auto">
          <div className="rounded bg-white flex flex-col gap-2 w-full p-4">
            <p className="text-2xl mb-4">Forgot Password?</p>
            <div className="flex flex-col">
              <label className="mb-2 text-sm" htmlFor="email">
                Email
              </label>
              <input
                required
                ref={emailRef}
                className="p-2 border mb-4"
                id="email"
                type="email"
              />
            </div>
            <button
              onClick={resetPassword}
              className="bg-green-600 text-white p-2 uppercase"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
