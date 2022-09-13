import React, { useEffect, useState } from 'react';
import SidebarListItem from '../sidebar-item';
import * as S from '../style';
import { Link } from 'react-router-dom';

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
      <Link to="/playlist/1">
        <SidebarListItem
          src="/img/playlist01.png"
          alt="day's playlist"
          isLoading={isLoading}
        />
      </Link>
      <Link to="/playlist/2">
        <SidebarListItem
          src="/img/playlist02.png"
          alt="100th hits"
          isLoading={isLoading}
        />
      </Link>
      <Link to="/playlist/3">
        <SidebarListItem
          src="/img/playlist03.png"
          alt="Indie charge"
          isLoading={isLoading}
        />
      </Link>
    </S.SidebarList>
  );
};

export default SidebarList;
