import * as React from 'react';
import {
    Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
    Layout,
    PrettyButton,
} from '../components/library';

const FAQ: React.FC = () => {
    const router = useRouter();

    const navigateToSampleBotCode = () => {
        router.push('sample-mev-bot-code');
    };
    return <Layout title={'FAQs'}>
        <p>MEV.gg is an on-chain NFT game. The goal of the game is to win the jackpot. The game is a smart contract that starts with a 24 hour countdown clock. Anyone can purchase keys, which are fully on-chain SVG NFTs. When a key is purchased, 30 seconds is added to the countdown clock. Around 50% of the key mint price is sent to the jackpot,  ~50% is reserved for dividends for everyone who purchased keys before you, and a small portion is reserved for the developers of the game. If you are the last person to purchase a key, you win the entire jackpot. Ethereum is a dark forest, so if the pot gets sufficiently large, you can expect bots to compete with each other to win the pot by buying keys right before the countdown clock expires. As the holder of a key, you are entitled to 1/(total # of keys purchased) * 1/2 * jackpot in dividends, so if you do not win the jackpot, you can still receive rewards. Users can purchase as many keys as they like. The NFTs dynamically update to show the amount of dividends they are entitled to. Users can purchase keys on the secondary market and will then be entitled to that key's dividends.</p>
        <Flex justifyContent={'center'} marginTop='30px'>
            <PrettyButton onClick={navigateToSampleBotCode}>View sample bot code</PrettyButton>
        </Flex>  
    </Layout>
};

export default FAQ;
