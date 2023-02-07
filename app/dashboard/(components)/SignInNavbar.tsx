"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
const SignInNavbar = () => {
  const router = useRouter();
  const signOut = () => {
    router.push("/");
  };
  return (
    <nav className="my-4 fixed w-full flex items-start shadow-lg gap-2 p-2 overflow-x-auto text-green-700 text-xs">
      <Link className="" href="/dashboard">
        Dashboard
      </Link>
      <Link className="" href="/dashboard/profile">
        Profile
      </Link>
      <Link className="" href="/dashboard/plans">
        Plans
      </Link>
      <Link className="" href="/dashboard/withdraw">
        Withdraw
      </Link>
      <Link className="" href="/dashboard/transactionlog">
        Transactions
      </Link>
      <Link className="" href="/dashboard/referrals">
        Referrals
      </Link>
      <Link className="" href="/dashboard/change-password">
        Change Password
      </Link>
    </nav>
  );
};

export default SignInNavbar;
