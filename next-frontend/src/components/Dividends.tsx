import * as React from 'react';
import { Flex, Text, Button, Box, Spinner } from '@chakra-ui/react';
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import {
    useContract,
    useContractWrite,
    useAccount,
    useWaitForTransaction,
} from 'wagmi';
import { useError, useWait } from '../hooks';
import { ethers } from 'ethers';

interface DividendsProps {
    dividend: string;
    getDividend: () => void;
}

const Dividends: React.FC<DividendsProps> = ({
    dividend,
    getDividend,
}: DividendsProps) => {
    const [{ data: accountData }] = useAccount();

    const [{ data, error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "withdrawDivvies",
    );

    useWait(data?.hash, getDividend);
    useError(error);

    const claimButtonDisabled = Number(dividend) === 0;



    const claimDividend = async (): Promise<void> => {
        if (!accountData) return;
        try {
            write();
        } catch(e) {
            console.log(e);
        }
    };

    React.useEffect(() => {
        if (!accountData) return;
        getDividend();
    }, [accountData]);
    return <Box>
        <Text marginBottom={'10px'} lineHeight={'22px'} borderBottom={'2px solid white'}>Claimable Dividends</Text>
        <Flex alignItems={'center'} justifyContent={'space-around'}>
            <Text>{dividend} ETH</Text>
            <Button onClick={claimDividend} disabled={claimButtonDisabled}>{loading ? <Spinner size={'15px'}/> : 'Claim'}</Button>
        </Flex>
    </Box>
};

export default Dividends;
