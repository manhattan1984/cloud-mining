"use client";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useSupabase } from "../(context)/supabase-provider";

const UpdatePassword = () => {
  const { supabase } = useSupabase();

  const passwordRef = useRef();

  const updatePassword = async () => {
    const { data, error } = await supabase.auth.updateUser({
      password: passwordRef.current.value,
    });

    console.log("data", data, "error", error);

    if (error) {
      toast.error(`Error: ${error}`);
      console.log("reset error", error);
      return;
    }
    toast.success("Password update successful. Sign in.", { duration: 4000 });
  };
  return (
    <>
      <Toaster />
      <div className="bg-neutral-100 flex justify-center items-center h-screen">
        <div className="w-4/5 mx-auto">
          <div className="rounded bg-white flex flex-col gap-2 w-full p-4">
            <p className="text-2xl mb-4">Update Password</p>
            <div className="flex flex-col">
              <label className="mb-2 text-sm" htmlFor="password">
                Password
              </label>
              <input
                required
                ref={passwordRef}
                className="p-2 border mb-4"
                id="password"
                type="password"
              />
            </div>
            <button
              onClick={updatePassword}
              className="bg-green-600 text-white p-2 uppercase"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePassword;
