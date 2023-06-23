import PlaylistCard from './PlaylistCard';

interface Props {
  playlists: [];
  id: string;
}

function PlaylistsContainer({ playlists, id }: Props) {
  return (
    <div
      className='d-flex justify-content-start align-items-stretch overflow-x-hidden'
      id={id}
      style={{ scrollBehavior: 'smooth' }}
    >
      {playlists.map((playlist, idx) => (
        <PlaylistCard
          playlist={playlist}
          key={idx}
        />
      ))}
    </div>
  );
}

export default PlaylistsContainer;
