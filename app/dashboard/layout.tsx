import Link from "next/link";
import React from "react";
import SideBar from "./(bars)/SideBar";
import SignInNavbar from "./(bars)/SignInNavbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      <SignInNavbar />

      <div className="flex">
        <SideBar />
        <div className="">{children}</div>
      </div>
    </section>
  );
}
