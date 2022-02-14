import * as React from 'react'
import type { AppProps } from 'next/app'
import { providers } from 'ethers'
import NextHead from 'next/head'

// Imports
import { Connector, Provider, chain, defaultChains, developmentChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'

// Get environment variables
const alchemy = process.env.NEXT_PUBLIC_ALCHEMY_ID as string
const etherscan = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY as string
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string

// Pick chains
// const chains = developmentChains
// const defaultChain = chain.hardhat

// Set up connectors
// type ConnectorsConfig = { chainId?: number }
// console.log(chains);
// const connectors = ({ chainId }: ConnectorsConfig) => {
//   // const rpcUrl =
//   //   chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
//   //   defaultChain.rpcUrls[0]
//   return [
//     new InjectedConnector({ chains: [chain.hardhat]}),
//     // new WalletConnectConnector({
//     //   chains: [chain.hardhat],
//     //   options: {
//     //     infuraId,
//     //     qrcode: true,
//     //   },
//     // }),
//     // new WalletLinkConnector({
//     //   chains: [chain.hardhat],
//     //   options: {
//     //     appName: 'wagmi',
//     //     jsonRpcUrl: `${rpcUrl}/${infuraId}`,
//     //   },
//     // }),
//   ]
// }

// Set up connectors
type ConnectorsConfig = { chainId?: number }
const connectors = ({ chainId }: ConnectorsConfig) => {
  return [
    new InjectedConnector({
      chains: [chain.hardhat],
    }),
  ]
}

const connector = new InjectedConnector({
  chains: [chain.hardhat],
})

// // Set up providers
// type ProviderConfig = { chainId?: number; connector?: Connector }
// // const isChainSupported = (chainId?: number) => {
// //   console.log(chains.some((x) => x.id === chainId));
// //   return chains.some((x) => x.id === chainId)
// // }
  
// const provider = ({ chainId }: ProviderConfig) =>
//   new providers.JsonRpcProvider()

// const webSocketProvider = ({ chainId }: ProviderConfig) =>
//   isChainSupported(chainId)
//     ? new providers.InfuraWebSocketProvider(chainId, infuraId)
//     : undefined

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider
      connectors={[connector]}
      // provider={provider}
      // webSocketProvider={webSocketProvider}
    >
      <NextHead>
        <title>wagmi</title>
      </NextHead>

      <Component {...pageProps} />
    </Provider>
  )
}

export default App
