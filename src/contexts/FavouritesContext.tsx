import { createContext, useEffect, useReducer, useState } from 'react';

export const FavouritesContext = createContext([]);

export function FavouritesContextProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  console.log(favourites);
  useEffect(() => {
    if (localStorage.getItem('favourites')) {
      setFavourites(JSON.parse(localStorage.getItem('favourites')));
    }
  }, [setFavourites]);

  return <FavouritesContext.Provider value={{ favourites, setFavourites }}>{children}</FavouritesContext.Provider>;
}
