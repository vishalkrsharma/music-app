import { useEffect, useState } from 'react';
import TitleNav from '../components/TitleNav';
import SongsContainer from '../components/SongsContainer';
import useMusic from '../hooks/useMusic';
import useFavouritesContext from '../hooks/useFavouritesContext';

function Favourites() {
  const id = 'favourites';
  const { favourites } = useFavouritesContext();

  const scrollLeft = () => {
    document.getElementById(id).scrollLeft -= document.getElementById(id).clientWidth * 0.15;
  };
  const scrollRight = () => {
    document.getElementById(id).scrollLeft += document.getElementById(id).clientWidth * 0.15;
  };

  return (
    <div className='container-fluid'>
      <TitleNav
        title='Your favourites'
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
      />
      {favourites.length === 0 ? (
        <div
          className='text-center text-uppercase mt-3'
          style={{ letterSpacing: '.3rem', color: 'var(--gray)' }}
        >
          no favourites
        </div>
      ) : (
        <SongsContainer
          songs={favourites}
          id={id}
        />
      )}
    </div>
  );
}

export default Favourites;
