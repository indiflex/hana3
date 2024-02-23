import { useEffect, useState } from 'react';
type FetchParam<T> = {
  url: string | URL | globalThis.Request;
  options?: RequestInit;
  dependencies?: unknown[];
  defaultData: T;
};

export const useFetch = <T>({
  url,
  options = {},
  dependencies = [],
  defaultData,
}: FetchParam<T>) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<T>(defaultData);

  useEffect(() => {
    const controller = new AbortController();
    options.signal = controller.signal;

    (async function () {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(url, options);
        const data = (await res.json()) as T;
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          // console.log('🚀  err:', err.name, typeof err);
          if (err.name !== 'AbortError') setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, isLoading, error };
};
