import { createContext } from 'react';

interface Props {
  isDarkTheme: boolean,
  toggleTheme?: () => void
}

const defaultTheme = {
  isDarkTheme: true
};

export const ThemeContext = createContext<Props>(defaultTheme);
