import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/routes/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Container = () => {
  const isLogin = Boolean(localStorage.getItem('token'));
  return (
    <BrowserRouter>
        <AppRoutes isLogin={isLogin} />
    </BrowserRouter>
  );
};

root.render(<Container />);
