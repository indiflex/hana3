import { useRef } from 'react';
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { SessionProvider } from './contexts/session-context';
import Posts from './components/Posts';
import { Nav } from './Nav';
import { Route, Routes } from 'react-router-dom';
import { Login, LoginHandler } from './components/Login';
import { NotFound } from './NotFound';
import { Home } from './components/Home';
import Sample from './components/Sample';
import DeferTrans from './components/DeferTrans';
import Post from './components/Post';
// import DeferTrans from './components/DeferTrans';
// import Effect from './components/Effect';

function App() {
  const myHandlerRef = useRef<ItemHandler>(null);
  const loginHandlerRef = useRef<LoginHandler>(null);

  return (
    <>
      <SessionProvider
        myHandlerRef={myHandlerRef}
        loginHandlerRef={loginHandlerRef}
      >
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login ref={loginHandlerRef} />} />
          <Route path='/my' element={<My ref={myHandlerRef} />} />
          <Route path='/posts'>
            <Route index element={<Posts />} />
            <Route path=':id' element={<Post />} />
          </Route>
          {/* <Route path='/items' element={<Items />} />
        <Route path='/items/:id' element={<Item />} /> */}
          <Route path='/hello' element={<Hello />} />
          <Route path='/sample' element={<Sample />} />
          <Route path='/difertrans' element={<DeferTrans />} />
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
