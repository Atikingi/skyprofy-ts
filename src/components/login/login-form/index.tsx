import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const doFakeLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.setItem('token', ' ');
  };
  return (
    <S.LoginForm>
      <S.LoginLogo src="/skyprofy-ts/img/logo-black.png" alt="logo" />
      <S.LoginInput placeholder="Логин" type='text'/>
      <S.LoginInput placeholder="Пароль" type='password'/>
      <S.LoginButton onClick={(e) => doFakeLogin(e)}>Войти</S.LoginButton>
      <Link to="/skyprofy-ts/registration">
        <S.RegistrationButton>Зарегистрироваться</S.RegistrationButton>
      </Link>
    </S.LoginForm>
  );
};

export default LoginForm;
