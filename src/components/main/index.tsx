import React from 'react';
import Navigation from './nav';
import CenterBlock from './center-block';
import Sidebar from './sidebar';
import Bar from '../bar';
import * as S from './style';

const Main = () => {
  return (
    <S.Main>
      <Navigation/>
      <CenterBlock/>
      <Sidebar/>
      <Bar/>
    </S.Main>
  );
};

export default Main;
