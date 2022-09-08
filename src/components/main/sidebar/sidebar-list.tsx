import React, { useEffect, useState } from 'react';
import SidebarListItem from './sidebar-item';

const SidebarList = () => {
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false);
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  });

  return (
        <div className="sidebar__list">
          <SidebarListItem href="#" src="img/playlist01.png" alt="day's playlist" isLoading={status}/>
          <SidebarListItem href="#" src="img/playlist02.png" alt="100th hits" isLoading={status}/>
          <SidebarListItem href="#" src="img/playlist03.png" alt="Indie charge" isLoading={status}/>
        </div>
  );
};

export default SidebarList;
