import * as React from 'react';
import { motion } from 'framer-motion';
import { useConnect, useAccount } from 'wagmi'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    useDisclosure,
  } from '@chakra-ui/react';
import {
    CornerDecorations,
    ShinyButton,
    OpacityAnimation,
    TranslateAnimation,
    GrowAnimation,
} from './library';
import { useError } from '../hooks'
import { Connect } from '.';
import classes from './styles/ConnectWallet.module.css';

interface ConnectWalletProps {
    shouldPlayAnimations: boolean;
    delay?: number;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
    shouldPlayAnimations,
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
        <GrowAnimation
            className={classes.connectWalletContainer}
            style={{background: '#1A202C', position: 'relative'}}
            shouldPlay={shouldPlayAnimations}
            delay={delay}
            duration={0.8}>
            <OpacityAnimation
                delay={delay + 1}
                shouldPlay={shouldPlayAnimations}>
                <ShinyButton
                    styles={{ container: classes.button }}
                    text={'Connect Wallet'}
                    onClick={onOpen}/>
            </OpacityAnimation>
        </GrowAnimation>

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
