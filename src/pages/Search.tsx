import { useState } from 'react';
import useMusic from '../hooks/useMusic';
import SongCard from '../components/SongCard';

function Search() {
  const [title, setTitle] = useState('');
  const { search } = useMusic();
  const [isSearched, setIsSearched] = useState(null);

  const [searchedTracks, setSearchedTracks] = useState([]);
  const handleClick = async () => {
    setIsSearched(false);
    const data = await search(title);
    const { hits } = data;
    setSearchedTracks(hits);
    setIsSearched(true);
  };

  return (
    <>
      <div className='d-flex justify-content-start align-items-stretch gap-4 m-4'>
        <div className='d-flex justify-content-center align-items-center'>Search</div>
        <input
          type='text'
          placeholder='Search'
          name='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          style={{ border: 'none', backgroundColor: 'var(--purple)', color: 'var(--gray)', padding: '.75rem 1rem' }}
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {isSearched === false && (
        <div
          className='text-uppercase text-center'
          style={{ letterSpacing: '.3rem', color: 'var(--gray)' }}
        >
          Loading
        </div>
      )}
      {isSearched && (
        <>
          <div
            className='d-flex justify-content-start align-items-stretch overflow-x-hidden'
            style={{ scrollBehavior: 'smooth' }}
          >
            {searchedTracks.length === 0 ? (
              <div
                className='text-uppercase text-center'
                style={{ letterSpacing: '.3rem', color: 'var(--gray)' }}
              >
                Nothing Found
              </div>
            ) : (
              searchedTracks.map((t, idx) => {
                const { track } = t;

                return (
                  <SongCard
                    song={track}
                    key={idx}
                  />
                );
              })
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Search;
