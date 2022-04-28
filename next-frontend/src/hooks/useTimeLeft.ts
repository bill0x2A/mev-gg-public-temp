import { useContractRead, useProvider } from 'wagmi';
import * as React from 'react';
import contractAddress from "../contracts/fomo-contract-address.json";
import MevGGArtifact from "../contracts/MevGG.json";
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration.default)
dayjs.extend(relativeTime.default)

type UseTimeLeftReturnType = [string, (null | boolean)];

export const useTimeLeft = (): UseTimeLeftReturnType => {
    const provider = useProvider();
    const [{ data: timeLeft, error, loading }] = useContractRead({
        addressOrName: contractAddress.MevGG,
        contractInterface: MevGGArtifact.abi,
        signerOrProvider: provider,
    },
        "getTimeLeft",
        {
            watch: true,
    });

    const [gameOver, setGameOver] = React.useState<boolean | null>(null);

    const timeLeftText = React.useMemo<string>(() => {
        if (loading) return 'Fetching time left....';
        if (error || !timeLeft ) return 'Error fetching time left';
        const timeRemaining = dayjs.duration(timeLeft.toNumber(), 'seconds').humanize();
        return `Time left: ${timeRemaining}`;
    }, [loading, error, timeLeft]);

    React.useEffect(() => {
        if (timeLeft && Number(timeLeft) === 0) setGameOver(true);
        if (timeLeft && Number(timeLeft) > 0) setGameOver(false);
    }, [timeLeft]);

    return [timeLeftText, gameOver];

};
