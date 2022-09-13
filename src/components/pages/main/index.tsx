import React from 'react';
import Navigation from '../../main/nav';
import CenterBlock from '../../main/center-block';
import Sidebar from '../../main/sidebar';
import Bar from '../../bar';
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
