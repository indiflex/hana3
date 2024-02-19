import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import { My } from './components/My';
import { flushSync } from 'react-dom';

// {ss: 'FirstComponent' }
// function H5(prop: { ss: string }) {
// function H5({ ss }: { ss: string }) {
//   return <h5>H55555566-{ss}</h5>;
// }

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession: Session = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  // const plusCount = () => setCount(count + 1);
  const plusCount = () => setCount((prevCount) => prevCount + 1);
  const login = (id: number, name: string) => {
    setSession({ ...session, loginUser: { id, name } });
  };
  const logout = () => {
    // setSession({ cart: [...session.cart], loginUser: null });
    // session.loginUser = null;
    setSession({ ...session, loginUser: null });
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
      <h1 style={{ color: 'white', backgroundColor: 'red' }}>Vite + React</h1>
      {/* <H5 ss={`First-Component ${count}`} /> */}
      <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
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
    </>
  );
}

export default App;
