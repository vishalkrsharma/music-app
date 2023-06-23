import { PlaylistsContext } from '../contexts/PlayListsContext';
import { useContext } from 'react';

export default function usePlaylistsContext() {
  const context = useContext(PlaylistsContext);
  if (!context) {
    throw Error('error');
  }
  return context;
}
