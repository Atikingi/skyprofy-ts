import React from 'react';
import { ShowHideMenu } from '../../../../types';
import * as S from './style';

interface Props {
  href: string;
  text: string;
}

const MenuList = ({ href, text }: Props) => {
  return (
    <S.MenuItem>
      <S.MenuLink href={href}>{text}</S.MenuLink>
    </S.MenuItem>
  );
};

const Menu = ({ menuActive }: ShowHideMenu) => {
  return (
    <S.Menu active={menuActive}>
      <S.MenuList>
        <MenuList href="#" text="Главное" />
        <MenuList href="#" text="Мой плейлист" />
        <MenuList href="#" text="Войти" />
      </S.MenuList>
    </S.Menu>
  );
};

export default Menu;
