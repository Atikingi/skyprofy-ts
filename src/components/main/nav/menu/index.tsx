import React, { useContext } from 'react';
import { ShowHideMenu } from '../../../../types';
import * as S from './style';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../context/themeContext';
import LightThemeIcon from '../../../icons/lightThemeIcon';
import DarkThemeIcon from '../../../icons/darkThemeIcon';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../../../store/slices/authSlice';

interface Props {
  text: string;
}

const MenuList = ({ text }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return <S.MenuItem isDarkTheme={isDarkTheme}>{text}</S.MenuItem>;
};

const Menu = ({ menuActive }: ShowHideMenu) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setLogout());
    document.cookie = 'token=; path=/; expires=-1';
    document.cookie = 'username=; path=/; expires=-1';
  };

  return (
    <S.Menu active={menuActive}>
      <S.MenuList>
        <NavLink to="/skyprofy-ts">
          <MenuList text="Главное" />
        </NavLink>
        <NavLink to="/skyprofy-ts/personal">
          <MenuList text="Мой плейлист" />
        </NavLink>
        <NavLink to="/skyprofy-ts" onClick={onLogout}>
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
