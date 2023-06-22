import { FavouritesContext } from '../contexts/FavouritesContext.js';
import { useContext } from 'react';

export default function useFavouritesContext() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw Error('error');
  }
  return context;
}
