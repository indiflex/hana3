import { Ref, createRef, forwardRef, useRef, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { flushSync } from 'react-dom';

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

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession: Session = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const childInputRef = createRef<HTMLInputElement>();
  const titleRef = useRef<HTMLHeadingElement>(null);

  const myHandlerRef = useRef<ItemHandler>(null);

  // const plusCount = () => setCount(count + 1);
  const plusCount = () => setCount((prevCount) => prevCount + 1);

  const login = (id: number, name: string) => {
    console.log('🚀  id name :', id, name, myHandlerRef.current);

    if (!myHandlerRef.current) return;
    const loginNoti = myHandlerRef.current.loginHandler.noti;
    console.log('🚀  loginNoti:', loginNoti);
    if (!loginNoti) return;

    const focusId = myHandlerRef.current.loginHandler.focusId;
    const focusName = myHandlerRef.current.loginHandler.focusName;

    if (!id || isNaN(id)) {
      loginNoti('User ID를 입력하세요!');
      if (focusId) focusId();
      return;
    }

    if (!name) {
      loginNoti('User name을 입력하세요!');
      if (focusName) focusName();
      return;
    }

    setSession({ ...session, loginUser: { id, name } });
  };
  const logout = () => {
    // setSession({ cart: [...session.cart], loginUser: null });
    // session.loginUser = null;
    setSession({ ...session, loginUser: null });
  };

  // add(id=0) or modify(id!=0) item
  const saveItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    const foundItem = id !== 0 && cart.find((item) => item.id === id);
    if (!foundItem) {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push({ id, name, price });
    } else {
      foundItem.name = name;
      foundItem.price = price;
    }

    setSession({
      ...session,
      // cart,
      // cart: [...cart],
    });
  };

  const removeItem = (itemId: number) => {
    console.log('🚀  itemId:', itemId);
    setSession({
      ...session,
      // cart: [...session.cart.filter((item) => item.id !== itemId)],
      cart: session.cart.filter((item) => item.id !== itemId),
    });

    // Virtual-DOM의 rerender() 호출 안함(: session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  };

  console.log('Declare-Area: Re-render!!!');

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

      <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
        saveItem={saveItem}
        ref={myHandlerRef}
      />
      <Hello
        name={session.loginUser?.name || 'Guest'}
        age={count}
        plusCount={plusCount}
      >
        Hello-children!!!!!!!!!!!
      </Hello>
      <div className='card'>
        <button
          onClick={() => {
            // setCount((count) => count + 1);
            for (let i = 0; i < 10; i += 1) {
              // console.log('i=', i);
              // setCount(count + 1);
              // setCount((prev) => prev + 1);
              flushSync(() => setCount((prev) => prev + 1));
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
