import React, { useEffect, useState } from 'react';
import SidebarListItem from './sidebar-item';
import * as S from './sidebar.style';

const SidebarList = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  });

  return (
        <S.SidebarList>
          <SidebarListItem href="#" src="img/playlist01.png" alt="day's playlist" isLoading={isLoading}/>
          <SidebarListItem href="#" src="img/playlist02.png" alt="100th hits" isLoading={isLoading}/>
          <SidebarListItem href="#" src="img/playlist03.png" alt="Indie charge" isLoading={isLoading}/>
        </S.SidebarList>
  );
};

export default SidebarList;
