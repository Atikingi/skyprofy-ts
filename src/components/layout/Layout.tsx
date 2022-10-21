import React, { useContext } from 'react';
import Navigation from '../main/nav';
import Sidebar from '../main/sidebar';
import * as S from './style';
import GlobalStyles from '../../style/global';
import { ThemeContext } from '../context/themeContext';
import { useSelector } from 'react-redux';
import Bar from '../bar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.Wrapper isDarkTheme={isDarkTheme}>
      <S.Container isDarkTheme={isDarkTheme}>
        <main>
          <Navigation />
          {children}
          <Sidebar />
        </main>
        <Bar/>
      </S.Container>
      <GlobalStyles />
    </S.Wrapper>
  );
};

export default Layout;
