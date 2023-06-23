import { FavouritesContext } from '../contexts/FavouritesContext';
import { useContext } from 'react';

export default function useFavouritesContext() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw Error('error');
  }
  return context;
}
