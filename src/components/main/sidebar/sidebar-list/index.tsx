import React from 'react';
import SidebarListItem from '../sidebar-item';
import * as S from '../style';
import { Link } from 'react-router-dom';
import { useGetPlaylistsQuery } from '../../../../services/music';

const SidebarList = () => {
  let content;
  let arr;

  const { data, isSuccess, isLoading } = useGetPlaylistsQuery();

  if (isSuccess) {
    arr = data?.results;
    console.log(arr);
    content = arr.map(({
      id
    }: any) => (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        <Link to={`/skyprofy-ts/playlist/${id}`} key={id}>
          <SidebarListItem
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            id={id}
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            src={`/skyprofy-ts/img/playlist0${id}.png`}
            isLoading={isLoading}
          />
        </Link>
    ));
  }

  return (
    <S.SidebarList>
      {content}
    </S.SidebarList>
  );
};

export default SidebarList;
