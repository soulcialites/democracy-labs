import { utils } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hardhat;

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const cv1 = await deploy("CitizenV1", {
    contract: "CitizenV1",
    from: deployer,
    args: [
      ["0x0fB374787B0bB7e62bD82A1B020b12fa239aB788", "0x3417aD1d79D9508912E8d7f3B9167085500b12CE"],
      "0x0fB374787B0bB7e62bD82A1B020b12fa239aB788",
    ],
    skipIfAlreadyDeployed: true,
    log: true,
  });

  const contract = await ethers.getContractAt("CitizenV1", cv1.address);

  await contract.createGuild(
    "Founding Members",
    "Souls",
    "A Sybil Resistant DAO Governance Architecture",
    {
      value: utils.parseEther("0"),
      gasLimit: 6000000
    }
  );
  await contract.createGuild("Treasury", "Tsr", "Treasury Guild", {
    value: utils.parseEther("0"),
    gasLimit: 6000000
  });
  await contract.createGuild("Product", "Prod", "Product Guild", {
    value: utils.parseEther("0"),
    gasLimit: 6000000
  });

  const guilds = await contract.getGuilds();


  for (let i1 = 0; i1 < guilds.length; i1++) {
    let contract = await ethers.getContractAt("MemberV1", guilds[i1]);

    await contract.issue(deployer);
  }

  // const guild = await ethers.getContractAt('GuildV1',cv1.address);
}
