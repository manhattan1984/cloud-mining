"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const SignInNavbar = () => {
  const router = useRouter();
  const signOut = () => {
    router.push("/");
  };
  return (
    <nav className="fixed w-full flex items-center justify-between p-4 bg-neutral-900 text-white shadow-lg">
      <p>Zipo Aid Mining</p>
      <AiOutlineMenu className="text-xl" />
    </nav>
  );
};

export default SignInNavbar;
