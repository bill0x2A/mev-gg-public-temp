// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );
  const start = await deployer.getBalance()
  console.log("Account balance before deploy:", (await deployer.getBalance()).toString());
  
  
  console.log("Deploying renderer contract");

  const Renderer = await hre.ethers.getContractFactory("Renderer");
  const renderer = await Renderer.deploy();
  await renderer.deployed();
  console.log("Renderer deployed to:", renderer.address);

  const initialKeyPrice = 500000000000000;
  const startTime = 86400;
  const increment = 30;

  const MevGG = await hre.ethers.getContractFactory("MevGG");
  const mevGG = await MevGG.deploy(startTime, increment, initialKeyPrice);
  await mevGG.deployed();
  console.log("MevGG deployed to:", mevGG.address);

  await mevGG.setRenderer(renderer.address)
  console.log("MevGG set renderer to:", renderer.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveNextFrontendFiles(mevGG);
}

function saveNextFrontendFiles(mevGG) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../next-frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/mevgg-contract-address.json",
    JSON.stringify({ MevGG: mevGG.address }, undefined, 2)
  );

  const MevGGArtifact = artifacts.readArtifactSync("MevGG");

  fs.writeFileSync(
    contractsDir + "/MevGG.json",
    JSON.stringify(MevGGArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
