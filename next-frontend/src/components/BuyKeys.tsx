import * as React from 'react';
import { keyPrice } from '../constants';
import { Box, Flex, Text, Button, Spinner } from '@chakra-ui/react';
import { PileOfKeys } from './library';
import { Card } from '.';
import arrow from '../assets/images/arrow.svg';
import Image from 'next/image';
import classes from './styles/BuyKeys.module.css';

interface BuyKeysProps {
    handleBuyKeys: () => void;
    handleIncreaseKeys: () => void;
    handleDecreaseKeys: () => void;
    isBuyingKey?: boolean;
    numberOfKeys: number;
}

export const BuyKeys: React.FC<BuyKeysProps> = ({
    handleBuyKeys,
    handleIncreaseKeys,
    handleDecreaseKeys,
    isBuyingKey,
    numberOfKeys,
}: BuyKeysProps) => {
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
                <Text>{`${(keyPrice * numberOfKeys).toFixed(2)} ETH`}</Text>
                <Button disabled={isBuyingKey} onClick={handleBuyKeys}>{isBuyingKey ? <Spinner/> : 'Buy'}</Button>
            </Flex>
            <PileOfKeys number={numberOfKeys}/>
        </Card>
    )
}