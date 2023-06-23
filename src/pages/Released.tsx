import { useEffect, useState } from 'react';
import useMusic from '../hooks/useMusic';
import SongCard from '../components/SongCard';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import TitleNav from '../components/TitleNav';
import SongsContainer from '../components/SongsContainer';

function Released() {
  const [songs, setSongs] = useState([]);
  const { getFeatured } = useMusic();

  const id = 'released';

  useEffect(() => {
    async function getSongs() {
      const tracks = await getFeatured();
      setSongs(tracks);
    }

    getSongs();
  }, []);

  const scrollLeft = () => {
    document.getElementById(id).scrollLeft -= document.getElementById(id).clientWidth * 0.4;
  };
  const scrollRight = () => {
    document.getElementById(id).scrollLeft += document.getElementById(id).clientWidth * 0.4;
  };

  return (
    <div className='container-fluid mt-3'>
      <TitleNav
        title='Released this week'
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      <SongsContainer
        songs={songs}
        id={id}
      />
    </div>
  );
}

export default Released;
