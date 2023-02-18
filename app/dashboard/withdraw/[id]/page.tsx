import { createClient } from "@/utils/supabase-server";
import React from "react";
import Withdrawal from "./Withdrawal";

// @ts-ignore
const page = async ({ params: { id } }) => {
  const supabase = createClient();
  const email = (await supabase.auth.getSession()).data.session?.user.email;
  let { data: wallets, error } = await supabase.from("wallets").select("name");
  // @ts-ignore
  return <Withdrawal email={email} wallets={wallets} user_id={id} />;
};

export default page;
