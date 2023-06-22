import axios from 'axios';
import songs from '../data/songs.json';
import useFavouritesContext from './useFavouritesContext';

function useMusic() {
  const { favourites, setFavourites } = useFavouritesContext();
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

    if (ls.getItem('tracks')) {
      return JSON.parse(ls.getItem('tracks'));
    }

    // const response = await axios.request(options);
    let { tracks } = songs;
    tracks = tracks.map((track) => ({
      ...track,
      fav: false,
    }));
    ls.setItem('tracks', JSON.stringify(tracks));
    return tracks;
  };

  const addFavourites = (song) => {
    const fav = favourites.filter((so) => so.key === song.key);

    if (fav.length === 0) {
      setFavourites([...favourites, song]);
      ls.setItem('favourites', JSON.stringify(favourites));
    }
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
    return fav.length !== 0 ? true : false;
  };

  return { getFeatured, addFavourites, getFavourites, removeFavourites, isFavourite };
}

export default useMusic;
