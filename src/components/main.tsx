import React, { ReactElement } from 'react';
import Navigation from './main/nav/navigation';
import CenterBlock from './main/center-block/center-block';
import Sidebar from './main/sidebar/sidebar';

const Main = (): ReactElement<HTMLDivElement> => {
  return (
        <main className="main">
            <Navigation />
            <CenterBlock/>
            <Sidebar/>
        </main>
  );
};

export default Main;
