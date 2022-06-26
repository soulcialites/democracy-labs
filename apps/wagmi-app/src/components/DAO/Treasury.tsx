// @ts-nocheck
import { utils } from "ethers";
import React from "react";

const Treasury = ({ guilds, treasury }: any) => {
  return (
    <div className="mb-10 w-3/5 rounded bg-white p-4 text-sm overflow-y-auto">
      <h1 className="pb-2 text-2xl font-bold">Treasury</h1>
      <div className="grid grid-cols-2 border-y py-2">
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
        <h3 className="text-gray-500">DAI Streamed</h3>
      </div>
      {guilds?.map((guild) => (
        <div className="grid grid-cols-3 border-b py-2">
          <h3 className="font-semibold">{guild.name}</h3>
          <p>Ξ {utils.formatEther(guild.treasury)}</p>
          <p>{utils.formatEther(treasury?.availableBalance)}</p>
        </div>
      ))}
    </div>
  );
};

export default Treasury;
