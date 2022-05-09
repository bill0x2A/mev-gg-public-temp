import * as React from 'react';
import Image from 'next/image';
import { 
    Center,
    Box,
    keyframes,
} from '@chakra-ui/react';
import key from '../assets/images/key.svg';
import circle from '../assets/images/bigcircle.svg';

interface KeyBadgeProps {
    isSpinning?: boolean;
}

const KeyBadge: React.FC<KeyBadgeProps> = ({
    isSpinning,
}: KeyBadgeProps) => {
    const spin = keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }`;
    const spinAnimation = `${spin} infinite 1.2s linear`;

    return <>
        <Center
            padding={'120px'}
            width={'90px'}
            height={'90px'}>
            <Box animation={ isSpinning ? spinAnimation : undefined} position={'absolute'}><Image src={key} width='90px' height={'90px'}/></Box>
            <Box position={'absolute'}><Image src={circle} width='120px' height={'120px'}/></Box>
        </Center>
</>
};

export default KeyBadge;
