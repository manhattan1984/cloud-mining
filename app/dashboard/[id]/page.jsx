import "server-only";
import React from "react";
import Dashboard from "./Dashboard";
import { createClient } from "@/utils/supabase-server";

// @ts-ignore
const page = async ({ params: id }) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select(
      "id, first_name, balance, total_investments, total_withdrawals, referral_bonus"
    )
    .eq("id", id.id)
    .single();

  return <Dashboard userInfo={data} />;
};

export default page;
