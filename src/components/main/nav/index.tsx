import React, { useState } from 'react';
import Menu from './menu';
import BurgerLines from './burger';
import * as S from './style';

interface Props {
  src: string,
  alt: string,
}

const Logo = ({ src, alt }: Props) => {
  return (
      <S.NavigationLogo>
          <S.LogoImage src={src} alt={alt}></S.LogoImage>
      </S.NavigationLogo>
  );
};

const Navigation = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
      <S.Navigation>
        <Logo src="/img/logo.png" alt="logo"/>
        <S.Burger onClick={() => setMenuActive((!menuActive))}>
          <BurgerLines menuActive={menuActive}/>
          <BurgerLines menuActive={menuActive}/>
          <BurgerLines menuActive={menuActive}/>
        </S.Burger>
        <Menu menuActive={menuActive} />
      </S.Navigation>
  );
};

export default Navigation;
