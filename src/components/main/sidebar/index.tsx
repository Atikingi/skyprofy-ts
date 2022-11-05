import React, { useContext } from 'react';
import SidebarUser from './sidebar-user';
import SidebarList from './sidebar-list';
import getCookie from '../../../utils/get-cookie';
import { useAppSelector } from '../../../store/hooks';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';

const Sidebar = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const isShowMenu = useAppSelector(state => state.playlists.isShow);

  const username = getCookie('username');

  return (
    <S.Sidebar isDarkTheme={isDarkTheme} isShow={isShowMenu}>
      <SidebarUser name={username} />
      <S.SidebarBlock>
        <SidebarList />
      </S.SidebarBlock>
    </S.Sidebar>
  );
};

export default Sidebar;
