"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useMenuContext } from "../(context)/MenuContext";

const MenuLink = ({ link, name }: { link: string; name: string }) => {
  const { showHomeMenu, setShowHomeMenu } = useMenuContext();
  return (
    <Link
      onClick={() => setShowHomeMenu(!showHomeMenu)}
      className="text-4xl uppercase"
      href={link}
    >
      {name}
    </Link>
  );
};

// @ts-ignore
const Menu = ({ links }) => {
  const { showHomeMenu, setShowHomeMenu } = useMenuContext();

  return (
    <>
      <div
        className={`fixed z-50 ease-in-out duration-300 
        ${showHomeMenu ? "" : "translate-x-full"}
         h-screen w-screen bg-neutral-900 text-white flex flex-col justify-between p-4`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image alt="logo" src="/transparent.png" width={50} height={50} />
            <p className="text-xl">ZipoAid Mining</p>
          </div>
          <AiOutlineClose
            onClick={() => {
              setShowHomeMenu(!showHomeMenu);
            }}
            className="text-xl cursor-pointer"
          />
        </div>
        <div className="p-4 flex flex-col gap-3 items-start">
          {/* @ts-ignore */}
          {links.map((link, index) => (
            <MenuLink key={index} {...link} />
          ))}
        </div>
        <p className="text-xs text-right">ZipoAid Mining</p>
      </div>
    </>
  );
};

export default Menu;
