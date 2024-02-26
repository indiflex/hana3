import { useRef } from 'react';
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { SessionProvider } from './contexts/session-context';
import Posts from './components/Posts';
import { Nav } from './Nav';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { NotFound } from './NotFound';
import { Home } from './components/Home';
// import DeferTrans from './components/DeferTrans';
// import Effect from './components/Effect';

function App() {
  const myHandlerRef = useRef<ItemHandler>(null);

  return (
    <>
      <SessionProvider myHandlerRef={myHandlerRef}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my' element={<My />} />
          <Route path='/posts' element={<Posts />} />
          {/* <Route path='/items' element={<Items />} />
        <Route path='/items/:id' element={<Item />} /> */}
          <Route path='/hello' element={<Hello />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SessionProvider>
      {/* <Effect /> */}
      {/* <h1 ref={titleRef} style={{ color: 'white', backgroundColor: 'red' }}>
        Vite + React
      </h1> */}

      {/* <DeferTrans /> */}

      {/* <button onClick={() => myHandlerRef.current?.signOut()}>
        App-Sign-Out
      </button>
      <button onClick={() => myHandlerRef.current?.notify('테스트메시지')}>
        Message
      </button>
      <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button> */}
    </>
  );
}
export default App;
