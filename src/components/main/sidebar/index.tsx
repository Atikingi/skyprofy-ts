import React from 'react';
import SidebarUser from './sidebar-user';
import SidebarList from './sidebar-list';
import * as S from './style';

const Sidebar = () => {
  return (
        <S.Sidebar>
            <SidebarUser name="Igumentsev Nikita"/>
            <S.SidebarBlock>
                <SidebarList />
            </S.SidebarBlock>
        </S.Sidebar>
  );
};

export default Sidebar;
