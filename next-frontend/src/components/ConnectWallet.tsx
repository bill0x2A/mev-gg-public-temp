import * as React from 'react';
import { motion } from 'framer-motion';
import { useConnect, useAccount } from 'wagmi'
import { CornerDecorations, ShinyButton } from './library';
import { useError } from '../hooks'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
  } from '@chakra-ui/react';
import {
    Connect,
} from './index';
import classes from './styles/ConnectWallet.module.css';

interface ConnectWalletProps {
    delay?: number;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
    delay = 6,
}: ConnectWalletProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [
        {
          data: { connectors },
          error,
          loading,
        }
      ] = useConnect()
      const [{ data: accountData }] = useAccount()
      useError(error);


    React.useEffect(() => {
        if(accountData?.address) {
            onClose();
        } 
    }, [accountData?.address]);

    return <>
        <motion.div
            className={classes.connectWalletContainer}
            style={{background: '#1A202C', position: 'relative'}}
            initial={{
                width: 0,
                border: '0px solid white',
            }}
            animate={{
                width: '100%',
                border: '3px solid white',
                transition: { delay: delay, duration: 0.8 },
            }}>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: { delay: delay + 0.8, duration: 0.1}
                }}>
                <CornerDecorations/>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    transition: { delay: delay + 1 },
                }}
                >
                <ShinyButton
                    styles={{ container: classes.button }}
                    text={'Connect Wallet'}
                    onClick={onOpen}/>
            </motion.div>
        </motion.div>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay/>
        <ModalContent padding='40px 10px' borderRadius={'none'} border='3px solid white'>
            <Connect
                loading={loading}
                connectors={connectors}/>
        </ModalContent>
      </Modal>
    </>
};

export default ConnectWallet;
