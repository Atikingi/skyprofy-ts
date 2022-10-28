import React from 'react';
import SidebarUser from './sidebar-user';
import SidebarList from './sidebar-list';
import getCookie from '../../../utils/get-cookie';
import * as S from './style';

const Sidebar = () => {
  const username = getCookie('username');

  return (
    <S.Sidebar>
      <SidebarUser name={username} />
      <S.SidebarBlock>
        <SidebarList />
      </S.SidebarBlock>
    </S.Sidebar>
  );
};

export default Sidebar;
