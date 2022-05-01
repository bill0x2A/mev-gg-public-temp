import * as React from 'react';
import { useWaitForTransaction } from 'wagmi';

export const useWait = (txHash: string | undefined, callback: () => void) => {
    const [{ data: waitingData }] = useWaitForTransaction({
        hash: txHash,
    });

    React.useEffect(() => {
        callback();
    }, [waitingData]);
};
