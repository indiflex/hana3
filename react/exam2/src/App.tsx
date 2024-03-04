import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Albums } from './components/Albums';
import { AlbumPhotos } from './components/AlbumPhotos';
import { SessionProvider } from './hooks/session-context';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <SessionProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/albums' element={<Albums />} />
            <Route path='/albums/:id' element={<AlbumPhotos />} />
          </Routes>
        </BrowserRouter>
      </SessionProvider>
    </>
  );
}

export default App;
