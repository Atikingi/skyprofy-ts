import React, { ReactElement } from 'react';
import Burger from './burger';
import Menu from './menu';

interface LogoProps {
  src: string
  alt: string
}

function Logo ({ src, alt }: LogoProps): ReactElement<HTMLDivElement> {
  return (
      <div className="nav__logo logo">
          <img className="logo__image" src={src} alt={alt}></img>
      </div>
  );
}

function Navigation (): ReactElement<HTMLElement> {
  return (
      <nav className="main__nav nav">
        <Logo src="img/logo.png" alt="logo"/>
        <Burger/>
        <Menu/>
      </nav>
  );
}

export default Navigation;
