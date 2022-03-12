import { useEffect } from 'react';
import { useToasts } from "react-toast-notifications";

export const useError = (error?: Error) => {
    const { addToast } = useToasts();

    useEffect(() => {
        if (error) {
            console.dir(error);
            addToast(error.message, { appearance: 'error' })
        }
    }, [error]);
}
