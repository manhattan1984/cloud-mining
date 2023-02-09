import React from "react";
import Invest from "./Invest";
import plans from "../../../(data)/plans";
import { createClient } from "@/utils/supabase-server";

// @ts-ignore
const page = async ({ params: name }) => {
  const supabase = createClient();

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

  const userId = getCurrentSignedInUser();
  const planData = getPlan();

  const [id, plan] = await Promise.all([userId, planData]);

  // @ts-ignore
  return plan ? <Invest user_id={id} plan={plan} /> : <p>error</p>;
};

export default page;
