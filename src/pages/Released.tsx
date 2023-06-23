import { useEffect, useState } from 'react';
import useMusic from '../hooks/useMusic';
import TitleNav from '../components/TitleNav';
import SongsContainer from '../components/SongsContainer';
import useReleasedContext from '../hooks/useReleasedContext';

function Released() {
  const { released } = useReleasedContext();

  const id = 'released';

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
        songs={released}
        id={id}
      />
    </div>
  );
}

export default Released;
