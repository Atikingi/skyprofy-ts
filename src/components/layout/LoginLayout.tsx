import React, { useContext } from 'react';
import GlobalStyles from '../../style/global';
import * as S from './style';
import { ThemeContext } from '../context/themeContext';

interface Props {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.Wrapper isDarkTheme={isDarkTheme}>
      <S.Container isDarkTheme={isDarkTheme}>
        {children}
        <GlobalStyles />
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginLayout;
