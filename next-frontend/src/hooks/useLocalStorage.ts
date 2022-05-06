export const useLocalStorage = (): boolean => {
    let firstTime = false;
    if (typeof window !== 'undefined') {
        firstTime = !!window.localStorage.getItem('has_visited_mevgg_before');
        if(!firstTime) {
            localStorage.setItem('has_visited_mevgg_before','1');
        }
    }
    return firstTime;
};
