import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main';
import './types';
import './style/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Container (): ReactElement<HTMLDivElement> {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

root.render(<Container />);
