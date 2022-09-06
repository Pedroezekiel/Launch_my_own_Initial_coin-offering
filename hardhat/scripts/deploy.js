const {ethers} = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_ADDRESS } = require("../constants");

async function main(){
  const cryptoDevsNftContract = CRYPTO_DEVS_NFT_ADDRESS;

  const cryptoDevTokenContract = await ethers.getContractFactory("CryptoDevToken");

  const deployedCryptoDevToken = await cryptoDevTokenContract.deploy(cryptoDevsNftContract);

  console.log("Crypto Devs Token Contract Address: ", deployedCryptoDevToken.address);
}

main()
.then(() =>process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1);
});

//Crypto Devs Token Contract Address:  0x6E9cA2E7e80992EEEf81B7C9C9A80050df20E78C