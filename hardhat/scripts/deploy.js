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

//Crypto Devs Token Contract Address:  0x1E911303F2659910D988A5Fc9938D989712a7b28