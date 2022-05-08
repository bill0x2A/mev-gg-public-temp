import * as React from 'react';
import {
    Flex,
    Center,
    Text,
} from '@chakra-ui/react';
import { OpacityAnimation, TranslateAnimation } from './library';
import { TimeRemaining } from './';
import chest from '../assets/images/GGchest.svg';
import Image from 'next/image';

interface JackpotProps {
    jackpotText: string;
    shouldPlayAnimations: boolean;
}

const Jackpot: React.FC<JackpotProps> = ({
    jackpotText,
    shouldPlayAnimations,
}: JackpotProps) => {

    return (
        <TranslateAnimation
            delay={5}
            start={'-100px'}
            end={'0px'}
            shouldPlay={shouldPlayAnimations}>
            <Flex
                flexDirection={['column', 'row']}
                width='100%'
                height='100%'
                alignItems='center'
                justifyContent='space-between'
                marginBottom='20px'>
                <OpacityAnimation
                    shouldPlay={shouldPlayAnimations}
                    delay={2}
                    duration={1.5}>
                    <Image width={'170px'} height={'170px'} src={chest}/>
                </OpacityAnimation>
                <Center flexDirection={'column'} flexGrow={1}>
                    <OpacityAnimation
                        shouldPlay={shouldPlayAnimations}
                        delay={4}>
                        <Text whiteSpace={'nowrap'} fontSize={'35px'}>{jackpotText}</Text>
                    </OpacityAnimation>
                    <OpacityAnimation
                        shouldPlay={shouldPlayAnimations}
                        delay={4}
                        duration={1.5}>
                        <TimeRemaining/>
                    </OpacityAnimation>
                </Center>
            </Flex>
        </TranslateAnimation>
    )
};

export default Jackpot;