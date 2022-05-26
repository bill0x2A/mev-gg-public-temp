import * as React from 'react'
import {
    useAccount,
    useContract,
    useProvider,
    useNetwork,
  } from 'wagmi'
import { useReward } from 'react-rewards';
import {
  Box,
  Flex,
  Center,
  Container,
  Text,
  Link,
  useMediaQuery,
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
  ChainBanner,
} from '../components';
import { ethers } from 'ethers';
import ReactTooltip from 'react-tooltip'
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { defaultChain } from '../pages/_app';
import {
    useJackpot,
    useWinner,
    useBuyKeys,
    useLocalStorage,
} from '../hooks';
import BackgroundGrid from '../components/BackgroundGrid';
import { PrettyButton } from '../components/library';
import classes from './styles/index.module.css';

interface TxResponseWithLogs extends ethers.providers.TransactionResponse {
  logs: Array<{
    topics: Array<string>;
  }>
}

const Dapp: React.FC = () => {
  const userHasVisitedBefore = useLocalStorage();
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  const [isDummyThicc] = useMediaQuery('(min-width: 2700px)');
  const shouldShowBackgroundGrid = !(isMobile || isDummyThicc);
  const router = useRouter();
  const [{ data: accountData }] = useAccount();
  const [{ data: { chain } }] = useNetwork();
  const provider = useProvider();
  const contract = useContract({
    addressOrName: contractAddress.MevGG,
    contractInterface: MevGGArtifact.abi,
    signerOrProvider: provider,
  });
  const robotRef = React.useRef();
  const { reward } = useReward('rewardId', 'confetti');
  const { winnerText, read: getWinner } = useWinner();
  const { read: getJackpot, jackpotText } = useJackpot();
  const [keyBalance, setKeyBalance] = React.useState<number>(0);
  const [dividend, setDividend] = React.useState<number | string>('');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [successfulPurchaseData, setSuccessfulPurchaseData] = React.useState<TxResponseWithLogs>();
  const shouldPlayAnimations = false;

  // DEV, REMOVE FOR PROD
  const [override, setOverride] = React.useState(false);
  const firstPurchasedKeyId = successfulPurchaseData ? parseInt(successfulPurchaseData.logs[0].topics[3]) : '';
  const openSeaLink = `https://testnets.opensea.io/assets/rinkeby/${contractAddress.MevGG}/${firstPurchasedKeyId}`;

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
        const formattedDividend = Number(ethers.utils.formatEther(_dividend));
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
    setSuccessfulPurchaseData(undefined);
  };

  const navigateToFAQPage = (): void => {
    router.push('faq');
  };

  const refreshChainDataAfterPurchase = (): void => {
    // Refresh data at intervals to prevent API call overloads
    getDividend();
    setTimeout(getKeysOwned, 500);
    setTimeout(getWinner, 1000);
    setTimeout(getJackpot, 1500);
  };

  const handleKeyPurchaseSuccess = (data?: TxResponseWithLogs): void => {
    if (!data) return;
    setSuccessfulPurchaseData(data);
    refreshChainDataAfterPurchase();
    reward();
  };

  const handleKeyPurchaseError = (): void => {
    setModalIsOpen(false);
  };

  const incorrectChainSelected = !!chain && (defaultChain.id !== chain.id);

  const {
    handleBuyKeys,
    handleIncreaseKeys,
    handleDecreaseKeys,
    numberOfKeys,
    txInProgress,
    txHash,
  } = useBuyKeys({
    onSuccess: handleKeyPurchaseSuccess as any,
    onError: handleKeyPurchaseError,
  });

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
    console.log(txInProgress)
    if (txInProgress) {
      handleOpenModal();
    }
  }, [txInProgress]);

  let pageContent;

  // Wallet connected state, game in progress
  if(!override) {
    pageContent = <>
      <Center
        paddingBottom={'50px'}
        minHeight={incorrectChainSelected ? 'calc(100vh - 130px)' : 'calc(100vh - 100px)'}
        flexDirection={'column'}
        position='relative'
        top={'100px'}>
        <Box width={'100%'} marginTop='0px'>
          <Jackpot jackpotText={jackpotText} shouldPlayAnimations={shouldPlayAnimations}/>
          <Winner winnerText={winnerText} shouldPlayAnimations={shouldPlayAnimations}/>
          {!walletIsConnected && <ConnectWallet shouldPlayAnimations={shouldPlayAnimations}/>}
          {walletIsConnected && <Flex
            minWidth='220px'
            flexDirection={{ base: 'column', sm: 'row'}}
            gap='10px'>
            <Card>
              <OwnedKeys
                keyBalance={keyBalance}
                getKeysOwned={getKeysOwned}/>
              <Dividends
                incorrectChainSelected={incorrectChainSelected}
                dividend={dividend}
                getDividend={getDividend}/>
            </Card>
            <BuyKeys
              handleBuyKeys={handleBuyKeys}
              handleDecreaseKeys={handleDecreaseKeys}
              handleIncreaseKeys={handleIncreaseKeys}
              isBuyingKey={txInProgress}
              numberOfKeys={numberOfKeys}
              incorrectChainSelected={incorrectChainSelected}/>
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
      {!walletIsConnected && <ConnectWallet
        shouldPlayAnimations={shouldPlayAnimations}
        delay={1}/>}
      {walletIsConnected && <Flex
        minWidth='220px'
        flexDirection={{ base: 'column-reverse', sm: 'row'}}
        gap='10px'
        marginBottom={'50px'}>
        <Card>
          <OwnedKeys keyBalance={keyBalance} getKeysOwned={getKeysOwned}/>
          <Dividends incorrectChainSelected={incorrectChainSelected} dividend={dividend} getDividend={getDividend}/>
        </Card>
        {userIsWinner && <YouWon/>}
      </Flex>}
    </>
  }

  return (
    <div>
      <ChainBanner incorrectChain={incorrectChainSelected}/>
      <Box paddingTop={incorrectChainSelected ? '30px' : '0px'}>
        <PurchaseModal
          closeModal={handleCloseModal} isOpen={modalIsOpen}>
          <span id='rewardId'/>
          {txInProgress && <>
            <Text fontSize={'28px'}>{`Purchasing ${numberOfKeys > 1 ? `${numberOfKeys} keys` : 'key'}...`}</Text>
            <KeyBadge isSpinning={true}/>
            {txHash && <Link outline={'none !important'} href={`https://rinkeby.etherscan.io/tx/${txHash}`}>View transaction on Etherscan</Link>}
          </>}
          {successfulPurchaseData && <>
            <Text fontSize={'28px'}>{`Purchased ${numberOfKeys > 1 ? `${numberOfKeys} keys` : 'key'}!`}</Text>
            <KeyBadge/>
            <Flex gap='10px' flexDirection='column' justifyContent={'space-around'}>
              <PrettyButton onClick={() => {window.open(openSeaLink)}}>View on Opensea</PrettyButton>
              <PrettyButton onClick={handleCloseModal}>Close</PrettyButton>
            </Flex>
          </>}
          {!successfulPurchaseData && !txInProgress && <>
            <Text fontSize={'28px'}>{'Something went wrong...'}</Text>
            <KeyBadge isSpinning={false}/>
            <Flex gap='10px' flexDirection='column' justifyContent={'space-around'}>
              {txHash && <Link outline={'none !important'} href={`https://rinkeby.etherscan.io/tx/${txHash}`}>View transaction on Etherscan</Link>}
              <PrettyButton onClick={handleCloseModal}>Close</PrettyButton>
            </Flex>
          </>}
        </PurchaseModal>
        <RobotBadge incorrectChain={incorrectChainSelected} ref={robotRef}/>
        {/* <Button onClick={handleOverrideSwitch} position={'absolute'} top={2} right={2}>[DEV] Game Over Toggle</Button> */}
        <Container
          position={'relative'}
          zIndex={1}
          maxW={'xl'}
          height={incorrectChainSelected ? 'calc(100vh - 30px)' : '100vh'}>
          {pageContent}
        </Container>
        {shouldShowBackgroundGrid && <BackgroundGrid top={'calc(100vh - 300px)'} left={0}/>}
        <ReactTooltip
          border
          effect='solid'
          delayShow={100}
          delayHide={100}
          className={classes.tooltip}/>
      </Box>
    </div>
  );
}

export default Dapp;
