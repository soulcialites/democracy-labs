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

  string private description;

  event Received(address from, uint256 amount);

  struct Metadata {
    string name;
    string symbol;
    string description;
    uint256 treasury;
    address[] members;
    Proposal[] proposals;
  }

  constructor(
    string memory name,
    string memory symbol,
    string memory description_,
    address manager
  ) MemberV1(name, symbol, manager) {
    description = description_;
  }

  // receive() external payable {};
  receive() external payable {
    emit Received(msg.sender, msg.value);
  }

  function getMetadata() external view returns (Metadata memory) {
    uint256 tote = totalCitizens();

    Proposal[] memory proposals_ = new Proposal[](tote);
    address[] memory members = new address[](tote);
    for (uint256 i1 = 0; i1 < tote; i1++) {
      address owner_ = ownerOf(i1);
      members[i1] = owner_;
    }

    return
      Metadata({
        name: name(),
        symbol: symbol(),
        description: description,
        treasury: address(this).balance,
        members: members,
        proposals: proposals_
      });
  }

  function getProposal(uint256 index) external view returns (Proposal memory) {
    return proposals_[index];
  }

  function getProposals() external view override returns (Proposal[] memory) {
    return proposals_;
  }
}
