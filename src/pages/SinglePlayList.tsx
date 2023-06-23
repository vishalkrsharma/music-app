import React, { useEffect, useState } from 'react';
import TitleNav from '../components/TitleNav';
import { useParams } from 'react-router-dom';
import useMusic from '../hooks/useMusic';
import SongsContainer from '../components/SongsContainer';

function SinglePlayList() {
  const params = useParams();
  const { name } = params;
  const { getSinglePlaylist } = useMusic();
  const [playList, setPlaylist] = useState({});
  useEffect(() => {
    const a = getSinglePlaylist(name);
    setPlaylist(a);
  }, []);

  const id = 'single';

  const scrollLeft = () => {
    document.getElementById(id).scrollLeft -= document.getElementById(id).clientWidth * 0.15;
  };
  const scrollRight = () => {
    document.getElementById(id).scrollLeft += document.getElementById(id).clientWidth * 0.15;
  };

  return (
    <div>
      <TitleNav
        title={`Playlist Name : ${playList.name}`}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      {playList.songs ? (
        <SongsContainer
          songs={playList.songs}
          id={id}
        />
      ) : (
        <div>no songs</div>
      )}
    </div>
  );
}

export default SinglePlayList;
