import * as React from 'react';
import {
    Text,
} from '@chakra-ui/react';
import { PileOfKeys } from './library';


interface OwnedKeysProps {
    keyBalance: number;
    getKeysOwned: () => void;
}

const OwnedKeys: React.FC<OwnedKeysProps> = ({ keyBalance, getKeysOwned }: OwnedKeysProps) => {

    React.useEffect(() => {
        getKeysOwned();
    }, []);

    return <>
        <Text fontSize={'30px'}>Your Keys</Text>
        <Text fontSize='100px'>{keyBalance}</Text>
        <PileOfKeys number={keyBalance}/>
    </>
};

export default OwnedKeys;
