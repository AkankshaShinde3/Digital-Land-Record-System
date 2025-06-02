// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./AccessControl.sol";

contract LandRegistry is AccessControl {
    struct Land {
        uint256 id;
        string location;
        uint256 area;
        address owner;
        bool isRegistered;
    }

    uint256 public landCount;
    mapping(uint256 => Land) public lands;
    mapping(address => uint256[]) public ownerLands;

    event LandRegistered(uint256 landId, address owner, string location);
    event OwnershipTransferred(uint256 landId, address oldOwner, address newOwner);

    function registerLand(string memory _location, uint256 _area) public onlyUser {
        landCount++;
        lands[landCount] = Land(landCount, _location, _area, msg.sender, true);
        ownerLands[msg.sender].push(landCount);

        emit LandRegistered(landCount, msg.sender, _location);
    }

    function transferOwnership(uint256 _landId, address _newOwner) public {
        require(lands[_landId].isRegistered, "Land not registered.");
        require(lands[_landId].owner == msg.sender, "Not the owner.");

        address oldOwner = lands[_landId].owner;
        lands[_landId].owner = _newOwner;
        ownerLands[_newOwner].push(_landId);

        emit OwnershipTransferred(_landId, oldOwner, _newOwner);
    }
}
