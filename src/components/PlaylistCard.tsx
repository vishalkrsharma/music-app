import img from '../assets/image.png';

interface Props {
  playlist: object;
}

function PlaylistCard({ playlist }: Props) {
  return (
    <div className='flex-1 d-inline-block p-3 position-relative '>
      <img
        className='rounded-3 mb-3'
        style={{ width: ' 10rem' }}
        src={img}
      />
      <div className='text-center'>{playlist.name.length > 14 ? playlist.name.substring(0, 14) + '...' : playlist.name}</div>
    </div>
  );
}

export default PlaylistCard;
