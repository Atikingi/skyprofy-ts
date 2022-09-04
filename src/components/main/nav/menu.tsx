import React, { FC } from 'react';
import { MenuLink } from '../../../types';

const MenuList: FC<MenuLink> = ({ href, text }) => {
  return (
        <li className="menu__list">
            <a className="menu__link" href={href}>{text}</a>
        </li>
  );
};

const Menu: FC = () => {
  return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <MenuList href="#" text="Главное"/>
                <MenuList href="#" text="Мой плейлист"/>
                <MenuList href="#" text="Войти"/>
            </ul>
        </div>
  );
};

export default Menu;
