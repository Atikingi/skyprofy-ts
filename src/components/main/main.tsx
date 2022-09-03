import React, { FC } from 'react';
import Navigation from './nav/navigation';
import CenterBlock from './center-block/center-block';
import Sidebar from './sidebar/sidebar';
import Bar from '../bar/bar';

const Main: FC = () => {
  return (
        <main className="main">
            <Navigation />
            <CenterBlock/>
            <Sidebar/>
            <Bar/>
        </main>
  );
};

export default Main;
