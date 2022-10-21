import React, { ChangeEvent, useState } from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import LoginButton from '../login-button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  return (
    <S.LoginForm onSubmit={(e) => console.log('SUBMIT')}>
      <S.LoginLogo src="/skyprofy-ts/img/logo-black.png" alt="logo" />
      <S.LoginInput placeholder="Логин (email)" type='text' onChange={handleNameChange}/>
      <S.LoginInput placeholder="Пароль" type='password' onChange={handlePasswordChange}/>
      <LoginButton email={email} password={password}/>
      <Link to="/skyprofy-ts/registration">
        <S.RegistrationButton>Зарегистрироваться</S.RegistrationButton>
      </Link>
    </S.LoginForm>
  );
};

export default LoginForm;
