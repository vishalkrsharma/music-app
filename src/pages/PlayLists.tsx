import AddPlaylists from '../components/AddPlaylists';
import PlaylistsContainer from '../components/PlaylistsContainer';
import TitleNav from '../components/TitleNav';
import usePlaylistsContext from '../hooks/usePlaylistsContext';

function PlayLists() {
  const id = 'playlists';
  const { playlists } = usePlaylistsContext();

  const scrollLeft = () => {
    document.getElementById(id).scrollLeft -= document.getElementById(id).clientWidth * 0.15;
  };
  const scrollRight = () => {
    document.getElementById(id).scrollLeft += document.getElementById(id).clientWidth * 0.15;
  };

  return (
    <div className='container-fluid'>
      <TitleNav
        title='your playlists'
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      <AddPlaylists />
      <PlaylistsContainer
        playlists={playlists}
        id={id}
      />
    </div>
  );
}

export default PlayLists;
