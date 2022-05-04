import { useContractRead, useProvider } from 'wagmi';
import * as React from 'react';
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";

export const useWhoWon = () => {
    const provider = useProvider();
    const [{ data: whoWon, error, loading }] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    },
        "whoWon",
        {
            watch: false,
    });

    const [gameOver, setGameOver] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        if (!!whoWon) {
            setGameOver(true);
        }
    }, [whoWon]);

    return {gameOver, winner: whoWon};
};
