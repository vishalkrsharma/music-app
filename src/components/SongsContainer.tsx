import SongCard from './SongCard';

interface Props {
  songs: object[];
  id: string;
}

function SongsContainer({ songs, id }: Props) {
  return (
    <div
      className='d-flex justify-content-start align-items-stretch overflow-x-hidden'
      id={id}
      style={{ scrollBehavior: 'smooth' }}
    >
      {songs.map((song, idx) => (
        <SongCard
          song={song}
          key={idx}
        />
      ))}
    </div>
  );
}

export default SongsContainer;
