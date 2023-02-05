import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-neutral-900 text-white">
      <Link href="/">
        <p className="capitalize text-xl">zipo aid mining</p>
      </Link>
      <div className="flex gap-4 items-center">
        <Link href="/signup">
          <p className="text-green-700 uppercase">get started</p>
        </Link>
        <AiOutlineMenu className="text-xl" />
      </div>
    </div>
  );
};

export default Header;
