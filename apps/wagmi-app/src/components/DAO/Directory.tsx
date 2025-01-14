// @ts-nocheck
import React from "react";

type Props = {
  guilds: any;
};

const Directory = ({ guilds }: Props) => {
  return (
    <div className="rounded overflow-y-auto bg-white p-4 w-2/5 text-sm mb-10">
      <h1 className="text-2xl pb-2 font-bold">Directory</h1>
      {guilds?.map((guild) => (
        <>
          <div className="grid grid-cols-3 border-y py-2 font-medium">
            <h3>{guild.name}</h3>
            <h3 className="text-gray-500">Weighted Voice</h3>
            <h3 className="text-gray-500">Delivered Proposals</h3>
          </div>
          {guild.members?.map((member) => (
            <div className="grid grid-cols-3 py-2">
              <p>{`${member.substring(0, 4)}...${member.substring(
                member.length - 4
              )}`}</p>
              <p>{Math.floor(Math.random() * 11)}</p>
              <p>{Math.floor(Math.random() * 101)}</p>
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default Directory;
