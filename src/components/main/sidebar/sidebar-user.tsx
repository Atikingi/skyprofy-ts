import React from 'react';
import { UserInfo } from '../../../types';

const SidebarUser = ({ name }: UserInfo) => {
  return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{name}</p>
            <div className="sidebar__avatar"></div>
        </div>
  );
};

export default SidebarUser;
