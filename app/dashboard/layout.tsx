import "server-only";
import { createClient } from "@/utils/supabase-server";
import React from "react";
import SignInNavbar from "./(components)/SignInNavbar";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const id = (await supabase.auth.getUser()).data.user?.id;
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    // redirect("/signin");
  }

  return (
    <section className="bg-gray-100">
      {/* Include shared UI here e.g. a header or sidebar */}

      <SignInNavbar id={id} />

      <div className="pt-14">{children}</div>
      <p className="text-sm text-green-700 px-6 py-2">zipoaid mining</p>
    </section>
  );
}
