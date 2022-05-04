import * as React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import clock from '../assets/images/clock.svg';
import { useTimeLeft } from '../hooks';


export const TimeRemaining: React.FC = () => {
    const [timeLeftText] = useTimeLeft();
    return (
        <Box>
            <Flex
                marginTop={'10px'} 
                width='100%'
                alignItems={'center'}
                justifyContent='space-between'>
                <Box height={'30px'} marginRight='10px'>
                    <Image height={'30px'} width={'30px'} src={clock}/>
                </Box>
                <Text fontSize={'30px'}>{timeLeftText}</Text>
            </Flex>
        </Box>
    )
};
