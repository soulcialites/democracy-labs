import CitizenV1 from "@democracy-labs/governance-sol/deployments/localhost/CitizenV1.json";
import {
  CitizenNFTCard,
  CitizensLatestCardList,
  CitizenV1IssueFromFounder,
} from "@democracy-labs/governor-alpha-wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount } from "wagmi";

import IsMounted from "@/components/IsMounated";
import DAOCard from "@/components/MyDashboard/DAOCard";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

type UserDAOs = {
  daos: DAO[];
};

interface DAO {
  id: string;
  name: string;
  // myRoles: string[];
  guilds: Guild[];
}

interface Guild {
  name: string;
  symbol: string;
  members: string[];
  proposals: Proposal[];
}

export interface Proposal {
  id: string;
  title: string;
  body: string;
  category: string;
  createdAt: number;
  parentGuild: string;
  parentDAO: string;
  isActive: boolean;
  timeline: Timeline;
}

interface Timeline {
  time: string;
}

const Index = () => {
  const { data } = useAccount();

  if (!data) {
    return (
      <div className="w-screen flex flex-col h-screen bg-black items-center justify-center text-white text-center gap-3">
        <h1 className="text-6xl font-bold">Decide the future of your DAO</h1>
        <p className="text-2xl mb-10">
          Sybil Resistant On-Chain Representative Democracy
        </p>
        <ConnectButton />
      </div>
    );
  }

  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="w-full h-full bg-black p-10">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-white text-2xl font-semibold">Your DAOs</h1>
          <div className="flex items-center gap-3">
            <div className="border px-2 py-1 rounded border-purple-300 text-purple-300">
              Filter
            </div>
            <div className="border px-2 py-1 rounded border-purple-300 text-purple-300">
              Sort
            </div>
          </div>
        </div>
        <div className="gap-3 text-sm">
          <DAOCard
            name="Soulcialites"
            roleTier="Active Citizen"
            skills={["Product Design", "Solidity"]}
            activeProposals={3}
            expectedEarnings={1250}
            earningsToDate={2440}
            requests={[
              {
                title: "Code review for new product",
                category: "blocker",
                guild: "Product Guild",
              },
            ]}
          />
        </div>
      </div>
      <div className="bg-white max-w-4xl space-y-5 mx-auto my-5 p-4 text-black rounded">
        <h1 className="text-2xl">Create New Society</h1>

        <section>
          <div className="container mx-auto max-w-md">
            <div className="bg-neutral-500">
              <h3>Add</h3>
            </div>
          </div>
        </section>
      </div>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-md">
          <div className="card">
            <h3 className="text-4xl font-normal">Add Member/Citizen</h3>
            <p className="">Managed by Founding Team</p>
            <hr className="my-3 opacity-5" />
            <CitizenV1IssueFromFounder contract={CitizenV1.address} />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto max-w-screen-md">
          <div className="card">
            <h3 className="text-4xl font-normal">Latest Citizens</h3>
            <hr className="my-3 opacity-5" />
            <IsMounted>
              <CitizensLatestCardList contract={CitizenV1.address} />
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-4">
                  <CitizenNFTCard contract={CitizenV1.address} />
                </div>
                <div className="col-span-4">
                  <CitizenNFTCard contract={CitizenV1.address} tokenId="2" />
                </div>
              </div>
            </IsMounted>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
