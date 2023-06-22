import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  path: string;
  children: ReactNode;
}

function SidebarLink({ path, children }: Props) {
  return (
    <Link
      className='d-flex justify-content-start align-items-center gap-3 p-3 w-75 no-underline'
      to={path}
      style={{ color: 'var(--gray)', textDecoration: 'none' }}
    >
      {children}
    </Link>
  );
}

export default SidebarLink;
