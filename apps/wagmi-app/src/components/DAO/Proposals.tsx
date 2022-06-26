// @ts-nocheck
import React from "react";

import type { Proposal } from "@/pages";

type ProposalsProps = {
  proposals: Proposal[];
  setOpen: any;
};

const Proposals = ({ proposals, setOpen }: ProposalsProps) => {
  return (
    <div className="mx-10 -mt-24 rounded bg-white p-4">
      <h1 className="text-2xl font-semibold text-black">Recent Proposals</h1>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Proposal
              </th>
              <th scope="col" className="px-6 py-3">
                Guild
              </th>
              <th scope="col" className="px-6 py-3">
                Funding
              </th>
              <th scope="col" className="px-6 py-3">
                Voting or Progress Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                <div
                  className="flex cursor-pointer items-center gap-2 hover:underline"
                  onClick={() => setOpen(true)}
                >
                  <img src={"/assets/icons/Arrow.svg"} className="h-4 w-4" />
                  <h2 className="text-base">
                    Launching our social media channel
                  </h2>
                </div>
                <p className="ml-6 text-gray-500">
                  Submitted by @kames on June 10, 2022
                </p>
              </th>
              <td className="px-6 py-4 ">Marketing</td>
              <td className="px-6 py-4">$50</td>
              <td className="px-6 py-4">
                <p className="text-xs text-gray-500">Ends July 4, 2022</p>
                <div className="mt-1 flex items-center gap-10">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 items-center justify-center rounded-full border border-green-400 text-center align-middle">
                      <p className="mt-0.5">👍</p>
                    </div>
                    <div className="font-bold leading-3 text-green-400">
                      <p>50</p>
                      <p>Voted Yes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 items-center justify-center rounded-full border border-red-400 text-center align-middle">
                      <p className="mt-0.5">👎</p>
                    </div>
                    <div className="font-bold leading-3 text-red-400">
                      <p>50</p>
                      <p>Voted No</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 items-center justify-center rounded-full border border-purple-400 text-center align-middle">
                      <p className="mt-0.5">🙊</p>
                    </div>
                    <div className="font-bold leading-3 text-purple-400">
                      <p>50</p>
                      <p>Abstained</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                <div
                  className="flex cursor-pointer items-center gap-2 hover:underline"
                  onClick={() => setOpen(true)}
                >
                  <img src={"/assets/icons/Arrow.svg"} className="h-4 w-4" />
                  <h2 className="text-base">
                    Finalize partnership with Optimism
                  </h2>
                </div>
                <p className="ml-6 text-gray-500">
                  Submitted by @annette on June 23, 2022
                </p>
              </th>
              <td className="px-6 py-4 ">Growth</td>
              <td className="px-6 py-4">$1,000</td>
              <td className="px-6 py-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-500 dark:text-white">
                    Started May 20, 2022
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-white">
                    Due Aug 5, 2022
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-2.5 rounded-full bg-blue-600"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proposals;
