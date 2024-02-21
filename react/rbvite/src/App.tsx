import { Ref, createRef, forwardRef, useRef } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { flushSync } from 'react-dom';
import { useCounter } from './contexts/counter-context';
import { SessionProiver } from './contexts/session-context';

// {ss: 'FirstComponent' }
// function H5({ ss }: { ss: string }) {
const H5 = forwardRef(({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
  return (
    <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
      <h5>H55555566-{ss}</h5>
      <input type='text' ref={ref} placeholder='child-input...' />
    </div>
  );
});
H5.displayName = 'H5';

function App() {
  const { count, plusCount } = useCounter();

  const childInputRef = createRef<HTMLInputElement>();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const myHandlerRef = useRef<ItemHandler>(null);

  return (
    <>
      <h1 ref={titleRef} style={{ color: 'white', backgroundColor: 'red' }}>
        Vite + React
      </h1>
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
      <button onClick={() => myHandlerRef.current?.signOut()}>
        App-Sign-Out
      </button>
      <button onClick={() => myHandlerRef.current?.notify('테스트메시지')}>
        Message
      </button>
      <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button>
      <SessionProiver>
        <My ref={myHandlerRef} />
        <Hello>Hello-children!!!!!!!!!!!</Hello>
      </SessionProiver>
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
      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>
    </>
  );
}
export default App;
