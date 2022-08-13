const { network } = require("hardhat")
const { localChains, INITIAL_SUPPLY } = require("../hardhat-helper")
const { verify } = require("../hardhat-verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const openZep = await deploy("OpenzepToken", {
    from: deployer,
    args: [INITIAL_SUPPLY],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  })

  log(`OpenZep Token deployed at ${openZep.address}`)

  if (!localChains.includes(network.name) && process.env.POLYGONSCAN_API_KEY) {
    await verify(openZep.address, [INITIAL_SUPPLY])
  }
}

module.exports.tags = ["all", "token"]
