# Hardhat ERC20

## Quickstart

```
git clone https://github.com/0xSanyam/hardhat-erc20
cd hardhat-erc20
yarn
```

## Usage

Deploy:

```
yarn hardhat deploy
```

## Deployment to a testnet or mainnet

1. Setup environment variabltes

    You'll want to set your `POLYGON_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file.

    - `PRIVATE_KEY`: The private key of your account (like from [metamask](https://metamask.io/)).
    - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
    - `POLYGON_RPC_URL`: This is url of the polygon testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/)

2. Get testnet ETH

    Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your metamask.

3. Deploy

    ```
    yarn hardhat deploy --network matic
    ```

## Verify on polygonscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://polygonscan.com/myapikey) from PolygonScan and set it as an environemnt variable named `POLYGONSCAN_API_KEY`. You can add it into your `.env` file.

In it's current state, if you have your api key set, it will auto verify the contracts!

However, you can manual verify with:

```
yarn hardhat verify --constructor-args arguments DEPLOYED_CONTRACT_ADDRESS
```