import React from 'react';
import GlobalStyles from '../../style/global';
import * as S from './style';

interface Props {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <S.Container>
        {children}
        <GlobalStyles />
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginLayout;
