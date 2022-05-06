import * as React from 'react';
import { Flex, Text, Box, Center } from '@chakra-ui/react';
import crown from '../assets/images/crown.svg';
import { OpacityAnimation } from './library';
import Image from 'next/image';

interface WinnerProps {
    winnerText: string;
    shouldPlayAnimations: boolean;
}

const Winner: React.FC<WinnerProps> = ({
    winnerText,
    shouldPlayAnimations,
}: WinnerProps) => <Center>
    <OpacityAnimation
        shouldPlay={shouldPlayAnimations}
        delay={6}
        transform={'translateY(-10px)'}>
        <Flex data-tip={'Current winner'} alignItems={'center'}>
            <Box marginRight={'15px'}><Image src={crown} alt={'winner crown'}/></Box>
            <Text fontSize={'20px'} cursor={'default'}>{winnerText}</Text>
        </Flex>
    </OpacityAnimation>
</Center>;

export default Winner;
