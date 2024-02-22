import { useEffect } from 'react';

export const useTimeout = (cb: (...args: unknown[]) => void, delay: number) => {
  useEffect(() => {
    const tmout = setTimeout(cb, delay);

    return () => clearTimeout(tmout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
