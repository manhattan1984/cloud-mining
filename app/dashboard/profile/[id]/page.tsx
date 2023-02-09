import { createClient } from "@/utils/supabase-server";
import React from "react";
import Profile from "./Profile";

// @ts-ignore
const page = async ({ params: id }) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id.id)
    .single();

  return <Profile userData={data} />;
};

export default page;
