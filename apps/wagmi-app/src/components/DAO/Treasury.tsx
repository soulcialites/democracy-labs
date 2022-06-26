import React from "react";

type Props = {};

const Treasury = (props: Props) => {
  return (
    <div className="rounded bg-white p-4 w-3/5 text-sm">
      <h1 className="text-2xl pb-2 font-bold">Directory</h1>
      <div className="py-2 border-y grid grid-cols-2">
        <div>
          <p>Total Funds</p>
          <h2 className="text-3xl font-semibold">$59,509</h2>
        </div>
        <div>
          <p>Total Spend</p>
          <h2 className="text-3xl font-semibold">$2,509</h2>
        </div>
      </div>
      <div className="py-2 border-b grid grid-cols-3">
        <h3 className="text-gray-500">Guilds</h3>
        <h3 className="text-gray-500">Funds Allocated</h3>
        <h3 className="text-gray-500">Spend to Date</h3>
      </div>
      <div className="grid grid-cols-3 py-2 border-b">
        <h3 className="font-semibold">Executives</h3>
        <p>$1,800</p>
        <p>$50</p>
      </div>
      <div className="grid grid-cols-3 py-2 border-b">
        <h3 className="font-semibold">Dev</h3>
        <p>$3,500</p>
        <p>$1,500</p>
      </div>
      <div className="grid grid-cols-3 py-2 border-b">
        <h3 className="font-semibold">Marketing</h3>
        <p>$2,500</p>
        <p>$1,000</p>
      </div>
    </div>
  );
};

export default Treasury;
