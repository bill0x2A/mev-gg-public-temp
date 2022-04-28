import { useMemo } from 'react';
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import { useProvider, useContractRead } from 'wagmi';

export const useWinner = (): string => {
    const provider = useProvider();
    const [{ data: winningData, error: winningError, loading: winningLoading }] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    },
    'getWinner');

    const winnerText = useMemo(() => {
        if (winningLoading) return '...';
        if (winningError) console.log(winningError);
        if (winningError || !winningData) return 'Error...';
        return winningData as unknown as string; // yeahhhhh...
    }, [winningData, winningError, winningLoading]);

    return winnerText;
};
