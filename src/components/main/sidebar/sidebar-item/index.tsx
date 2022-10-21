import React from 'react';
import * as S from '../style';
import * as Skeleton from '../../../UI/skeletons/style';
import { useDispatch } from 'react-redux';
import { getPlaylistId } from '../../../../store/slices/playlistsSlice';

interface Props {
  src: string;
  isLoading: boolean;
  id: string
}

const SidebarListItem = ({ src, isLoading, id }: Props) => {
  let sidebarItem;

  const dispatch = useDispatch();

  const onPlaylistId = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(getPlaylistId((e.target as HTMLImageElement).id));
  };

  if (isLoading) {
    sidebarItem = <Skeleton.Skeleton/>;
  } else {
    sidebarItem = <S.SidebarImage src={src} id={id} onClick={(e) => onPlaylistId(e)}/>;
  }
  return (
    <div>
       <S.SidebarItem>
          {sidebarItem}
      </S.SidebarItem>
    </div>
  );
};

export default SidebarListItem;
