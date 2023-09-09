import Link from "next/link";
import React from "react";
import Divider from "./Divider";

export type PlanType = {
  name: string;
  minimum: number;
  maximum: number | string;
  interest: number;
  duration: number;
  extra: boolean;
  currency: string;
  hashrate: number;
};

const Plan = ({
  name,
  minimum,
  maximum,
  interest,
  duration,
  extra,
  currency,
  hashrate,
}: PlanType) => {
  const maximumType = typeof maximum;
  return (
    <div className="border rounded shadow w-4/5 mx-auto basis-1/4 flex-grow">
      <p className="rounded font-medium text-center text-2xl capitalize text-green-600 bg-neutral-200 p-2 mb-3">
        {name}
      </p>
      <div className="flex flex-col gap-1 px-4">
        <div className="flex justify-between">
          <p>Minimum Funding:</p>
          <p>{currency === "$" ? `$${minimum}` : `${minimum} BTC`}</p>
        </div>
        <div className="flex justify-between">
          <p>Maximum Funding:</p>

          <p>
            {currency === "$" ? `$${maximum || "Unlimited"}` : `${maximum} BTC`}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Interest Rate:</p>
          <p className="text-right w-1/2">{interest}%</p>
        </div>
        <div className="flex justify-between">
          <p>Duration:</p>
          <p>{duration} Hours</p>
        </div>
        <div className="flex justify-between">
          <p>Bitcoin Hashrate:</p>
          <p>{hashrate}TH/s</p>
        </div>
        <div className="flex justify-between">
          <p>Fast Payout:</p>
          <p>Yes</p>
        </div>
        <div className="flex justify-between">
          <p>Support Forum:</p>
          <p>Yes</p>
        </div>
        {extra ? (
          <div className="flex justify-between">
            <p>Company bonuses available on this plan</p>
          </div>
        ) : null}

        <Link href={`/dashboard/plans/${name}`}>
          <button className="text-green-700 uppercase text-left py-4">
            buy now
          </button>
        </Link>
      </div>
    </div>
  );
};

const Plans = ({ plans }: { plans: PlanType[] }) => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <p className="text-3xl my-2">Our Plans</p>
        <Divider />
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 my-4">
          {plans
            .filter(({ extra }) => !extra)
            .map((plan, index) => (
              // <div className=""></div>
              <Plan {...plan} key={index} />
            ))}
        </div>
        <p className="text-3xl my-2">Exclusive Investment Plan</p>
        <Divider />
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 my-4">
          {plans
            .filter(({ extra }) => extra)
            .map((plan, index) => (
              // <div className=""></div>
              <Plan {...plan} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
