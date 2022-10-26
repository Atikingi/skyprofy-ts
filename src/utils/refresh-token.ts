import { useDispatch } from 'react-redux';
import { useRefreshTokenMutation } from '../services/music';
import { useEffect } from 'react';
import { setLogin, setToken } from '../store/slices/authSlice';
import getCookie from './get-cookie';

export const refreshToken = () => {
  const dispatch = useDispatch();
  const tokenCookie = getCookie('token');
  const [getToken, { data, isSuccess }] = useRefreshTokenMutation();

  useEffect(() => {
    if (tokenCookie) {
      void getToken({ refresh: tokenCookie });

      dispatch(setLogin());
      setInterval(() => {
        void getToken({ refresh: tokenCookie });
      }, 600000);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.access));
    }
  }, [data]);
};
