import React, { ChangeEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserSignupMutation } from '../../../services/music';
import * as S from './style';

interface Error {
  data: {
    password: string
  }
}

const RegistrationForm = () => {
  const [signup, { isSuccess, isError, error }] = useUserSignupMutation();

  const [userValues, setUserValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [validatePassword, setValidatePassword] = useState('');

  const onSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (userValues.password === validatePassword) {
      void signup(userValues);
    } else {
      alert('Пароли не совпадают');
    }
  };

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserValues({
      ...userValues,
      username: (e.target as HTMLInputElement).value
    });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserValues({
      ...userValues,
      email: (e.target as HTMLInputElement).value
    });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserValues({
      ...userValues,
      password: (e.target as HTMLInputElement).value
    });
  };

  const handleValidatePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValidatePassword((e.target as HTMLInputElement).value);
  };

  return (
    <S.RegistrationForm>
      <S.RegistrationFormLogo
        src="/skyprofy-ts/img/logo-black.png"
        alt="logo"
      />
      <S.RegistrationFormInput
        onChange={handleLoginChange}
        placeholder="Логин"
        type="text"
      />
      <S.RegistrationFormInput
        onChange={handleEmailChange}
        placeholder="Email"
        type="text"
      />
      <S.RegistrationFormInput
        onChange={handlePasswordChange}
        placeholder="Пароль"
        type="password"
      />
      <S.RegistrationFormInput
        onChange={handleValidatePasswordChange}
        placeholder="Повторите пароль"
        type="password"
      />
      <S.RegistrationFormButton onClick={(e) => onSignup(e)}>
        Зарегистрироваться
      </S.RegistrationFormButton>
      {isError && (
        <S.ErrorPasswordMessage>
          {(error as Error).data.password[0]}
        </S.ErrorPasswordMessage>
      )}
      ;{isSuccess && <Navigate to="/skyprofy-ts/login" replace={true} />}
    </S.RegistrationForm>
  );
};

export default RegistrationForm;
