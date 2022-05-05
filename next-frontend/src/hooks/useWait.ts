import * as React from 'react';
import { useWaitForTransaction } from 'wagmi';

export const useWait = (
    txHash: string | undefined,
    successCallback: () => void,
    errorCallback?: (error: Error) => any,
) => {
    const [{ data: waitingData, error, loading }] = useWaitForTransaction({
        hash: txHash,
    });

    React.useEffect(() => {
        if (!!waitingData) {
            successCallback();
        }
    }, [waitingData]);

    React.useEffect(() => {
        if (!!error && !!errorCallback) {
            errorCallback(error);
        }
    }, [error]);

    return { error, loading }
};
