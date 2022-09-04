import React, { FC } from 'react';
import Burger from './burger';
import Menu from './menu';
import { LogoProps } from '../../../types';

const Logo: FC<LogoProps> = ({ src, alt }) => {
  return (
      <div className="nav__logo logo">
          <img className="logo__image" src={src} alt={alt}></img>
      </div>
  );
};

const Navigation: FC = () => {
  return (
      <nav className="main__nav nav">
        <Logo src="img/logo.png" alt="logo"/>
        <Burger/>
        <Menu/>
      </nav>
  );
};

export default Navigation;
