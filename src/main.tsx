import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';
import { FavouritesContextProvider } from './contexts/FavouritesContext';
import { PlaylistsContextProvider } from './contexts/PlayListsContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <PlaylistsContextProvider>
        <App />
      </PlaylistsContextProvider>
    </FavouritesContextProvider>
  </React.StrictMode>
);
