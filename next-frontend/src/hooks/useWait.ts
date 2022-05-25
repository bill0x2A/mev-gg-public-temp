import * as React from 'react';
import { useWaitForTransaction } from 'wagmi';

export const useWait = (
    txHash: string | undefined,
    successCallback: (data?: any) => void,
    errorCallback?: (error: Error) => any,
) => {
    const [{ data: waitingData, error, loading }] = useWaitForTransaction({
        confirmations: 1,
        hash: txHash,
    });

    React.useEffect(() => {
        if (waitingData?.status === 1 && !loading) {
            successCallback(waitingData);
        }
    }, [waitingData?.status, loading]);

    React.useEffect(() => {
        if (!!error && !!errorCallback) {
            errorCallback(error);
        }
    }, [error]);

    return { error, loading }
};
