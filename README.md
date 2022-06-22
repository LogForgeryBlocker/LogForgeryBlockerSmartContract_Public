# To build and test smart contract

```
yarn && yarn build && yarn test
```

# Deploy

You need to sign in on [alchemy](https://www.alchemy.com/) and set up new project with api key.

Also you need private key of your account.

With these 2 things you are able to deploy smart contract with command:
```
PRIVATE_KEY=<private_key> API_KEY=<api_key> npx hardhat run scripts/deploy.js --network ropsten
```

### Contract available [here](https://ropsten.etherscan.io/address/0x0f93E2e9fd8a1Fc9E62E4BEd32E2Bc53E34D655b#code).
