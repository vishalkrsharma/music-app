import { BiPlus } from 'react-icons/bi';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState } from 'react';
import useMusic from '../hooks/useMusic';

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

function AddPlaylists() {
  const [playlistName, setPlaylistName] = useState('');
  const { addPlaylist } = useMusic();

  const createPlayList = () => {
    openModal();
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setPlaylistName('');
  }

  const handleClick = () => {
    addPlaylist(playlistName);
    closeModal();
    setPlaylistName('');
  };

  return (
    <div className='flex-1 d-inline-block p-3 position-relative '>
      <div
        className='rounded-3 mb-3 d-flex justify-content-center align-items-center '
        style={{ width: ' 10rem', height: '10rem', backgroundColor: 'var(--gray)' }}
        onClick={createPlayList}
      >
        <BiPlus
          color='var(--purple)'
          size={50}
        />
      </div>
      <div className='text-center'>Add Playlist</div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <div className='text-center mb-2'>Add Playlist</div>
          <div className='d-flex justify-content-center align-content-center gap-4'>
            <input
              type='text'
              placeholder='Playlist Name'
              name='playlistName'
              value={playlistName}
              onChange={(event) => setPlaylistName(event.target.value)}
            />
            <button
              style={{ border: 'none', backgroundColor: 'var(--purple)', color: 'var(--gray)', padding: '.75rem 1rem' }}
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AddPlaylists;
