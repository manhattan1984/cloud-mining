import { createClient } from "@/utils/supabase-server";
import React from "react";
import TransactionHistory from "./TransactionHistory";

const page = async ({ params: id }: { params: { id: string } }) => {
  const supabase = createClient();

  const getAllTransactions = async () => {
    let { data: transactions, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", id.id);
    return transactions;
  };

  const serverTransactions = await getAllTransactions();

  return <TransactionHistory transactions={serverTransactions} />;
};

export default page;
