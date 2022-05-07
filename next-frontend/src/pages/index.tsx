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
  Text,
  Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
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
  RobotBadge,
  PurchaseModal,
  KeyBadge,
} from '../components';
import { ethers } from 'ethers';
import ReactTooltip from 'react-tooltip'
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import {
    useJackpot,
    useWinner,
    useBuyKeys,
    useLocalStorage,
} from '../hooks';
import BackgroundGrid from '../components/BackgroundGrid';
import { PrettyButton } from '../components/library';
import classes from './styles/index.module.css';

const Dapp: React.FC = () => {
  const userHasVisitedBefore = useLocalStorage();
  const router = useRouter();
  const [{ data: accountData }] = useAccount();
  const provider = useProvider();
  const contract = useContract({
    addressOrName: contractAddress.MevGG,
    contractInterface: MevGGArtifact.abi,
    signerOrProvider: provider,
  });
  const robotRef = React.useRef();
  const { winnerText, read: getWinner } = useWinner();
  const { read: getJackpot, jackpotText } = useJackpot();
  const [keyBalance, setKeyBalance] = React.useState<number>(0);
  const [dividend, setDividend] = React.useState<string>('');
  const {
    handleBuyKeys,
    handleIncreaseKeys,
    handleDecreaseKeys,
    numberOfKeys,
    txInProgress,
    txHash,
  } = useBuyKeys({
    onSuccess: () => {},
  });
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const shouldPlayAnimations = React.useMemo(() => {
    if (accountData?.address || userHasVisitedBefore) return false;
    return true;
  }, [accountData]); // this might cause a bug, check this out

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

  const handleOpenModal = (): void => {
    setModalIsOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalIsOpen(false);
  };

  const navigateToFAQPage = (): void => {
    router.push('faq');
  };

  const handleUserHasBoughtKey = (): void => {
    // Refresh data at intervals to prevent API call overloads
    getDividend();
    setTimeout(getKeysOwned, 500);
    setTimeout(getWinner, 1000);
    setTimeout(getJackpot, 1500);
  };

  const walletIsConnected = accountData && accountData.address;
  const userIsWinner = accountData && accountData.address === winnerText;

  const handleOverrideSwitch = (): void => {
    setOverride(!override);
  };

  const showRobotTooltip = (): void => {
    if (!robotRef || !robotRef.current) return;
    setTimeout(() => ReactTooltip.show(robotRef.current as any), 3000);
    setTimeout(() => ReactTooltip.hide(robotRef.current), 6000);
  };

  // Open the robot badge dialogue on pageload.
  React.useEffect(() => {
    showRobotTooltip();
  }, [robotRef?.current]);

  // Open the transaction modal when a purchase transaction begins.
  React.useEffect(() => {
    if (txInProgress) {
      handleOpenModal();
    }
  }, [txInProgress]);

  let pageContent;

  // Wallet connected state, game in progress
  if(!override) {
    pageContent = <>
      <Center paddingBottom={'50px'} minHeight={'calc(100vh - 100px)'} flexDirection={'column'} position='relative' top={'100px'}>
        <Box width={'100%'} marginTop='0px'>
          <Jackpot jackpotText={jackpotText} shouldPlayAnimations={shouldPlayAnimations}/>
          <Winner winnerText={winnerText} shouldPlayAnimations={shouldPlayAnimations}/>
          {!walletIsConnected && <ConnectWallet shouldPlayAnimations={shouldPlayAnimations}/>}
          {walletIsConnected && <Flex
            minWidth='220px'
            flexDirection={{ base: 'column', sm: 'row'}} gap='10px'>
            <Card>
              <OwnedKeys keyBalance={keyBalance} getKeysOwned={getKeysOwned}/>
              <Dividends dividend={dividend} getDividend={getDividend}/>
            </Card>
            <BuyKeys
              handleBuyKeys={handleBuyKeys}
              handleDecreaseKeys={handleDecreaseKeys}
              handleIncreaseKeys={handleIncreaseKeys}
              isBuyingKey={txInProgress}
              numberOfKeys={numberOfKeys}/>
          </Flex>}
          <Flex margin={'10px auto'} justifyContent='center' gap='10px'>
            <PrettyButton onClick={navigateToFAQPage}>FAQ</PrettyButton>
          </Flex>
        </Box>
      </Center>
      <AnimatedTitle shouldPlayAnimations={shouldPlayAnimations}/>
    </>
  }

  // Game over state
  if (override) {
    pageContent = <>
      <GameOver/>
      {!walletIsConnected && <ConnectWallet shouldPlayAnimations={shouldPlayAnimations} delay={1}/>}
      {walletIsConnected && <Flex minWidth='220px'
              flexDirection={{ base: 'column-reverse', sm: 'row'}}  gap='10px' marginBottom={'50px'}>
        <Card>
          <OwnedKeys keyBalance={keyBalance} getKeysOwned={getKeysOwned}/>
          <Dividends dividend={dividend} getDividend={getDividend}/>
        </Card>
        {userIsWinner && <YouWon/>}
      </Flex>}
    </>
  }

  return (
    <>
      <PurchaseModal closeModal={handleCloseModal} isOpen={modalIsOpen}>
        { txInProgress || true && <>
          <Text fontSize={'28px'}>Purchasing keys...</Text>
          <KeyBadge isSpinning={true}/>
          {txHash && <Link outline={'none !important'} href={`https://rinkeby.etherscan.io/tx/${txHash}`}>View transaction on Etherscan</Link>}
        </> }
      </PurchaseModal>
      <RobotBadge ref={robotRef}/>
      <Button onClick={handleOverrideSwitch} position={'absolute'} top={2} right={2}>[DEV] Game Over Toggle</Button>
      <Container position={'relative'} zIndex={1} maxW={'xl'} minHeight={'100vh'}>
        {pageContent}
      </Container>
      <BackgroundGrid top={'calc(100vh - 300px)'} left={0}/>
      <ReactTooltip
        border
        effect='solid'
        delayShow={100}
        delayHide={100}
        className={classes.tooltip}/>
      </>
  );
}

export default Dapp;
