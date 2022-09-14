import React from 'react';
import Navigation from '../main/nav';
import Sidebar from '../main/sidebar';
import Bar from '../bar';
import * as S from './style';
import GlobalStyles from '../../style/global';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <S.Container>
        <main>
          <Navigation />
          {children}
          <Sidebar />
          <Bar />
        </main>
      </S.Container>
      <GlobalStyles />
    </S.Wrapper>
  );
};

export default Layout;
