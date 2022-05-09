import * as React from 'react';
import { ethers } from 'ethers';
import { keyPrice } from '../constants';
import { useContractWrite } from 'wagmi'
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json"
import { useError, useWait } from '../hooks';

interface UseBuyKeysParams {
    onSuccess: (data?: ethers.providers.TransactionResponse) => void;
    onError?: (error: Error) => any;
}

export const useBuyKeys = ({
    onSuccess,
    onError,
}: UseBuyKeysParams) => {
    const [numberOfKeys, setNumberOfKeys] = React.useState(1);

    const [{ data, error, loading: userIsConfirming }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "purchaseKeys",);

    const { loading: txPending } = useWait(data?.hash, onSuccess, onError);
    useError(error);

    React.useEffect(() => {
        if (!!error && onError) {
            onError(error);
        }
    }, [error])

    const handleIncreaseKeys = () => {
        setNumberOfKeys((numberOfKeys) => numberOfKeys + 1);
    };

    const handleDecreaseKeys = () => {
        if(numberOfKeys <= 1) return;
        setNumberOfKeys((numberOfKeys) => numberOfKeys - 1);
    };

    const handleBuyKeys = () => {
        const etherToSend = String(numberOfKeys * keyPrice);
        const weiToSend = ethers.utils.parseEther(etherToSend);
        write({
            args: [numberOfKeys],
            overrides: { value: weiToSend },
        });
    };

    return {
        handleBuyKeys,
        handleIncreaseKeys,
        handleDecreaseKeys,
        numberOfKeys,
        txHash: data?.hash,
        txInProgress: userIsConfirming || txPending,
    };
};
