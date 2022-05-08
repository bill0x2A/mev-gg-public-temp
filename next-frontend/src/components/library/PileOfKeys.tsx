import * as React from 'react';
import {
    Box,
    Center,
    keyframes,
} from '@chakra-ui/react';
import key from '../../assets/images/key.svg'
import Image from 'next/image';
import sadface from '../../assets/images/sadface.svg';

interface PileOfKeysProps {
    number: number;
}

interface KeyProps {
    number: number;
    r?: number;
    ty?: number;
    tx?: number;
    s?: number;
}

const float = keyframes`
    from { transform: translateY(0px); }
    to { transform: translateY(-3px); }`

export const Key: React.FC<KeyProps> = ({
    number,
    r = 0,
    ty = 0,
    tx = 0,
    s = 100,
}: KeyProps) => <Box
    position={'absolute'}
    transform={`translateY(${ty}px) translateX(${tx + 50}px) rotate(${r}deg)`}>
    <Box animation={`${float} infinite alternate 0.8s ease-in-out ${number*100}ms`}>
        <Image src={key} width={`${s}px`} height={`${s}px`}/>
    </Box>
</Box>


export const PileOfKeys: React.FC<PileOfKeysProps> = ({
    number,
}: PileOfKeysProps) => {

    const firstKey = <Key number={1}/>
    const secondKey = <Key r={-30} tx={-40} number={2}/>
    const thirdKey = <Key r={30} tx={40} number={3}/>

    const spin = keyframes`
    from { transform: rotate(-5deg); }
    to { transform: rotate(5deg); }`


    const spinAnimation = `${spin} infinite 1.5s ease-in-out alternate`;


    const getKeyElements = () => {
        switch(number) {
            case 0:
                return <Center animation={spinAnimation}><Image height={'70px'} width={'70px'} src={sadface}/></Center>
            case 1:
                return <>{firstKey}</>
            case 2:
                return <>{firstKey}{secondKey}</>
            case 3:
            default:
                return <>{firstKey}{secondKey}{thirdKey}</>
        }
    }

    const keyElements = React.useMemo(() => {
        return getKeyElements();
    }, [number])

    return <Center width={'100%'} border='1px solid purple'>
        <Box
            width={'200px'}
            border='1px solid red'
            height='100px'
            position='relative'>
            {keyElements}
        </Box>
    </Center>

};
