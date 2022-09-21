import React, { useContext } from 'react';
import { ShowHideMenu } from '../../../../types';
import * as S from './style';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../context/themeContext';
import LightThemeIcon from '../../../icons/lightThemeIcon';
import DarkThemeIcon from '../../../icons/darkThemeIcon';

interface Props {
  text: string;
}

const MenuList = ({ text }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return <S.MenuItem isDarkTheme={isDarkTheme}>{text}</S.MenuItem>;
};

const Menu = ({ menuActive }: ShowHideMenu) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.Menu active={menuActive}>
      <S.MenuList>
        <NavLink to="/skyprofy-ts">
          <MenuList text="Главное" />
        </NavLink>
        <NavLink to="/skyprofy-ts/personal">
          <MenuList text="Мой плейлист" />
        </NavLink>
        <NavLink to="/skyprofy-ts">
          <MenuList text="Выйти" />
        </NavLink>
        <S.ThemeToggleButtonWrapper isDarkTheme={isDarkTheme} onClick={toggleTheme}>
          {isDarkTheme
            ? <DarkThemeIcon/>
            : <LightThemeIcon/>
          }
        </S.ThemeToggleButtonWrapper>
      </S.MenuList>
    </S.Menu>
  );
};

export default Menu;
