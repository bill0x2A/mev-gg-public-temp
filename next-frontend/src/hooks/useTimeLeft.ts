import { useContractRead, useProvider, useContractEvent } from 'wagmi';
import * as React from 'react';
import contractAddress from "../contracts/mevgg-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";

type UseTimeLeftReturnType = [string, (null | boolean)];

export const useTimeLeft = (): UseTimeLeftReturnType => {
    const provider = useProvider();
    const [{
        data: gameHasStarted,
    }, readGameHasStarted] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    },
        "gameHasStarted",
        {
            watch: false,
    });

    const [{ data: timeLeft, error, loading }, readTimeLeft] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    },
        "getTimeLeft",
        {
            watch: false,
    });

    // When a keys are purchased grab the new timeLeft from the contract
    useContractEvent({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,  
        },
        'keysPurchased',
        () => {
            readGameHasStarted();
            readTimeLeft();
        },
    )

    const [gameOver, setGameOver] = React.useState<boolean | null>(null);
    const [jsTimeLeft, setJsTimeLeft] = React.useState<number>();

    const convertSecondsToDaysHoursMinutes = (seconds: number): string => {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds - (days * 86400)) / 3600);
        const minutes = Math.floor((seconds - (hours * 3600) - (days * 86400)) / 60);
        const secs = seconds - (hours * 3600) - (minutes * 60) - (days * 86400);
        return (days !== 0 ? `${days}D ` : '') + `${hours}H ${minutes}M ${secs}S`;
    }

    const countdownTimeByOneSecond = (): void => {
        setJsTimeLeft((s) => {
            if (!s) return;
            if (s > 1) {
                return s - 1;
            } else {
                return s;
            }
        });
    }

    React.useEffect(() => {
        setJsTimeLeft(timeLeft as unknown as number);
        console.log(gameHasStarted);
        if (gameHasStarted) {
            const countdown = setInterval(countdownTimeByOneSecond, 1000);
            return () => clearInterval(countdown);
        }
    }, [timeLeft]);

    const timeLeftText = React.useMemo<string>(() => {
        if (loading) return '...';
        if (error || !jsTimeLeft ) return 'Error';
        return convertSecondsToDaysHoursMinutes(jsTimeLeft);
    }, [loading, error, jsTimeLeft]);

    React.useEffect(() => {
        if (timeLeft && Number(timeLeft) === 0) setGameOver(true);
        if (timeLeft && Number(timeLeft) > 0) setGameOver(false);
    }, [timeLeft]);

    return [timeLeftText, gameOver];
};
