import * as React from 'react';
import {
    useContractWrite,
} from 'wagmi';
import {
    Button,
    Center,
    Spinner,
} from '@chakra-ui/react';
import {
    Card,
} from './';
import { Crown } from './GameOver';
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { useError } from '../hooks';

const YouWon = () => {
    const [{ error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "jackpotPayout",
    );

    useError(error);

    const claimWinningsHandler = () => {
        try {
            write();
        } catch(e) {
            console.log(e);
        }
    };

    return <Card>
        <Center flexDirection={'column'} height='100%' gap={'20px'}>
            Holy sh*t you won!
            <Crown size={100}/>
            <Button disabled={loading} onClick={claimWinningsHandler}>
                { loading ? <Spinner/> : 'Claim Winnings'}
            </Button>
        </Center>
    </Card>
};

export default YouWon;
