// @ts-nocheck
import { utils } from "ethers";
import React from "react";

type Props = {};

const Treasury = ({ guilds }: any) => {
  return (
    <div className="rounded bg-white p-4 w-3/5 text-sm">
      <h1 className="text-2xl pb-2 font-bold">Treasury</h1>
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
      <div className="grid grid-cols-3 border-b py-2">
        <h3 className="text-gray-500">Guilds</h3>
        <h3 className="text-gray-500">Funds Allocated</h3>
        <h3 className="text-gray-500">Spend to Date</h3>
      </div>
      {guilds?.map((guild) => (
        <div className="grid grid-cols-3 border-b py-2">
          <h3 className="font-semibold">{guild.name}</h3>
          <p>Ξ {utils.formatEther(guild.treasury)}</p>
          <p>0</p>
        </div>
      ))}
    </div>
  );
};

export default Treasury;
