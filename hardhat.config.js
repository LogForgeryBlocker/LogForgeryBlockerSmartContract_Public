require('@nomiclabs/hardhat-waffle')
require('dotenv/config')

const ALCHEMY_API_KEY = process.env.API_KEY
const ROPSTEN_PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: '0.8.13',
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
