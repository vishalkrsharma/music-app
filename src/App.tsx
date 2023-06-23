import Home from './pages/Home';
import useAuth from './hooks/useAuth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';

import Layout from './pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayLists from './pages/PlayLists';

function App() {
  const isLogin = useAuth();

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
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
