import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export default function LogoutBtn() {
  const { onLogout } = useContext(AuthContext);
  return (
    <button
      className='flex items-center justify-center gap-2 bg-cta font-semibold rounded-md p-2 outline-none w-1/2 shadow-md text-[#fff]'
      onClick={onLogout}
    >
      Log Out
      {<LogoutOutlinedIcon />}
    </button>
  );
}
