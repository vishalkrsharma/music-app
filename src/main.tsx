import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/styles.css';
import { FavouritesContextProvider } from './contexts/FavouritesContext';
import { PlaylistsContextProvider } from './contexts/PlayListsContext.tsx';
import { ReleasedContextProvider } from './contexts/ReleasedContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReleasedContextProvider>
      <FavouritesContextProvider>
        <PlaylistsContextProvider>
          <App />
        </PlaylistsContextProvider>
      </FavouritesContextProvider>
    </ReleasedContextProvider>
  </React.StrictMode>
);
