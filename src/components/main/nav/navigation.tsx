import React, { useState } from 'react';
import Menu from './menu/menu';
import BurgerLines from './burger/burger';
import * as S from './nav.style';

interface PropsType {
  src: string,
  alt: string,
}

const Logo = ({ src, alt }: PropsType) => {
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
        <Logo src="img/logo.png" alt="logo"/>
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
