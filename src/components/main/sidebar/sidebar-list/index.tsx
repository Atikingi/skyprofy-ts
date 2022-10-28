import { Link } from 'react-router-dom';
import React from 'react';
import SidebarListItem from '../sidebar-item';
import { useGetPlaylistsQuery } from '../../../../services/music';
import { CustomPlaylistProps } from '../../../../types';
import * as S from '../style';

const SidebarList = () => {
  let content;

  const { data, isSuccess, isLoading } = useGetPlaylistsQuery('');

  if (isSuccess) {
    content = data?.map(({ id }: CustomPlaylistProps) => (
      <Link to={`/skyprofy-ts/playlist/${id}`} key={id}>
        <SidebarListItem
          id={id}
          src={`/skyprofy-ts/img/playlist0${id}.png`}
          isLoading={isLoading}
        />
      </Link>
    ));
  }

  return <S.SidebarList>{content}</S.SidebarList>;
};

export default SidebarList;
