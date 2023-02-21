import React from "react";
import Invest from "./Invest";
import { createClient } from "@/utils/supabase-server";

// @ts-ignore
const page = async ({ params: name }) => {
  const supabase = createClient();
  const email = (await supabase.auth.getSession()).data.session?.user.email;

  async function getCurrentSignedInUser() {
    const id = (await supabase.auth.getSession())?.data.session?.user.id;

    return id;
  }

  async function getPlan() {
    const { data, error } = await supabase
      .from("plans")
      .select("*")
      .eq("name", name.name)
      .single();

    return data;
  }

  async function getWallets() {
    let { data: wallets, error } = await supabase
      .from("wallets")
      .select("name, address, qr_code_url");
    return wallets;
  }

  const userId = getCurrentSignedInUser();
  const planData = getPlan();
  const walletsData = getWallets();

  const [id, plan, wallets] = await Promise.all([
    userId,
    planData,
    walletsData,
  ]);

  return plan ? (
    // @ts-ignore
    <Invest email={email} wallets={wallets} user_id={id} plan={plan} />
  ) : (
    <p>error</p>
  );
};

export default page;
