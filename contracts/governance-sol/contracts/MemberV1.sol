//SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MemberV1 is ERC721 {
  uint256 private totalCitizens_;

  mapping(address => bool) private _isCitizen;
  mapping(address => string) private _citizenDID;

  constructor(
    string memory name,
    string memory symbol,
    address citizenV1
  ) ERC721(name, symbol) {}

  function issue(address to) external {
    isCitizen(to);
    _mint(to, totalCitizens_++);
  }

  function revoke(uint256 citizenId) external {
    _burn(citizenId);
  }

  function isCitizen(address citizen) public returns (bool) {
    return _isCitizen[citizen];
  }

  function getDID(address citizen) public returns (string memory) {
    return _citizenDID[citizen];
  }

  function totalCitizens() public view returns (uint256) {
    return totalCitizens_;
  }

  function setDID(string calldata did) public returns (string memory) {
    return _citizenDID[msg.sender] = did;
  }

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    require(false, "CitizenAlpha: Keep your Soul ");
  }
}
