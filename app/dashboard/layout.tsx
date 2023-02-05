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
    <section className="bg-gray-100">
      {/* Include shared UI here e.g. a header or sidebar */}

      <SignInNavbar />

      <div className="pt-14">{children}</div>
      <p className="text-sm text-green-700 px-6 py-2">zipoaid mining</p>
    </section>
  );
}
