import * as React from 'react';
import { Box, Text, Center, keyframes } from '@chakra-ui/react';
import Image from 'next/image';
import crown from '../assets/images/crown.svg';
import { useWinner } from '../hooks';

interface CrownProps {
    size: number;
}

const float = keyframes`
    from { transform: translateY(0px); }
    to { transform: translateY(10px); }`

export const Crown = ({ size }: CrownProps) => {
    return <Image src={crown} height={`${size}px`} width={`${size}px`}/>
};

const GameOver: React.FC = () => {
    const winner = useWinner();
    return <Center flexDirection={'column'} paddingTop={'100px'} marginBottom={'40px'}>
        <Text whiteSpace={'nowrap'} marginBottom={'50px'} fontSize={'60px'}>GAME OVER!</Text>
        <Box animation={`${float} infinite alternate 0.8s ease-in-out ${100}ms`}>
            <Crown size={50}/>
        </Box>
        <Text lineHeight={1} fontSize={'5vw'}>{winner}</Text>
    </Center>
};

export default GameOver;
