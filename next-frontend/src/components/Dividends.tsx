import * as React from 'react';
import { Flex, Text, Button, Box, Spinner } from '@chakra-ui/react';
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import {
    useContract,
    useContractWrite,
    useAccount,
    useProvider,
} from 'wagmi';
import { useError } from '../hooks';
import { ethers } from 'ethers';


const Dividends: React.FC = () => {
    const [{ data: accountData }] = useAccount();
    const provider = useProvider();
    const contract = useContract({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    });

    const [{ data, error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "withdrawDivvies",
    );

    useError(error);

    const [dividend, setDividend] = React.useState<string>('');

    const claimButtonDisabled = Number(dividend) === 0;

    const getDividend = async (): Promise<void> => {
        if (!accountData) return;
        try {
            const _dividend = await contract.getClaimableDivvies(accountData.address);
            const formattedDividend = Number(ethers.utils.formatEther(_dividend)).toFixed(5);
            setDividend(formattedDividend);
        } catch(e) {
            console.log(e);
        }
    };

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
