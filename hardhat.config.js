require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@primitivefi/hardhat-marmite');

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

module.exports = {
  solidity: "0.8.4",
  networks: {
    // hardhat: {
    //   mining: {
    //    auto: false,
    //     interval: 50
    //   }
    // } 
  },
};
