import Link from "next/link";
import React from "react";

const TransactionNav = () => {
  return (
    <nav className="flex gap-3 text-sm mx-2 text-neutral-600">
      <Link href="/dashboard/transactionlog">Transaction History</Link>
      <Link href="/dashboard/transactionlog/withdrawal-history">
        Withdrawal History
      </Link>
      <Link href="/dashboard/transactionlog/deposit-history">
        Deposit History
      </Link>
    </nav>
  );
};

export default TransactionNav;
