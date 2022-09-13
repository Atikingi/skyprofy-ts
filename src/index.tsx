import React from 'react';
import ReactDOM from 'react-dom/client';
import * as S from './style/style';
import GlobalStyles from './style/global';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Container = () => {
  const isLogin = Boolean(localStorage.getItem('token'));
  return (
    <BrowserRouter>
      <S.Wrapper>
        <S.Container>
          <AppRoutes isLogin={isLogin}/>
        </S.Container>
        <GlobalStyles />
      </S.Wrapper>
    </BrowserRouter>
  );
};

root.render(<Container />);
