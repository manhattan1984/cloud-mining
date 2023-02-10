// 'use client';
import "server-only";
import SupabaseListener from "./(context)/supabase-listener";
import SupabaseProvider from "./(context)/supabase-provider";
import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import Menu from "./(components)/Menu";
import MenuProvider from "./(context)/MenuContext";
import "./globals.css";
import { createClient } from "@/utils/supabase-server";
import { Toaster } from "react-hot-toast";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;

  const signedOutLinks = [
    { name: "home", link: "/" },
    { name: "sign in", link: "/signin" },
    { name: "plans", link: "/plans" },
    { name: "about", link: "/about" },
  ];

  const signedInLinks = [
    {
      name: "home",
      link: "/",
    },
    { name: "dashboard", link: `/dashboard/${userId}` },
    { name: "about", link: "/about" },
  ];

  const accessToken = session?.access_token;

  const links = accessToken ? signedInLinks : signedOutLinks;
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <SupabaseProvider accessToken={session?.access_token}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <MenuProvider>
            <Menu links={links} />
            <Header links={links} token={session?.access_token} />
            <div className="pt-12">{children}</div>
            <Footer />
          </MenuProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
