import React from "react";

const Profit = ({
  term,
  dollars,
  btc,
}: {
  term: string;
  dollars: number;
  btc: number;
}) => (
  <div className="bg-white p-2 rounded">
    <p className="text-xl text-green-600 mb-2">{term}</p>
    <div className="">
      <p className="text-2xl mb-2">${dollars}</p>
      <p className="text-2xl">{btc}BTC</p>
    </div>
  </div>
);

const profits = [
  {
    term: "Day",
    dollars: 0.0,
    btc: 0.0,
  },
  {
    term: "Month",
    dollars: 0.0,
    btc: 0.0,
  },
  {
    term: "Year",
    dollars: 0.0,
    btc: 0.0,
  },
];

const Calculator = () => {
  return (
    <div className="flex flex-col gap-4 bg-neutral-100 h-full py-4">
      <div className="flex flex-col p-2 justify-center gap-4">
        <div className="text-2xl font-bold">Mining Calculator</div>
        <p>
          Your profit is based on cryptocurrency current value and mining hash
          rate. (Hashrate Converter)
        </p>
        <div className="flex gap-3">
          <button className="text-green-500">BTC</button>
          <button className="text-green-500">LTC</button>
          <button className="text-green-500">ETC</button>
          <button className="text-green-500">DOGE</button>
          <button className="text-green-500">DCR</button>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <div className="">
            <p className="text-sm font-light">Dollars ($)</p>
            <input className="p-1 border" type="number" />
          </div>
          <div className="">
            <p className="text-sm font-light">Profit ($)</p>
            <input className="p-1 border" type="number" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        {profits.map((profit, index) => (
          <Profit key={index} {...profit} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
