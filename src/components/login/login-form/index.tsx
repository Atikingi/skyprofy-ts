import { Link } from 'react-router-dom';
import LoginButton from '../login-button';
import React, { ChangeEvent, useState } from 'react';
import * as S from './style';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = ({ target }: ChangeEvent) => {
    setEmail((target as HTMLInputElement)?.value);
  };

  const handlePasswordChange = ({ target }: ChangeEvent) => {
    setPassword((target as HTMLInputElement)?.value);
  };

  return (
    <S.LoginForm>
      <S.LoginLogo src="/skyprofy-ts/img/logo-black.png" alt="logo" />
      <S.LoginInput
        placeholder="Логин (email)"
        type="text"
        onChange={handleNameChange}
      />
      <S.LoginInput
        placeholder="Пароль"
        type="password"
        onChange={handlePasswordChange}
      />
      <LoginButton email={email} password={password} />
      <Link to="/skyprofy-ts/registration">
        <S.RegistrationButton>Зарегистрироваться</S.RegistrationButton>
      </Link>
    </S.LoginForm>
  );
};

export default LoginForm;
