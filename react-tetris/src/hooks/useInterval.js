import { useEffect, useRef } from 'react';

/**
 * A custom hook that sets up an interval for invoking a callback function repeatedly with a specified delay.
 * @param {function} callback - The function to be called each time the interval elapses.
 * @param {number|null} delay - The delay in milliseconds between each invocation of the callback function. If `null`, the interval is cleared.
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
