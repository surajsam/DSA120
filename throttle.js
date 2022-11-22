function throttle (callback, delay) {
    let lastCalledTime = 0;
    let intervalId;
    function throttleFun (...args) {
        const currentTime = Date.now();
        const delaySinceLastCall = currentTime - lastCalledTime;
        const remainingDelay = delay - delaySinceLastCall;
        if(remainingDelay <= 0) {
            callback.apply(this, args);
        }
        clearTimeout(intervalId);
        intervalId = setTimeout(() => {
            lastCalledTime = Date.now();
            callback.apply(this, args)    
        }
        ,remainingDelay)
    }
    throttleFun.cancel = () => {
        clearTimeout(intervalId);
    }
    return throttleFun;
}