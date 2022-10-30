import { Navigate } from 'react-router-dom';
import { setLogin, setToken } from '../../../store/slices/authSlice';
import React, { useEffect } from 'react';
import {
  useGetTokenMutation,
  useUserLoginMutation
} from '../../../services/music';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/hooks';
import * as S from './style';

interface Props {
  email: string;
  password: string;
}

interface Error {
  data: {
    non_field_errors: string[],
    detail: string
  }
}

const LoginButton = ({ email, password }: Props) => {
  const dispatch = useDispatch();

  const isLogin = useAppSelector((state) => state.auth.isLogin);

  const [login, { data, isSuccess, error }] = useUserLoginMutation();
  const [getToken, { data: token, error: tokenError }] =
    useGetTokenMutation();

  const onSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Вы не ввели данные');
    } else {
      void login({
        email,
        password
      });

      void getToken({
        email,
        password
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      document.cookie = `username=${data?.username}`;
      dispatch(setToken(token?.access));
      document.cookie = `token=${token?.refresh}`;
      dispatch(setLogin());
    }
  }, [token]);

  return (
    <React.Fragment>
      {error && (
        <S.ErrorMessage>{(error as Error).data.non_field_errors[0]}</S.ErrorMessage>
      )}
      {tokenError && (
        <S.ErrorMessage>{(tokenError as Error).data.detail}</S.ErrorMessage>
      )}
      <S.LoginButton type='button' onClick={(e) => onSubmitForm(e)}>Войти</S.LoginButton>
      {isLogin && <Navigate to="/skyprofy-ts/main" replace={true} />}
    </React.Fragment>
  );
};

export default LoginButton;
