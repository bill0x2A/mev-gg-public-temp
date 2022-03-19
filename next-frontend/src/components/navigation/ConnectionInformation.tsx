import * as React from 'react';
import {
    Flex,
    Button,
} from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { NetworkSwitcher } from '../NetworkSwitcher';

const ConnectionInformation: React.FC = () => {

    const [{ data: accountData }, disconnect] = useAccount();
    
    return <>
        <NetworkSwitcher/>
        <Flex justifyContent={'flex-end'} px='10px'>
            <Button width='100%' bg='red' onClick={disconnect}>
                Disconnect from {accountData?.connector?.name}
            </Button>
      </Flex>
    </>
}

export default ConnectionInformation;
