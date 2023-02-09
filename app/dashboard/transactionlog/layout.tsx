import React from "react";
import TransactionNav from "./(components)/TransactionNav";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gray-100">
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <TransactionNav /> */}
      {children}{" "}
    </section>
  );
}
