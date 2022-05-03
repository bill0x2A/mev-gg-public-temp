import * as React from 'react';
import {
    Text,
    Center,
    Box,
    Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CornerDecorations, PrettyButton } from '../components/library';

const FAQ = () => {
    const router = useRouter();

    const navigateToSampleBotCode = () => {
        router.push('/');
    }

    return <Center flexDirection={'column'}>
        <Text fontSize={'50px'}>MEV.GG</Text>
        <Box
            padding='32px'
            border={'3px solid white'}
            maxWidth='52ch'
            marginTop='100px' position='relative'>
            <CornerDecorations/>
            <Text marginBottom={'20px'} borderBottom={'3px solid white'} fontSize={'40px'}>FAQs</Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente aliquid placeat saepe perspiciatis nihil sunt voluptatum aut eius temporibus laudantium a laboriosam, at veritatis cum dolore esse et incidunt porro aperiam non adipisci veniam! Praesentium expedita velit maiores sed dolor! Quis corrupti perspiciatis tenetur veritatis impedit dolorem omnis est nulla, velit quia quae voluptatum in sint? Repellendus impedit voluptas, vel omnis officia dolor laborum enim, quas, sit aliquam magnam aperiam eum hic reiciendis accusamus voluptatem ducimus saepe asperiores! Blanditiis voluptatem pariatur sed deserunt, consectetur accusantium explicabo sit unde itaque voluptate, quos ullam soluta voluptatibus hic suscipit et ad architecto?</p>
            <Flex justifyContent={'center'} marginTop='30px'>
                <PrettyButton onClick={navigateToSampleBotCode}>View sample bot code</PrettyButton>
            </Flex>
        </Box>
        
    </Center>
};

export default FAQ;
