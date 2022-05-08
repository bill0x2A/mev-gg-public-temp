import * as React from 'react';
import {
    Text,
    Center,
    Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import leftArrow from '../../assets/images/left-arrow.svg';
import { CornerDecorations } from './';

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, title }: LayoutProps) => {
    const router = useRouter();

    const handleBackButtonClicked = () => {
        router.push('/');
    };

    return <>
        <Center position={'relative'} flexDirection={'column'}>
            <Box
                onClick={handleBackButtonClicked}
                transition='all 200ms'
                cursor='pointer'
                position={'absolute'}
                top='10px'
                left='10px'
                _hover={{
                    left: '5px'
                }}>
                <Image src={leftArrow} width={'40px'} height={'40px'}/>    
            </Box>
            <Text fontSize={'50px'}>MEV.GG</Text>
            <Box
                width={{ base: 'calc(100vw - 15px)'}}
                padding='32px'
                border={'3px solid white'}
                maxWidth='52ch'
                marginTop='100px' position='relative'>
                <CornerDecorations/>
                <Text marginBottom={'20px'} borderBottom={'3px solid white'} fontSize={'40px'}>{title}</Text>
                {children}
            </Box>
        </Center>
    </>
};

export default Layout;
