import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import useMusic from '../hooks/useMusic';
import useFavouritesContext from '../hooks/useFavouritesContext';

interface Props {
  song: any;
}

function SongCard({ song }: Props) {
  const { addFavourites, removeFavourites, isFavourite } = useMusic();
  const [favColor, setFavColor] = useState(false);
  const { favourites } = useFavouritesContext();

  useEffect(() => {
    const s = isFavourite(song);
    if (s) {
      setFavColor(true);
    }
  });

  const handleClick = (song) => {
    const fav = favourites.filter((so) => so.key === song.key);
    if (fav.length === 0) {
      addFavourites(song);

      setFavColor(true);
    } else {
      removeFavourites(song);

      setFavColor(false);
    }
  };

  return (
    <div className='flex-1 d-inline-block p-3 position-relative '>
      <img
        className='rounded-3 mb-3'
        style={{ width: ' 10rem' }}
        src={song.images.coverart}
      />
      <div className='d-flex justify-content-between align-items-center'>
        <div className='flex-1'>{song.title.length > 14 ? song.title.substring(0, 14) + '...' : song.title}</div>
        <div className=''>
          <FaHeart
            size={25}
            color={favColor ? 'var(--purple)' : 'var(--gray)'}
            onClick={() => handleClick(song)}
          />
        </div>
      </div>
    </div>
  );
}

export default SongCard;
