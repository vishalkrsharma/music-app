import Home from './pages/Home';
import useAuth from './hooks/useAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';

import Layout from './pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayLists from './pages/PlayLists';
import SinglePlayList from './pages/SinglePlayList';
import Search from './pages/Search';
import { useEffect } from 'react';
import useMusic from './hooks/useMusic';

function App() {
  const isLogin = useAuth();
  const { getFeatured } = useMusic();
  useEffect(() => {
    async function getSongs() {
      getFeatured();
    }

    getSongs();
  }, []);

  return (
    <BrowserRouter>
      {isLogin && (
        <Routes>
          <Route element={<Layout />}>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/favourites'
              element={<Favourites />}
            />
            <Route
              path='/playlists'
              element={<PlayLists />}
            />
            <Route
              path='/playlists/:name'
              element={<SinglePlayList />}
            />
            <Route
              path='/search'
              element={<Search />}
            />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
