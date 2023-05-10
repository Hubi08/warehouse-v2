import SearchIcon from '@mui/icons-material/Search';

import { DataContext } from '../../context/DataContext';
import { useContext } from 'react';

export default function SearchBar() {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div className='relative mb-8'>
      <label htmlFor='search' className='sr-only'>
        {' '}
        Search{' '}
      </label>
      <input
        type='text'
        id='search'
        placeholder='Search'
        className='w-full rounded-md p-2 shadow-md outline-none'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <span className='absolute inset-y-0 end-0 grid w-10 place-content-center cursor-pointer'>
        <SearchIcon sx={{ color: '#3f3d56' }} />
      </span>
    </div>
  );
}
