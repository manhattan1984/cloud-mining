import { createClient } from "@/utils/supabase-server";
import React from "react";
import Home from "./HomePage";

const page = async () => {
  const supabase = createClient();

  let { data: plans, error } = await supabase.from("plans").select("*");
  console.log('plans',plans)
  console.log('error', error)
  // @ts-ignore
  return <Home plans={plans || []} />;
};

export default page;
