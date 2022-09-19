import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/routes/routes';
import './fonts/stratos/Stratos-Regular.woff';
import './fonts/stratos/Stratos-Regular.woff2';
import { ThemeContext } from './components/context/themeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Container = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const isLogin = Boolean(localStorage.getItem('token'));

  return (
    <ThemeContext.Provider value={{
      isDarkTheme,
      toggleTheme
    }}>
      <BrowserRouter>
        <AppRoutes isLogin={isLogin} />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

root.render(<Container />);
