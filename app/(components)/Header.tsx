"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useMenuContext } from "../(context)/MenuContext";
import { useSupabase } from "../(context)/supabase-provider";

// @ts-ignore
const Header = ({ token, links }) => {
  const { supabase } = useSupabase();
  const { showHomeMenu, setShowHomeMenu } = useMenuContext();
  const router = useRouter();
  return (
    <nav className="fixed z-40 w-full flex items-center justify-between p-4 bg-neutral-900 text-white top-0">
      <Link href="/">
        <div className="flex items-center">
          <Image alt="Logo" src="/transparent.png" height={40} width={40} />
          <p className="capitalize text-xl font-bold">Wealth Aid  mining</p>
        </div>
      </Link>
      <div className="flex gap-4 items-center">
        {token ? (
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/");
            }}
          >
            Log Out
          </button>
        ) : (
          <Link href="/signup">
            <p className="text-green-700 uppercase">get started</p>
          </Link>
        )}
        <AiOutlineMenu
          className="text-xl cursor-pointer lg:hidden"
          onClick={() => {
            setShowHomeMenu(!showHomeMenu);
          }}
        />
        <div className="lg:flex gap-4 hidden">
          {links.map(
            ({ name, link }: { name: string; link: string }, index: number) => (
              <Link key={index} href={link} className="uppercase">
                {name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
