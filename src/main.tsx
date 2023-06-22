import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';
import { FavouritesContextProvider } from './contexts/FavouritesContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <App />
    </FavouritesContextProvider>
  </React.StrictMode>
);
