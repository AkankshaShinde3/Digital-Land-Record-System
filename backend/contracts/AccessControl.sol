// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AccessControl {
    address public admin;
    mapping(address => bool) public users;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not an admin.");
        _;
    }

    modifier onlyUser() {
        require(users[msg.sender], "Not a registered user.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addUser(address _user) public onlyAdmin {
        users[_user] = true;
    }
}
