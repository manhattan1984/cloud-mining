"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useMenuContext } from "../(context)/MenuContext";
import links from "../(data)/links";

// @ts-ignore
const Header = () => {
  // const { showHomeMenu, setShowHomeMenu } = useMenuContext();
  return (
    <nav className="fixed z-40 w-full flex items-center justify-between p-4 bg-neutral-900 text-white top-0">
      <Link href="/">
        <p className="capitalize text-xl font-bold">zipoAid mining</p>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/signup">
          <p className="text-green-700 uppercase">get started</p>
        </Link>
        <AiOutlineMenu
          className="text-xl cursor-pointer lg:hidden"
          onClick={() => {
            // setShowHomeMenu(!showHomeMenu);
          }}
        />
        <div className="lg:flex gap-4 hidden">
          {links.map(
            ({ name, link }: { name: string; link: string }, index) => (
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
