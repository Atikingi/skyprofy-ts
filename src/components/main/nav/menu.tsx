import React from 'react';
import { ShowHideMenu } from '../../../types';

interface PropsType {
  href: string,
  text: string,
}

const MenuList = ({ href, text }: PropsType) => {
  return (
        <li className="menu__list">
            <a className="menu__link" href={href}>{text}</a>
        </li>
  );
};

const Menu = ({ menuActive }: ShowHideMenu) => {
  return (
  <div className={menuActive ? 'nav__menu_active menu' : 'nav__menu menu'}>
            <ul className="menu__list">
                <MenuList href="#" text="Главное"/>
                <MenuList href="#" text="Мой плейлист"/>
                <MenuList href="#" text="Войти"/>
            </ul>
        </div>
  );
};

export default Menu;
