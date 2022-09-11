import React from 'react';
import Navigation from './nav/navigation';
import CenterBlock from './center-block/center-block';
import Sidebar from './sidebar/sidebar';
import Bar from '../bar/bar';
import { Main } from './main.style';

const MainElement = () => {
  return (
    <Main>
      <Navigation/>
      <CenterBlock/>
      <Sidebar/>
      <Bar/>
    </Main>
  );
};

export default MainElement;
