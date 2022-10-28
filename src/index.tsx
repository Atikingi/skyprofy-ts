import React, { useState } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/routes/routes';
import './fonts/stratos/Stratos-Regular.woff';
import './fonts/stratos/Stratos-Regular.woff2';
import { ThemeContext } from './components/context/themeContext';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Container = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{
        isDarkTheme,
        toggleTheme
      }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};

root.render(<Container />);
