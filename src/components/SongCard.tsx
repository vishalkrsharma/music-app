import { useEffect, useState } from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';
import useMusic from '../hooks/useMusic';
import useFavouritesContext from '../hooks/useFavouritesContext';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PlaylistsContainer from './PlaylistsContainer';
import usePlaylistsContext from '../hooks/usePlaylistsContext';
import { TbPlaylist } from 'react-icons/tb';

interface Props {
  song: any;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function SongCard({ song }: Props) {
  const { addFavourites, removeFavourites, isFavourite, addToPlaylist } = useMusic();
  const [favColor, setFavColor] = useState(false);
  const { favourites } = useFavouritesContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { playlists } = usePlaylistsContext();

  useEffect(() => {
    const s = isFavourite(song);
    if (s) {
      setFavColor(true);
    }
  }, []);

  const handleClick = (song) => {
    if (!isFavourite(song)) {
      addFavourites(song);

      setFavColor(true);
    } else {
      removeFavourites(song);

      setFavColor(false);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const add = (song, playlist) => {
    addToPlaylist(song, playlist);
    closeModal();
  };

  return (
    <div className='flex-1 d-inline-block p-3 position-relative'>
      <img
        className='rounded-3 mb-3'
        style={{ width: ' 10rem' }}
        src={song.images.coverart}
      />
      <div className='text-center'>
        {song.title.length > 15 ? song.title.substring(0, 15) + '...' : song.title}
        <div className='d-flex justify-content-evenly align-items-center mt-1'>
          <FaPlus onClick={openModal} />
          <FaHeart
            size={25}
            color={favColor ? 'var(--purple)' : 'var(--gray)'}
            onClick={() => handleClick(song)}
          />
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div>Add To Playlist</div>
          <div className='d-flex justify-content-start align-items-stretch'>
            {playlists.map((playlist, idx) => (
              <div
                className='d-flex justify-content-start align-items-stretch'
                key={idx}
              >
                <div
                  className='flex-1 d-inline-block p-3 position-relative'
                  onClick={() => add(song, playlist)}
                >
                  <div
                    className='rounded-3 mb-3 d-flex justify-content-center align-items-center '
                    style={{ width: '5rem', height: '5rem', backgroundColor: 'var(--purple)' }}
                  >
                    <TbPlaylist
                      size={50}
                      color='white'
                    />
                  </div>
                  <div className='text-center'>{playlist.name.length > 14 ? playlist.name.substring(0, 14) + '...' : playlist.name}</div>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default SongCard;
