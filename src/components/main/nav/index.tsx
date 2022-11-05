import React, { useContext, useState } from 'react';
import Menu from './menu';
import BurgerLines from './burger';
import { useDispatch } from 'react-redux';
import { showMenu } from '../../../store/slices/playlistsSlice';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';

interface Props {
  src: string;
  alt: string;
}

const Logo = ({ src, alt }: Props) => {
  return (
    <S.NavigationLogo>
      <S.LogoImage src={src} alt={alt}></S.LogoImage>
    </S.NavigationLogo>
  );
};

const Navigation = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const [menuActive, setMenuActive] = useState<boolean>(false);

  const toggleMenuVisible = () => {
    setMenuActive(!menuActive);
    dispatch(showMenu());
  };

  return (
    <S.Navigation isDarkTheme={isDarkTheme}>
      <Logo src="/skyprofy-ts/img/logo.png" alt="logo" />
      <S.Burger onClick={toggleMenuVisible}>
        <BurgerLines menuActive={menuActive} />
        <BurgerLines menuActive={menuActive} />
        <BurgerLines menuActive={menuActive} />
      </S.Burger>
      <Menu menuActive={menuActive} />
    </S.Navigation>
  );
};

export default Navigation;
