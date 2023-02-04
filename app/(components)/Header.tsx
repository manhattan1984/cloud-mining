import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-neutral-900 text-white">
      <Link href="/">
        <p>cloud mining</p>
      </Link>
      <div className="flex gap-2">
        <Link href="/signup">
          <p className="text-green-700 uppercase">get started</p>
        </Link>
        <p>menu</p>
      </div>
    </div>
  );
};

export default Header;
