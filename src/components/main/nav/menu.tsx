import React, { ReactElement } from 'react';

interface MenuLink {
  href: string
  text: string
}

function MenuList ({ href, text }: MenuLink): ReactElement<HTMLLIElement> {
  return (
        <li className="menu__list">
            <a className="menu__link" href={href}>{text}</a>
        </li>
  );
}

function Menu (): ReactElement<HTMLDivElement> {
  return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <MenuList href="#" text="Главное"/>
                <MenuList href="#" text="Мой плейлист"/>
                <MenuList href="#" text="Войти"/>
            </ul>
        </div>
  );
}

export default Menu;
