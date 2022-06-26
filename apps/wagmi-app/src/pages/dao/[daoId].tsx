// @ts-nocheck
import React, { useState } from "react";
import CitizenV1 from "@democracy-labs/governance-sol/deployments/rinkeby/CitizenV1.json";
import { useCitizenV1ContractRead } from "@democracy-labs/governor-alpha-wagmi";
import { useRouter } from "next/router";

import Directory from "@/components/DAO/Directory";
import Guilds from "@/components/DAO/Guilds";
import Proposals from "@/components/DAO/Proposals";
import Treasury from "@/components/DAO/Treasury";
import ProposalDetail from "@/components/Modal/ProposalDetail";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";
import CitizenV1 from "@democracy-labs/governance-sol/deployments/localhost/CitizenV1.json";
import { useCitizenV1ContractRead } from "@democracy-labs/governor-alpha-wagmi";
import { useRouter } from "next/router";
import { useState } from "react";
import { useContractRead } from "wagmi";

const DAOPage = () => {
  const router = useRouter();
  const { daoId } = router.query;
  const [open, setOpen] = useState(false);

  const { data, isError, isLoading } = useCitizenV1ContractRead(
    CitizenV1.address,
    "getDAOStream",
    []
  );

  // const { data: treasury } = useContractRead(
  //   [placeAddress],
  //   "realtimeBalanceOfNow",
  //   []
  // );

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="w-full bg-black p-10 pb-32">
        <h1 className="mb-3 text-2xl font-semibold text-white">
          {daoId} DAO Overview
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-baseline gap-3 bg-gray-800 p-4">
            <div>
              <h1 className="text-4xl font-bold text-white">
                {data?.proposals.length}
              </h1>
              <p className="text-sm text-white">Active Proposals</p>
            </div>
            <div>
              <span className="mb-1 text-xs font-medium text-gray-500">
                202/250
              </span>
              <div className="h-2.5 w-36 rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-2.5 rounded-full bg-blue-600"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-800 p-4">
            <div>
              <h1 className="text-4xl font-bold text-white">$59,509</h1>
              <p className="text-sm text-white">Total funds in Treasury</p>
            </div>
          </div>
          <div className="flex bg-gray-800 p-4">
            <div>
              <h1 className="text-4xl font-bold text-white">
                {data?.founders.length}
              </h1>
              <p className="text-sm text-white">DAO Members</p>
            </div>
          </div>
        </div>
        <div className="mt-3 rounded bg-white p-4">
          <h1 className="font-bold text-black">KPIs</h1>
          <div className="flex items-center gap-16">
            <div>
              <h1 className="text-2xl font-semibold">346</h1>
              <p className="text-sm">Proposals Processed</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">$32k</h1>
              <p className="text-sm">Dollars Granted</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <Proposals proposals={data?.proposals} setOpen={setOpen} />
        <Guilds guilds={data?.guilds} />
      </div>
      <div className="mt-3 flex gap-3 px-10">
        <Directory guilds={data?.guilds} />
        <Treasury guilds={data?.guilds} />
      </div>
      <ProposalDetail open={open} setOpen={setOpen} />
    </Main>
  );
};

export default DAOPage;
