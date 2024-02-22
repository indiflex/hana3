/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const cbRef = useRef(cb);
  cbRef.current = cb;
  const delayRef = useRef(delay);
  delayRef.current = delay;

  const setup = useCallback(() => {
    // console.log('set-up!!', delay, delayRef.current);
    //                      &100,  &800.current
    // timerRef.current = setTimeout(cbRef.current, delay);
    timerRef.current = setTimeout(cbRef.current, delayRef.current);
    //                            &900.current,  &800.current
    // timerRef.current = setTimeout(cb, delay);
  }, []);
  // const setup = () => {
  //   console.log('set-up!!', delay);
  //   // timerRef.current = setTimeout(cbRef.current, delay);
  //   timerRef.current = setTimeout(cb, delay);
  // };

  const clear = useCallback(() => {
    // console.log('clear!!');
    clearTimeout(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    // console.log('reset!!');
    clear();
    setup();
  }, [setup, clear]);

  useEffect(() => {
    // timerRef.current = setTimeout(cb, delay);
    setup();

    return clear;
  }, dependencies);

  return { reset, clear };
};
