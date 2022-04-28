import * as React from 'react'
import { useConnect, useAccount } from 'wagmi'
import Image from 'next/image';
import metamask from '../assets/images/metamask.png';
import coinbase from '../assets/images/coinbase.jpg';
import walletconnect from '../assets/images/walletconnect.svg';
import { CornerDecorations } from './library';
import { Box, Button, Flex } from '@chakra-ui/react';
import classes from './styles/Connect.module.css';
import { Connector } from 'wagmi';

import { useIsMounted } from '../hooks'

interface ConnectProps {
  connectors: Connector<any, any>[];
  loading?: boolean;
}

export const Connect: React.FC<ConnectProps> = ({
  connectors,
  loading,
}: ConnectProps) => {
  const isMounted = useIsMounted();
  const [ {}, connect ] = useConnect();

  const getConnectorImageSrc = (connector: Connector) => {
    switch(connector.name){
      case 'MetaMask':
        return <Image width={'30px'} height={'30px'} src={metamask}/>;
      case 'WalletConnect':
        return <Image width={'30px'} height={'30px'} src={walletconnect}/>;
      case 'Coinbase Wallet':
        return <Box borderRadius={'5px'} overflow='hidden' height={'30px'} width={'30px'}>
          <Image width={'30px'} height={'30px'} src={coinbase}/>
        </Box>;
      default:
        return '';
    }
  }

  return (
      <Flex justifyContent={'space-between'}>
        {connectors.map((connector) => {
           const image = getConnectorImageSrc(connector);
           return <Button
              borderRadius={'none'}
              className={classes.connect}
              background={'#1A202C'}
              fontSize={'18px'}
              flexDirection={'column'}
              gap={'10px'}
              height={'100px'}
              flex={1}
              disabled={isMounted && !connector.ready}
              key={connector.name}
              marginLeft={'5px'}
              onClick={() => connect(connector)}
            >
              {image}
              {connector.id === 'injected' ? (isMounted ? connector.name : connector.id) : connector.name}
              {isMounted && !connector.ready && ' (unsupported)'}
              {loading && connector.name === connector?.name && '…'}
              <CornerDecorations/>
            </Button>
        })}
      </Flex>
  )
}
