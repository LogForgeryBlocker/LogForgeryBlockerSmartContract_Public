async function main() {
  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:", deployer.address)

  console.log("Account balance:", (await deployer.getBalance()).toString())

  const Logger = await ethers.getContractFactory("Logger")
  const logger = await Logger.deploy()

  console.log("Logger address:", logger.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });