import { createContext, useEffect, useState } from 'react';

export const PlaylistsContext = createContext([]);

export function PlaylistsContextProvider({ children }) {
  const [playlists, setPlaylists] = useState(() => {
    return JSON.parse(localStorage.getItem('playlists')) || [];
  });

  useEffect(() => {
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }, [playlists]);

  return <PlaylistsContext.Provider value={{ playlists, setPlaylists }}>{children}</PlaylistsContext.Provider>;
}
