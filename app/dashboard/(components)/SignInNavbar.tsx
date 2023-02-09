import { createClient } from "@/utils/supabase-server";
import Link from "next/link";
import React from "react";
const SignInNavbar = ({ id }: { id: string | undefined }) => {
  const supabase = createClient();

  // const id = (await supabase.auth.getUser()).data.user?.id;


  return (
    <nav className="my-4 fixed w-full flex items-start shadow-lg gap-2 p-2 overflow-x-auto text-green-700 text-xs">
      <Link className="" href={`/dashboard/${id}`}>
        Dashboard
      </Link>
      <Link className="" href={`/dashboard/profile/${id}`}>
        Profile
      </Link>
      <Link className="" href="/dashboard/plans">
        Plans
      </Link>
      <Link className="" href={`/dashboard/withdraw/${id}`}>
        Withdraw
      </Link>
      <Link className="" href={`/dashboard/transactionlog/${id}`}>
        Transactions
      </Link>
      <Link className="" href={`/dashboard/referrals/${id}`}>
        Referrals
      </Link>
      <Link className="" href={`/dashboard/change-password/${id}`}>
        Change Password
      </Link>
    </nav>
  );
};

export default SignInNavbar;
