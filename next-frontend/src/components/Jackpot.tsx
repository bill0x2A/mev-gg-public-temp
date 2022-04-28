import * as React from 'react';
import { motion } from 'framer-motion';
import {
    Flex,
    Center
} from '@chakra-ui/react';
import { useJackpot } from '../hooks';
import { TimeRemaining } from './';
import chest from '../assets/images/GGchest.svg';
import Image from 'next/image';

const Jackpot: React.FC = () => {
    const jackpotText = useJackpot();

    return (
        <motion.div

            style={{
                position: 'relative',
                width: '100%',
            }}
            initial={{
                bottom: '-100px',
            }}
            animate={{
                bottom: '30px',
                transition: { delay: 5 },
            }}>
            <Flex width='100%' height={'100%'} alignItems='center' justifyContent={'space-between'} marginBottom='20px'>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2 }
                    }}
                    transition={{
                        duration: 1.5,
                    }}>
                    <Image width={'170px'} height={'170px'} src={chest}/>
                </motion.div>
                <Center flexDirection={'column'} flexGrow={1}>
                    <motion.h3
                        style={{ fontSize: '35px' }}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 4,
                            }
                        }}>
                        {jackpotText}
                    </motion.h3>
                    <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 4 }
                    }}
                    transition={{
                        duration: 1.5,
                    }}>
                        <TimeRemaining/>
                    </motion.div>
                </Center>
            </Flex>
        </motion.div>
    )
};

export default Jackpot;