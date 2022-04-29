import * as React from 'react';
import { motion } from 'framer-motion';
import { Flex, Text, Box, Center } from '@chakra-ui/react';
import crown from '../assets/images/crown.svg';
import { useWinner } from '../hooks';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip'
import classes from './styles/Winner.module.css';

const Winner: React.FC = () => {
    const winner = useWinner();

    return <>
        <Center>
            <motion.h4
            style={{ fontSize: '20px' }}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transform: 'translateY(-10px)',
                transition: {
                    delay: 6,
                }
            }}>
                <Flex data-tip={'Current winner'} alignItems={'center'}>
                    <Box marginRight={'15px'}><Image src={crown}/></Box>
                    <Text cursor={'default'}>{winner}</Text>
                </Flex>
        </motion.h4>
        </Center>
        <ReactTooltip
            border
            effect='solid'
            delayShow={100}
            delayHide={100}
            className={classes.tooltip}
        />
    </>
};

export default Winner;