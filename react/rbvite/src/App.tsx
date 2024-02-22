import {
  Ref,
  createRef,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { flushSync } from 'react-dom';
import { useCounter } from './contexts/counter-context';
import { SessionProvider } from './contexts/session-context';
// import Effect from './components/Effect';

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

type Position = { x: number; y: number };

function App() {
  const { count, plusCount } = useCounter();
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  const childInputRef = createRef<HTMLInputElement>();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const myHandlerRef = useRef<ItemHandler>(null);

  const catchPosition = ({ x, y }: Position) => {
    setPosition({ x, y });
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', catchPosition);

    return () => window.removeEventListener('mousemove', catchPosition);
  });

  return (
    <>
      {/* <Effect /> */}
      <small>{JSON.stringify(position)}</small>
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

      <SessionProvider myHandlerRef={myHandlerRef}>
        <My ref={myHandlerRef} />
        <Hello>Hello-children!!!!!!!!!!!</Hello>
      </SessionProvider>

      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>
    </>
  );
}
export default App;
