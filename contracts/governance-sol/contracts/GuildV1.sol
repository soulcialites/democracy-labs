//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { AccessControl } from "@openzeppelin/contracts/access/AccessControl.sol";
import { Base64 } from "base64-sol/base64.sol";
import { MemberV1 } from "./MemberV1.sol";

interface IGuild {
  struct Proposal {
    bytes32 id;
    string title;
    string body;
    string category;
    string createdAt;
    string parentGuild;
    bool isActive;
  }

  function getProposals() external view returns (Proposal[] memory);
}

contract Guild is MemberV1, IGuild {
  Proposal[] private proposals_;

  constructor(
    string memory name,
    string memory symbol,
    address manager
  ) MemberV1(name, symbol, manager) {}

  function getProposal(uint256 index) external view returns (Proposal memory) {
    return proposals_[index];
  }

  function getProposals() external view override returns (Proposal[] memory) {
    return proposals_;
  }
}
