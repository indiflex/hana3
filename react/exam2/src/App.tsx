import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { SessionProvider } from './hooks/session-context';
import Home from './components/Home';
import Albums from './components/Albums';
import Album from './components/Album';

function App() {
  return (
    <>
      <SessionProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/albums/:id' element={<Album />} />
        </Routes>
      </SessionProvider>
    </>
  );
}

export default App;
