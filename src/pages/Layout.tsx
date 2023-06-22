import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Layout() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 p-0'>
          <Sidebar />
        </div>
        <div className='col-10 p-0'>
          <div className='container-fluid p-0 m-0'>
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
