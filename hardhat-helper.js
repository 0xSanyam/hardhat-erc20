const { ethers } = require("hardhat")

const networks = {
  default: {
    name: "hardhat",
  },
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  80001: {
    name: "matic",
    ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
  },
  31337: {
    name: "localhost",
  },
}

const INITIAL_SUPPLY = ethers.utils.parseEther("1000000")
const localChains = ["hardhat", "localhost"]

module.exports = {
  networks,
  localChains,
  INITIAL_SUPPLY,
}
