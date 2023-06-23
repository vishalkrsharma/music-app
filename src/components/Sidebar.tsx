import SidebarLink from './SidebarLink';
import { BiMenu, BiHeart, BiPlayCircle, BiSearch } from 'react-icons/bi';

function Sidebar() {
  return (
    <div
      className='container p-2 vh-100 d-flex flex-column justify-content-center align-items-center gap-1 sticky-top'
      style={{ backgroundColor: 'var(--purple)' }}
    >
      <SidebarLink path='/'>
        <BiMenu size={25} />
        <div>Home</div>
      </SidebarLink>
      <SidebarLink path='/search'>
        <BiSearch size={25} />
        <div>Search</div>
      </SidebarLink>
      <SidebarLink path='/favourites'>
        <BiHeart size={25} />
        <div>Favourites</div>
      </SidebarLink>
      <SidebarLink path='/playlists'>
        <BiPlayCircle size={25} />
        <div>Playlists</div>
      </SidebarLink>
    </div>
  );
}

export default Sidebar;
