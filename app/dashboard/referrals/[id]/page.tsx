import { createClient } from "@/utils/supabase-server";
import React from "react";
import ReferralsPage from "./ReferralsPage";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("first_name, last_name, id, email")
    .eq("referral_id", id);

  console.log("data", data);
  console.log("error", error);

  return <ReferralsPage referrals={data} />;
};

export default page;
