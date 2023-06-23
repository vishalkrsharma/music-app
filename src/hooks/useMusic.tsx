import axios from 'axios';
import songs from '../data/songs.json';
import useFavouritesContext from './useFavouritesContext';
import usePlaylistsContext from './usePlaylistsContext';
import useReleasedContext from './useReleasedContext';

function useMusic() {
  const { favourites, setFavourites } = useFavouritesContext();
  const { playlists, setPlaylists } = usePlaylistsContext();
  const { released, setReleased } = useReleasedContext();

  const ls = localStorage;

  const getFeatured = async () => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
      params: {
        key: '484129036',
        locale: 'en-US',
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      let { tracks } = response.data;
      tracks = tracks.map((track) => ({
        ...track,
        fav: false,
      }));
      setReleased(tracks);
    } catch (error) {
      console.error(error);
    }
  };

  const search = async (title) => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
        term: title,
        locale: 'en-US',
        offset: '0',
        limit: '5',
      },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data.tracks;
    } catch (error) {
      console.error(error);
    }
  };

  const addFavourites = (song) => {
    setFavourites((prev) => [...prev, song]);
  };

  const getFavourites = () => {
    return favourites;
  };

  const removeFavourites = (song) => {
    const fav = favourites.filter((so) => so.key !== song.key);
    setFavourites(fav);
  };

  const isFavourite = (song) => {
    const fav = favourites.filter((so) => so.key === song.key);
    return fav.length === 0 ? false : true;
  };

  const addPlaylist = (playlistsName) => {
    const p = playlists.filter((p) => p.name === playlistsName);
    console.log(p);
    if (p.length === 0) {
      setPlaylists((prev) => [
        ...prev,
        {
          name: playlistsName,
          songs: [],
        },
      ]);
    }
  };

  const addToPlaylist = (song, playlist) => {
    if (!isadded(song, playlist)) {
      setPlaylists((prev) => {
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].name === playlist.name) {
            prev[i].songs = [...prev[i].songs, song];
          }
        }

        return [...prev];
      });
    }
  };

  const isadded = (song, playlist) => {
    for (let i = 0; i < playlists.length; i++) {
      if (playlists[i].name === playlist.name) {
        const fav = playlists[i].songs.filter((so) => so.key === song.key);
        if (fav.length === 0) {
          return false;
        }
      }
    }

    return true;
  };

  const getSinglePlaylist = (name) => {
    const p = playlists.filter((pl) => pl.name === name);
    return p[0];
  };

  return { getFeatured, addFavourites, getFavourites, removeFavourites, isFavourite, addPlaylist, addToPlaylist, getSinglePlaylist, search };
}

export default useMusic;
