import React, { FC } from 'react';
import SidebarUser from './sidebar-user';
import SidebarList from './sidebar-list';

const Sidebar: FC = () => {
  return (
        <div className="main__sidebar sidebar">
            <SidebarUser name="Igumentsev Nikita"/>
            <div className="sidebar__block">
                <SidebarList/>
            </div>
        </div>
  );
};

export default Sidebar;
