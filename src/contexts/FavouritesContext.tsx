import { createContext, useEffect, useState } from 'react';

export const FavouritesContext = createContext([]);

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem('favourites')) || [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  return <FavouritesContext.Provider value={{ favourites, setFavourites }}>{children}</FavouritesContext.Provider>;
}
