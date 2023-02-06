"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const SignInNavbar = () => {
  const router = useRouter();
  const signOut = () => {
    router.push("/");
  };
  return (
    <nav className="my-4 fixed w-full flex items-center shadow-lg gap-2 p-2">
      <Link className="text-xs" href="/dashboard">Dashboard</Link>
      <Link className="text-xs" href="/dashboard/profile">Profile</Link>
      <Link className="text-xs" href="/dashboard/plans">Plans</Link>
      <Link className="text-xs" href="/dashboard/withdraw">Withdraw</Link>
      <Link className="text-xs" href="/dashboard/transactionlog">Transaction Log</Link>
      <Link className="text-xs" href="/dashboard/referrals">Referrals</Link>
      <Link className="text-xs" href="/dashboard/change-password">Change Password</Link>
    </nav>
  );
};

export default SignInNavbar;
