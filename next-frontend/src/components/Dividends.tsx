import * as React from 'react';
import { Flex, Text, Button, Box, Spinner } from '@chakra-ui/react';
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import {
    useContractWrite,
    useAccount,
} from 'wagmi';
import { useError, useWait } from '../hooks';

interface DividendsProps {
    dividend: number | string;
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

    const {loading: txLoading } = useWait(data?.hash, getDividend);
    useError(error);

    const claimButtonDisabled = Number(dividend) === 0;

    const dividendText = claimButtonDisabled ? '0' : Number(dividend).toFixed(5);

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
            <div data-tip={`${dividend} ETH`}><Text>{dividendText} ETH</Text></div>
            <Button onClick={claimDividend} disabled={claimButtonDisabled}>{loading || txLoading ? <Spinner width={'15px'} height={'15px'}/> : 'Claim'}</Button>
        </Flex>
    </Box>
};

export default Dividends;
