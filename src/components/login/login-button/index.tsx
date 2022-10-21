import React, { useEffect } from 'react';
import * as S from './style';
import { useGetTokenMutation, useUserLoginMutation } from '../../../services/music';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setToken } from '../../../store/slices/authSlice';
import { Navigate } from 'react-router-dom';

interface Props {
  email: string,
  password: string
}

const LoginButton = ({ email, password }: Props) => {
  const dispatch = useDispatch();

  const isLogin = useSelector((state: any) => state.auth.isLogin);

  const [login, { data, isSuccess, isError, error }] = useUserLoginMutation();
  const [getToken, { data: token, isError: isTokenError, error: tokenError }] = useGetTokenMutation();

  const onSubmitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Вы не ввели данные');
    } else {
      login({
        email,
        password
      });

      getToken({
        email,
        password
      });
      console.log('form SUBMIT');
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

  if (isTokenError) {
    console.log(tokenError);
  }

  return (
    <React.Fragment>
      {isError && <S.ErrorMessage>{error.data.non_field_errors[0]}</S.ErrorMessage>}
      {isTokenError && <S.ErrorMessage>{tokenError.data.detail}</S.ErrorMessage>}
      <S.LoginButton onClick={(e) => onSubmitForm(e)}>Войти</S.LoginButton>
      {isLogin && <Navigate to='/skyprofy-ts/main' replace={true}/>}
    </React.Fragment>
  );
};

export default LoginButton;
