import img from '../assets/image.png';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  return (
    <div
      className='container-fluid m-0 p-0 d-flex justify-content-between align-items-center '
      style={{ backgroundColor: 'var(--pink)' }}
    >
      <img
        className='w-50'
        src={img}
      />
      <div className='text-white me-5'>
        <div className='primary fs-1'>Your favourite tunes</div>
        <div className='secondary fs-2 text-end'>
          All&nbsp;
          <FaSun color='#ffd50d' />
          &nbsp;and all&nbsp;
          <FaMoon color='#39383d' />
        </div>
      </div>
    </div>
  );
}

export default Header;
