import * as React from 'react'
import {
    useAccount,
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
} from '../components';
import { useTimeLeft, useWinner } from '../hooks';
import BackgroundGrid from '../components/BackgroundGrid';

const Dapp: React.FC = () => {
  const [{ data: accountData }] = useAccount();
  const winner = useWinner();
  const [timeLeftText, gameOver] = useTimeLeft();
  // DEV, REMOVE FOR PROD
  const [override, setOverride] = React.useState(false);

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
              <OwnedKeys/>
              <BuyKeys/>
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
        <OwnedKeys/>
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
