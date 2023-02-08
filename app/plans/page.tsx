import "server-only";
import React from "react";
import Plans from "../(components)/Plans";
import { createClient } from "../../utils/supabase-server";

// export const revalidate = 0;

const page = async () => {
  const supabase = createClient();
  const { data } = await supabase.from("plans").select("*");
  // @ts-ignore
  return <Plans plans={data} />;
};

export default page;
