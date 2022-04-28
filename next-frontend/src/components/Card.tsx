import * as React from 'react';
import { CornerDecorations } from './library';
import {
    Flex,
} from '@chakra-ui/react';

interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    children,
}: CardProps) =>{
    return <Flex
        zIndex={9}
        position={'relative'}
        background={'#1A202C'}
        flex={1}
        border='3px solid white'
        flexDirection='column'
        alignItems={'center'}
        gap={'15px'}
        padding='30px'>
        {children}
        <CornerDecorations/>
    </Flex>
};
