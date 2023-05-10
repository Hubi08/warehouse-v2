import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const apiUrl = 'https://kacperd.com:2053';
export let headers;

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authorized: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await localStorage.getItem('bearerToken');

      if (token) {
        headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        };

        setAuthState({
          token: token,
          authorized: true,
        });
      }
    };
    loadToken();
  }, []);

  const login = async (user, password) => {
    try {
      const response = await axios.post(apiUrl + '/Auth', {
        emailAddress: user,
        password: password,
      });

      setAuthState({
        token: response.data.token,
        authorized: true,
      });

      localStorage.setItem('bearerToken', response.data.token);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await localStorage.removeItem('bearerToken');
    setAuthState({
      token: null,
      authorized: false,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
