import { TbPlaylist } from 'react-icons/tb';
import { Link } from 'react-router-dom';

interface Props {
  playlist: object;
}

function PlaylistCard({ playlist }: Props) {
  return (
    <Link
      to={`/playlists/${playlist.name}`}
      className='flex-1 d-inline-block p-3 position-relative'
    >
      <div
        className='rounded-3 mb-3 d-flex justify-content-center align-items-center '
        style={{ width: '10rem', height: '10rem', backgroundColor: 'var(--purple)' }}
      >
        <TbPlaylist
          size={50}
          color='white'
        />
      </div>
      <div className='text-center'>{playlist.name.length > 14 ? playlist.name.substring(0, 14) + '...' : playlist.name}</div>
    </Link>
  );
}

export default PlaylistCard;
