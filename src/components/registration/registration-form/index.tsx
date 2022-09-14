import React from 'react';
import * as S from './style';

const RegistrationForm = () => {
  return (
    <S.RegistrationForm>
      <S.RegistrationFormLogo src="/skyprofy-ts/img/logo-black.png" alt="logo"/>
      <S.RegistrationFormInput placeholder='Логин' type='text'/>
      <S.RegistrationFormInput placeholder='Пароль' type='password'/>
      <S.RegistrationFormInput placeholder='Повторите пароль' type='password'/>
      <S.RegistrationFormButton>Зарегистрироваться</S.RegistrationFormButton>
    </S.RegistrationForm>
  );
};

export default RegistrationForm;
