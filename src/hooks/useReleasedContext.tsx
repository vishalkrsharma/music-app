import { ReleasedContext } from '../contexts/ReleasedContext';
import { useContext } from 'react';

export default function useReleasedContext() {
  const context = useContext(ReleasedContext);
  if (!context) {
    throw Error('error');
  }
  return context;
}
