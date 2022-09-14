import React from 'react';
import { ShowHideMenu } from '../../../../types';
import * as S from './style';
import { NavLink } from 'react-router-dom';

interface Props {
  text: string;
}

const MenuList = ({ text }: Props) => {
  return <S.MenuItem>{text}</S.MenuItem>;
};

const Menu = ({ menuActive }: ShowHideMenu) => {
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
          <MenuList text="Выйти"/>
        </NavLink>
      </S.MenuList>
    </S.Menu>
  );
};

export default Menu;
