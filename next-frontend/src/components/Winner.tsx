import * as React from 'react';
import { Flex, Text, Center } from '@chakra-ui/react';
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
        <Flex
            data-tip={'Current winner'}
            alignItems={'center'}
            flexDirection={{
                base: 'column',
                sm: 'row',
            }}>
            <Flex marginRight={'15px'}><Image src={crown} alt={'winner crown'}/></Flex>
            <Text fontSize={{ base: '4.5vw' ,sm: '20px'}} cursor={'default'}>{winnerText}</Text>
        </Flex>
    </OpacityAnimation>
</Center>;

export default Winner;
