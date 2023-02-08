import "server-only";
import Plans from "@/app/(components)/Plans";
import React from "react";
import { createClient } from "@/utils/supabase-server";

const page = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("plans").select("*");
  // @ts-ignore
  return <Plans plans={data} />;
};

export default page;
