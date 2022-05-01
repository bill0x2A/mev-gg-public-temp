import * as React from 'react';
import { useContractWrite } from 'wagmi'
import { Box, Flex, Text, keyframes, Button, Spinner } from '@chakra-ui/react';
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { useError } from '../hooks';
import { PileOfKeys } from './library';
import { Card } from '.';
import { ethers } from "ethers";
import arrow from '../assets/images/arrow.svg';
import Image from 'next/image';
import classes from './styles/BuyKeys.module.css';

export const BuyKeys: React.FC = () => {
    const [numberOfKeys, setNumberOfKeys] = React.useState(1);

    const [{ data, error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "purchaseKeys",);

    useError(error);

    const handleIncreaseKeys = () => {
        setNumberOfKeys((numberOfKeys) => numberOfKeys + 1);
    };

    const handleDecreaseKeys = () => {
        if(numberOfKeys <= 1) return;
        setNumberOfKeys((numberOfKeys) => numberOfKeys - 1);
    };

    const handleBuyKeys = () => {
        const etherToSend = String(numberOfKeys * 0.01);
        const weiToSend = ethers.utils.parseEther(etherToSend);
        console.log(numberOfKeys, weiToSend);
        write({
            args: [numberOfKeys],
            overrides: { value: weiToSend },
        });
    }

    return (
        <Card>
            <Text fontSize={'30px'}>Buy Keys</Text>
            <Flex alignItems={'center'} gap={'10px'}>
                <Box flex={1}>
                    <Button
                        className={classes.button}
                        onClick={handleIncreaseKeys}
                        marginBottom={'3px'}>
                        <Image height={'20px'} width={'20px'} src={arrow}/>
                    </Button>
                    <Button
                        className={classes.button}
                        disabled={numberOfKeys === 1}
                        onClick={handleDecreaseKeys}
                        marginTop={'3px'}>
                        <Image className={classes.downArrow} height={'20px'} width={'20px'} src={arrow}/>
                    </Button>
                </Box>
                <Text textAlign={'center'} flex={1} fontSize='100px'>{numberOfKeys}</Text>
            </Flex>
            <Flex alignItems={'center'} gap={'15px'}>
                <Text>{`${(0.05 * numberOfKeys).toFixed(2)} ETH`}</Text>
                <Button disabled={loading} onClick={handleBuyKeys}>{loading ? <Spinner/> : 'Buy'}</Button>
            </Flex>
            <PileOfKeys number={numberOfKeys}/>
        </Card>
    )
}