//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ICryptoDevs.sol";

contract CryptoDevToken is ERC20,Ownable{
    uint256 public constant tokenPrice = 0.001 ether;

    uint256 public constant tokenPerNft = 10 * 10**18;

    uint256 public constant maxTokenSupply = 10000 * 10**18;

    ICryptoDev cryptoDevsNFT;

    mapping (uint256 => bool) public tokenIdsClaimed;

    constructor(address _cryptoDevsContract)ERC20("crypto dev Token", "CD"){
        cryptoDevsNFT = ICryptoDev(_cryptoDevsContract);
    }

    function mint(uint256 amount) public payable{

        uint256 _requiredAmount = tokenPrice * amount ;

        require(msg.value >= _requiredAmount, "Ether sent is incorrect");

        uint256 amountWithDecimals =amount * 10**18;
        require((totalSupply()+ amountWithDecimals)<= maxTokenSupply, "Exceeds the max total supply available.");
        _mint(msg.sender, amountWithDecimals);
    }
    function withdraw() public onlyOwner{
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send ether");
    }
    receive() external payable {}

    fallback() external payable {}



}