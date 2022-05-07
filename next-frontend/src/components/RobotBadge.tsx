import * as React from 'react';
import Image from 'next/image';
import { 
    Center,
    Box,
    Text,
    keyframes,
    forwardRef,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import robot from '../assets/images/robot.svg';
import circle from '../assets/images/bigcircle.svg';

const RobotBadge = forwardRef(({}, ref) => {
    const router = useRouter();
    const spin = keyframes`
        from { transform: rotate(-7deg); }
        to { transform: rotate(7deg); }`;
    const fade = keyframes`
        from { opacity: 0; }
        to { opacity: 1; }`;
    const spinAnimation = `${spin} infinite 1.1s ease-in-out alternate`;
    const fadeAnimation = `${fade} infinite 0.5s ease-in-out alternate`;
    const handleClickRobot = () => {
        router.push('sample-mev-bot-code');
    };

    return <>
        <Center
            ref={ref}
            zIndex={10}
            data-tip='View sample MEV bot code'
            position='absolute'
            top={'10px'}
            left={'10px'}
            borderRadius={'100%'}
            onClick={handleClickRobot}
            transition='all 200ms'
            _hover={{
                background: 'rgba(255,255,255,0.2)'
            }}
            cursor={'pointer'}
            animation={spinAnimation}
            width={'89px'}
            height={'89px'}>
            <Text fontSize={'27px'} position={'absolute'} top={'0px'} animation={fadeAnimation}>!</Text>
            <Box position={'absolute'} top='calc(50% - 30px)'><Image src={robot} width='60px' height={'60px'}/></Box>
            <Box position={'absolute'}top='calc(50% - 45px)'><Image src={circle} width='90px' height={'90px'}/></Box>
        </Center>
    </>
});

export default RobotBadge;
