import * as React from 'react';
import { ethers } from 'ethers';
import { useContractWrite } from 'wagmi'
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json"
import { useError, useWait } from '../hooks';

interface UseBuyKeysParams {
    onSuccess: () => void;
    onError?: (error: Error) => any;
}

export const useBuyKeys = ({
    onSuccess,
    onError,
}: UseBuyKeysParams) => {
    const [numberOfKeys, setNumberOfKeys] = React.useState(1);

    const [{ data, error, loading }, write] = useContractWrite({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
    },
        "purchaseKeys",);

    useWait(data?.hash, onSuccess, onError);
    useError(error);

    const handleIncreaseKeys = () => {
        setNumberOfKeys((numberOfKeys) => numberOfKeys + 1);
    };

    const handleDecreaseKeys = () => {
        if(numberOfKeys <= 1) return;
        setNumberOfKeys((numberOfKeys) => numberOfKeys - 1);
    };

    const handleBuyKeys = () => {
        const etherToSend = String(numberOfKeys * 0.05);
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
        txInProgress: loading,
    };
};
