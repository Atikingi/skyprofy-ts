import React, { useContext } from 'react';
import * as S from '../style';
import { ThemeContext } from '../../../context/themeContext';

interface Props {
  name: string | undefined,
}

const SidebarUser = ({ name }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
        <S.SidebarUser>
            <S.SidebarUserName isDarkTheme={isDarkTheme}>{name}</S.SidebarUserName>
            <S.SidebarUserAvatar></S.SidebarUserAvatar>
        </S.SidebarUser>
  );
};

export default SidebarUser;
