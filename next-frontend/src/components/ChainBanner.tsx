import * as React from 'react';
import { useNetwork } from 'wagmi';
import { Flex, Text, Button } from '@chakra-ui/react';
import { defaultChain } from '../pages/_app';

interface ChainBanner {
    incorrectChain: boolean;
}

const ChainBanner: React.FC<ChainBanner> = ({ incorrectChain }: ChainBanner) => {
    const [{ data: { chain } }] = useNetwork();

    const connectToDefaultChain = () => {
        window.ethereum?.request({
            method: "wallet_addEthereumChain",
            params: [{
                chainId: "0x4",
                rpcUrls: ["https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
                chainName: "Rinkeby Testnet",
                nativeCurrency: {
                    name: "ETH",
                    symbol: "ETH",
                    decimals: 18
                },
                blockExplorerUrls: ["https://rinkeby.etherscan.io/"]
            }]
        });
    };

    console.log(incorrectChain, chain);
    if (!incorrectChain) {
        return null;
    }

    return <Flex
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        position={'absolute'}
        width={'100vw'}
        maxWidth={'100%'}
        color={'white'}
        height={'30px'}
        top={'0px'}
        borderTop={'2px solid white'}
        borderBottom={'2px solid white'}>
        <Text><strong>Network | </strong>{`You are connected to ${chain?.name}, please `}</Text>
        <Button onClick={connectToDefaultChain}>{`switch to ${defaultChain.name}`}</Button>
    </Flex>
}

export default ChainBanner;
