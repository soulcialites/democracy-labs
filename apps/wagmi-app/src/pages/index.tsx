// @ts-nocheck
import CitizenV1 from "@democracy-labs/governance-sol/deployments/rinkeby/CitizenV1.json";
import {
  CitizenNFTCard,
  CitizensLatestCardList,
  CitizenV1IssueFromFounder,
} from "@democracy-labs/governor-alpha-wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useContractRead } from "wagmi";
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
  myRoles: string[];
  guilds: Guild[];
}

interface Guild {
  name: string;
  symbol: string;
  description: string;
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
  timeline: string;
}

const Index = () => {
  const { data } = useAccount();

  const { data: treasury } = useContractRead(
    "jbass.eth",
    "realtimeBalanceOfNow",
    []
  );

  if (!data) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-black text-center text-white">
        <h1 className="text-6xl font-bold">Decide the future of your DAO</h1>
        <p className="mb-10 text-2xl">
          Sybil Resistant On-Chain Representative Democracy
        </p>
        <ConnectButton />
      </div>
    );
  }

  return (
    <IsMounted>
      <Main
        meta={
          <Meta
            title={`${AppConfig.title} | ${AppConfig.description}`}
            description={AppConfig.description}
          />
        }
      >
        <div className="h-full w-full bg-black p-10">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-white">Your DAOs</h1>
            <div className="flex items-center gap-3">
              <div className="rounded border border-purple-300 px-2 py-1 text-purple-300">
                Filter
              </div>
              <div className="rounded border border-purple-300 px-2 py-1 text-purple-300">
                Sort
              </div>
            </div>
          </div>
          <div className="space-y-3 text-sm">
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
                {
                  title: "Broken feature transactions handling",
                  category: "blocker",
                  guild: "Developer Guild",
                },
              ]}
            />
            <DAOCard
              name="BakeryDAO"
              roleTier="Creator"
              skills={["Research", "Writing"]}
              activeProposals={1}
              expectedEarnings={4200}
              earningsToDate={440}
              requests={[
                {
                  title:
                    "Approve payment to contributor for research projected",
                  category: "blocker",
                  guild: "Research Guild",
                },
              ]}
            />
            <DAOCard
              name="PoolTogether"
              roleTier="Tier Member"
              skills={["Design"]}
              activeProposals={0}
              expectedEarnings={0}
              earningsToDate={400}
              requests={[
                {
                  title: "Vote to deploy on Optimism",
                  category: "Vote",
                  guild: "Operations SubDAO",
                },
              ]}
            />
          </div>
        </div>
    </Main>
======
  );
};

export default Index;
