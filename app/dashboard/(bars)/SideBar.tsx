import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col w-[30vw]">
      <Link href="/dashboard">Home</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </div>
  );
};

export default SideBar;
