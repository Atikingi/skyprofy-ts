import { useDispatch } from 'react-redux';
import getCookie from './get-cookie';
import { useRefreshTokenMutation } from '../services/music';
import { useEffect } from 'react';
import { setLogin, setToken } from '../store/slices/authSlice';

export const refreshToken = () => {
  const dispatch = useDispatch();
  const tokenCookie = getCookie('token');
  const [getToken, { data, isSuccess }] = useRefreshTokenMutation();

  useEffect(() => {
    if (tokenCookie) {
      getToken({ refresh: tokenCookie });

      dispatch(setLogin());
      setInterval(() => {
        getToken({ refresh: tokenCookie });
      }, 600000);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.access));
    }
  }, [data]);
};
