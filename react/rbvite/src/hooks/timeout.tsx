import { useEffect } from 'react';

export const useTimeout = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  useEffect(() => {
    const tmout = setTimeout(cb, delay);

    return () => clearTimeout(tmout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
