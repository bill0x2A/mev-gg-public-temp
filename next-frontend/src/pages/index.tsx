import * as React from 'react'
import {
    useAccount,
    useContract,
    useProvider,
  } from 'wagmi'
import {
  Box,
  Flex,
  Center,
  Container,
  Button,
} from '@chakra-ui/react';
import {
  OwnedKeys,
  Jackpot,
  AnimatedTitle,
  ConnectWallet,
  BuyKeys,
  Winner,
  GameOver,
  YouWon,
  Dividends,
  Card,
} from '../components';
import { ethers } from 'ethers';
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { useWinner } from '../hooks';
import BackgroundGrid from '../components/BackgroundGrid';

const Dapp: React.FC = () => {
  const [{ data: accountData }] = useAccount();
  const provider = useProvider();
  const contract = useContract({
    addressOrName: contractAddress.MevGG,
    contractInterface: MevGGArtifact.abi,
    signerOrProvider: provider,
  });
  const winner = useWinner();
  const [keyBalance, setKeyBalance] = React.useState<number>(0);
  const [dividend, setDividend] = React.useState<string>('');
  // DEV, REMOVE FOR PROD
  const [override, setOverride] = React.useState(false);

  const getKeysOwned = async (): Promise<void> => {
      if (!accountData) return;
      try {
          const divTracker = await contract.divTracker(accountData.address);
          const _keyBalance = divTracker._keyBalance.toNumber();
          setKeyBalance(_keyBalance);
      } catch(e) {
          console.log(e);
      }
  }

  const getDividend = async (): Promise<void> => {
    if (!accountData) return;
    try {
        const _dividend = await contract.getClaimableDivvies(accountData.address);
        const formattedDividend = Number(ethers.utils.formatEther(_dividend)).toFixed(5);
        setDividend(formattedDividend);
    } catch(e) {
        console.log(e);
    }
};

  const walletIsConnected = accountData && accountData.address;
  const userIsWinner = accountData && accountData.address === winner;

  const handleOverrideSwitch = () => {
    setOverride(!override);
  };

  let pageContent;
  // if (gameOver === false) {
  if(!override) { // DEV REMOVE FOR PROD
    pageContent = <>
      <AnimatedTitle/>
      <Center paddingBottom={'50px'} minHeight={'calc(100vh - 100px)'} flexDirection={'column'} position='relative' top={'100px'}>
            <Box width={'100%'} marginTop='0px'>
            <Jackpot/>
            <Winner/>
            {!walletIsConnected && <ConnectWallet/>}
            {walletIsConnected && <Flex gap='10px'>
              <Card>
                <OwnedKeys keyBalance={keyBalance} getKeysOwned={getKeysOwned}/>
                <Dividends dividend={dividend} getDividend={getDividend}/>
              </Card>
              <BuyKeys getKeysOwned={getKeysOwned}/>
            </Flex>}
          </Box>
        </Center>
    </>
  }
  // if (gameOver) {
  if (override) { // DEV, REMOVE FOR PROD
    pageContent = <>
      <GameOver/>
      {!walletIsConnected && <ConnectWallet delay={1}/>}
      {walletIsConnected && <Flex gap='10px' marginBottom={'50px'}>
        <OwnedKeys keyBalance={keyBalance} getKeysOwned={getKeysOwned}/>
        {userIsWinner && <YouWon/>}
      </Flex>}
    </>
  }

  return (
    <>
      <Button onClick={handleOverrideSwitch} position={'absolute'} top={2} right={2}>[DEV] Game Over Toggle</Button>
      <Container position={'relative'} zIndex={1} maxW={'xl'} minHeight={'100vh'}>
        {pageContent}
      </Container>
      <BackgroundGrid top={'calc(100vh - 300px)'} left={0}/>
      </>
  );
}

export default Dapp;
