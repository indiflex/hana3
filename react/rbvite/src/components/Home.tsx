import { createRef } from 'react';
import { useCounter } from '../contexts/counter-context';
import { H5 } from './H5';
import MouseCapture from './MouseCapture';
import { flushSync } from 'react-dom';

export const Home = () => {
  const { count, plusCount } = useCounter();
  const childInputRef = createRef<HTMLInputElement>();

  return (
    <>
      <h1 className='text-lg font-bold'>Home</h1>
      <MouseCapture />

      <H5 ss={`First-Component ${count}`} ref={childInputRef} />
      <button
        onClick={() => {
          if (childInputRef.current) {
            childInputRef.current.value = 'XXXX';
            childInputRef.current.select();
          }
        }}
      >
        call H5 input
      </button>

      <div className='card'>
        <button
          onClick={() => {
            // setCount((count) => count + 1);
            for (let i = 0; i < 10; i += 1) {
              // console.log('i=', i);
              // setCount(count + 1);
              // setCount((prev) => prev + 1);
              flushSync(plusCount);
            }
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
};
