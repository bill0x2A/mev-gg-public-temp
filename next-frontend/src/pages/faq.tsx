import * as React from 'react';
import {
    Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
    Layout,
    PrettyButton,
} from '../components/library';

const FAQ = () => {
    const router = useRouter();

    const navigateToSampleBotCode = () => {
        router.push('sample-mev-bot-code');
    };
    return <Layout title={'FAQs'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente aliquid placeat saepe perspiciatis nihil sunt voluptatum aut eius temporibus laudantium a laboriosam, at veritatis cum dolore esse et incidunt porro aperiam non adipisci veniam! Praesentium expedita velit maiores sed dolor! Quis corrupti perspiciatis tenetur veritatis impedit dolorem omnis est nulla, velit quia quae voluptatum in sint? Repellendus impedit voluptas, vel omnis officia dolor laborum enim, quas, sit aliquam magnam aperiam eum hic reiciendis accusamus voluptatem ducimus saepe asperiores! Blanditiis voluptatem pariatur sed deserunt, consectetur accusantium explicabo sit unde itaque voluptate, quos ullam soluta voluptatibus hic suscipit et ad architecto?</p>
        <Flex justifyContent={'center'} marginTop='30px'>
            <PrettyButton onClick={navigateToSampleBotCode}>View sample bot code</PrettyButton>
        </Flex>  
    </Layout>
};

export default FAQ;
