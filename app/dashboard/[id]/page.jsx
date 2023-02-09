import "server-only";
import React from "react";
import Dashboard from "./Dashboard";
import { createClient } from "@/utils/supabase-server";

export const revalidate = 0;

// @ts-ignore
const page = async ({ params: id }) => {
  const supabase = createClient();

  const getUserData = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select(
        "id, first_name, balance, total_investments, total_withdrawals, referral_bonus"
      )
      .eq("id", id.id)
      .single();

    return data;
  };

  const getRecentDeposits = async () => {
    let { data: transactions, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", id.id)
      .eq("type", "deposit")
      .limit(3);

    return transactions;
  };

  const getRecentTransactions = async () => {
    let { data: transactions, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", id.id)
      .limit(3);

    return transactions;
  };

  const userData = getUserData();
  const depositData = getRecentDeposits();
  const transactionData = getRecentTransactions();

  const [user, deposits, transactions] = await Promise.all([
    userData,
    depositData,
    transactionData,
  ]);

  return (
    <Dashboard
      userInfo={user}
      deposits={deposits}
      transactions={transactions}
    />
  );
};

export default page;
