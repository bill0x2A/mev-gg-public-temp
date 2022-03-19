import * as React from 'react';
import {
    Flex,
} from '@chakra-ui/react';
import {
    Balance,
    Fomo,
    FomoBuyKey,
    Blocknumber,
  } from '../components'

export const Card: React.FC = () =>{
    return <Flex
        borderRadius={'10px'}
        border='3px solid white'
        flexDirection='column'
        alignItems={'center'}
        gap={'15px'}
        background='#D51D23'
        padding='30px'>
        <FomoBuyKey/>
        <Balance/>
        <Blocknumber/>
        <Fomo/>
    </Flex>
};
