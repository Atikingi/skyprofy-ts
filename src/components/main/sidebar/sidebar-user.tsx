import React, { FC } from 'react';
import { UserInfo } from '../../../types';

const SidebarUser: FC<UserInfo> = ({ name }) => {
  return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{name}</p>
            <div className="sidebar__avatar"></div>
        </div>
  );
};

export default SidebarUser;
