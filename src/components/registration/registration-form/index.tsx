import React from 'react';
import * as S from './style';

const RegistrationForm = () => {
  return (
    <S.RegistrationForm>
      <S.RegistrationFormLogo src="/img/logo-black.png" alt="logo"/>
      <S.RegistrationFormInput placeholder='Логин'/>
      <S.RegistrationFormInput placeholder='Пароль'/>
      <S.RegistrationFormInput placeholder='Повторите пароль'/>
      <S.RegistrationFormButton>Зарегистрироваться</S.RegistrationFormButton>
    </S.RegistrationForm>
  );
};

export default RegistrationForm;
