import React, { ReactElement } from 'react';
import Navigation from './navigation';

const Main = (): ReactElement<HTMLDivElement> => {
  return (
        <main className="main">
            <Navigation />
        </main>
  );
};

export default Main;
