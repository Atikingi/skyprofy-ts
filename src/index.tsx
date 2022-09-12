import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main';
import * as S from './style/style';
import GlobalStyles from './style/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Container: FC = () => {
  return (

    <S.Wrapper>
      <S.Container>
        <Main />
      </S.Container>
      <GlobalStyles/>
    </S.Wrapper>
  );
};

root.render(<Container />);
