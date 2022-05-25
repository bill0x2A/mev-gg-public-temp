import * as React from 'react'
import type { AppProps } from 'next/app'
import { providers } from 'ethers'
import Head from 'next/head'

// Imports
import { Connector, Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import { ChakraProvider } from '@chakra-ui/react';
import { ToastProvider } from 'react-toast-notifications';
import '../styles/globals.css';
import theme from '../theme';

// Get environment variables
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID as string
const etherscanApiKey = process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY as string
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string

// Pick chains
const chains = defaultChains
export const defaultChain = chain.rinkeby

// Set up connectors
type ConnectorsConfig = { chainId?: number }
const connectors = ({ chainId }: ConnectorsConfig) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    defaultChain.rpcUrls[0]
  return [
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new WalletConnectConnector({
      chains,
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      chains,
      options: {
        appName: 'wagmi',
        jsonRpcUrl: `${rpcUrl}/${alchemyId}`,
      },
    }),
  ]
}

// Set up providers
type ProviderConfig = { chainId?: number; connector?: Connector }
const isChainSupported = (chainId?: number) =>
  chains.some((x) => x.id === chainId)

const provider = ({ chainId }: ProviderConfig) =>
  providers.getDefaultProvider(
    isChainSupported(chainId) ? chainId : defaultChain.id,
    {
      alchemy: alchemyId,
      etherscan: etherscanApiKey,
      infura: infuraId,
    },
  )
const webSocketProvider = ({ chainId }: ProviderConfig) =>
  isChainSupported(chainId)
    ? new providers.InfuraWebSocketProvider(chainId, infuraId)
    : undefined

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>MEV.GG</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"></link>
      </Head>
      <Provider
        autoConnect
        connectors={connectors}
        provider={provider}
        webSocketProvider={webSocketProvider}>
        <ToastProvider
            autoDismiss
            autoDismissTimeout={6000}
            placement="bottom-right">
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ToastProvider>
      </Provider>
    </>
  )
}

export default App
