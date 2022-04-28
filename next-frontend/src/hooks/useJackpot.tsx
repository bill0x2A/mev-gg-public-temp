import { useMemo } from 'react';
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { useProvider, useContractRead } from 'wagmi';
import { formatEther } from 'ethers/lib/utils';

export const useJackpot = (): string => {
    const provider = useProvider();
    const [{ data: jackpotData, error: jackpotError, loading: jackpotLoading }] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    },
    'divPool');

    const jackpotText = useMemo(() => {
        if (jackpotLoading && !jackpotData) return 'Fetching jackpot...';
        if (jackpotError) console.log(jackpotError);
        if (jackpotError || !jackpotData) return 'Error fetching jackpot'
        const jackpot = Number(formatEther(jackpotData)).toFixed(3);
        return `Jackpot: ${jackpot} ETH`;
    }, [jackpotLoading, jackpotError, jackpotData]);

    return jackpotText;
}