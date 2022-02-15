require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@primitivefi/hardhat-marmite');
require("hardhat-gas-reporter");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

module.exports = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      }
    }
  },
  networks: {
    // hardhat: {
    //   mining: {
    //    auto: false,
    //     interval: 5
    //   }
    // } 
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: 'f7abed01-807d-4d08-8fad-20c8f161c3e0'
  }
};
