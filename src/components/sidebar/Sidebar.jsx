import SearchBar from './SearchBar';
import LogoutBtn from './LogoutBtn';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';

export default function Sidebar() {
  return (
    <>
      <div className='h-screen w-80 p-4 shadow-xl'>
        <h1 className='text-4xl text-neutral-600 my-2 font-black'>Warehouse</h1>
        <SearchBar />
        <nav className='flex flex-col justify-between h-4/5'>
          <ul className='flex flex-col gap-5 text-neutral-600'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? 'active flex justify-start items-center gap-1 py-2 px-4 rounded font-semibold'
                    : 'flex justify-start items-center gap-1 py-2 px-4 rounded font-semibold'
                }
              >
                <HomeIcon />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/customers'
                className={({ isActive }) =>
                  isActive
                    ? 'active flex justify-start items-center gap-1 py-2 px-4 rounded font-semibold'
                    : 'flex justify-start items-center gap-1 py-2 px-4 rounded font-semibold'
                }
              >
                <PeopleIcon />
                Customers
              </NavLink>
            </li>
          </ul>
          <LogoutBtn />
        </nav>
      </div>
    </>
  );
}
