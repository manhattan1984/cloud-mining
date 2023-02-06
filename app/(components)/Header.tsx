'use client';
import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useMenuContext } from "../(context)/MenuContext";

const Header = () => {
  const {showHomeMenu, setShowHomeMenu} = useMenuContext()
  return (
    <div className="fixed z-40 w-full flex items-center justify-between p-4 bg-neutral-900 text-white top-0">
      <Link href="/">
        <p className="capitalize text-xl">zipoAid mining</p>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/signup">
          <p className="text-green-700 uppercase">get started</p>
        </Link>
        <AiOutlineMenu className="text-xl cursor-pointer" onClick={() => {setShowHomeMenu(!showHomeMenu)
        console.log("menu", showHomeMenu);
        
        }} />
      </div>
    </div>
  );
};

export default Header;
