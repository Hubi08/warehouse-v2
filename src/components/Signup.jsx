import axios from 'axios';
import undrawSignup from '/src/assets/undrawsignup.svg';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';

import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export default function Signup() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { onLogin } = useContext(AuthContext);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const login = async () => {
    const result = await onLogin(user, password);

    if (result && result.error) {
      console.log(result.msg);
    }
  };

  return (
    <>
      <div className='w-auto grid grid-cols-2 overflow-hidden rounded-md'>
        <div className='image'>
          <img src={undrawSignup} alt='Formula' />
        </div>
        <form
          className='w-auto h-auto shadow-md  bg-primary30 p-2 flex justify-center items-center'
          onSubmit={(e) => e.preventDefault()}
        >
          <div className='flex flex-col w-1/2'>
            <h1 className='text-5xl text-[#fff] mb-8'>Welcome!</h1>

            <div className='relative mb-4'>
              <label htmlFor='user' className='sr-only'>
                {' '}
                User{' '}
              </label>
              <input
                type='text'
                id='user'
                placeholder='User'
                autoComplete='username'
                className='w-full rounded-md p-2 shadow-md outline-none'
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />

              <span className='pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center'>
                <PersonIcon sx={{ color: '#3f3d56' }} />
              </span>
            </div>
            <div className='relative mb-6'>
              <label htmlFor='password' className='sr-only'>
                {' '}
                Password{' '}
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                autoComplete='current-password'
                className='w-full rounded-md p-2 shadow-md outline-none'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className='absolute inset-y-0 end-0 grid w-10 place-content-center'>
                <button type='button' onClick={handleShowPassword}>
                  {showPassword ? (
                    <VisibilityOffIcon sx={{ color: '#3f3d56' }} />
                  ) : (
                    <VisibilityIcon sx={{ color: '#3f3d56' }} />
                  )}
                </button>
              </span>
            </div>
            <button
              type='submit'
              className='flex items-center justify-center gap-2 bg-cta  rounded-md p-2 outline-none w-1/2 shadow-md text-[#fff]'
              onClick={() => login()}
            >
              Sign In
              {<LoginIcon />}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
