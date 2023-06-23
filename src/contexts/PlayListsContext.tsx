import { createContext, useEffect, useState } from 'react';

export const PlaylistsContext = createContext([]);

export function PlaylistsContextProvider({ children }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('playlists')) {
      setPlaylists(JSON.parse(localStorage.getItem('playlists')));
    }
  }, [setPlaylists]);

  return <PlaylistsContext.Provider value={{ playlists, setPlaylists }}>{children}</PlaylistsContext.Provider>;
}
