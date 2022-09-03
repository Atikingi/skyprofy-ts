import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main/main';
import Footer from './components/footer';
import './style/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Container: FC = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
          <Footer />
      </div>
    </div>
  );
};

root.render(<Container />);
