const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/OpenzepToken.sol:OpenzepToken",
    })
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract Already Verified!")
    } else {
      console.log(error)
    }
  }
}

module.exports = { verify }
