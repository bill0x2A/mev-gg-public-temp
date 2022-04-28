import * as React from 'react';
import classes from './styles/OwnedKeys.module.css';
import {
    Text,
    Box,
} from '@chakra-ui/react';
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { Card } from './Card';
import { useAccount, useContract, useProvider } from 'wagmi';
import { PileOfKeys } from './library';
import Dividends from './Dividends';

const OwnedKeys: React.FC = () => {
    const [{ data: accountData }] = useAccount();
    const provider = useProvider();
    const contract = useContract({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    });

    const [keyBalance, setKeyBalance] = React.useState<number>(0);

    const getKeysOwned = async (): Promise<void> => {
        if (!accountData) return;
        try {
            const divTracker = await contract.divTracker(accountData.address);
            const _keyBalance = divTracker._keyBalance.toNumber();
            setKeyBalance(_keyBalance);
        } catch(e) {
            console.log(e);
        }
    }

    React.useEffect(() => {
        if (!accountData) return;
        getKeysOwned();
    }, [accountData]);

    return <Card>
        <Text fontSize={'30px'}>Your Keys</Text>
        <Text fontSize='100px'>{keyBalance}</Text>
        <PileOfKeys number={keyBalance}/>
        <Dividends/>
    </Card>
};

export default OwnedKeys;
