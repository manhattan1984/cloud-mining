"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SignInNavbar = () => {
  const router = useRouter();
  const signOut = () => {
    router.push("/");
  };
  return (
    <nav className="flex justify-between p-2 bg-neutral-900 text-white">
      <p>Cloud Mining</p>
      <button className="text-green-700" onClick={signOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default SignInNavbar;
