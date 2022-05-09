import { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';

export const useError = (error?: any) => {
    const { addToast } = useToasts();

    useEffect(() => {
        if (error) {
            if (error.reason) {
                addToast(error.reason, { appearance: 'error' })
            } else if (error.message) {
                addToast(error.message, { appearance: 'error' })
            }
        }
    }, [error]);
}
