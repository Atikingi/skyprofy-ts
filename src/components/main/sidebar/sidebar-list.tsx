import React, { FC } from 'react';
import { SidebarItem } from '../../../types';

const SidebarListItem: FC <SidebarItem> = ({ href, src, alt }) => {
  return (
      <div className="sidebar__item">
        <a className="sidebar__link" href={href}>
          <img className="sidebar__img" src={src} alt={alt}/>
        </a>
      </div>
  );
};

const SidebarList: FC = () => {
  return (
        <div className="sidebar__list">
          <SidebarListItem href="#" src="img/playlist01.png" alt="day's playlist"/>
          <SidebarListItem href="#" src="img/playlist02.png" alt="100th hits"/>
          <SidebarListItem href="#" src="img/playlist03.png" alt="Indi charge"/>
        </div>
  );
};

export default SidebarList;
