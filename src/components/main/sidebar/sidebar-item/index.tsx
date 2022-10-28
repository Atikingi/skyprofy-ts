import React from 'react';
import { getPlaylistId } from '../../../../store/slices/playlistsSlice';
import { useDispatch } from 'react-redux';
import * as S from '../style';
import * as Skeleton from '../../../UI/skeletons/style';

interface Props {
  src: string;
  isLoading: boolean;
  id: string;
}

const SidebarListItem = ({ src, isLoading, id }: Props) => {
  let sidebarItem;

  const dispatch = useDispatch();

  const onPlaylistId = (e: React.MouseEvent<HTMLImageElement>) => {
    dispatch(getPlaylistId((e.target as HTMLImageElement).id));
  };

  if (isLoading) {
    sidebarItem = <Skeleton.Skeleton />;
  } else {
    sidebarItem = (
      <S.SidebarImage src={src} id={id} onClick={(e) => onPlaylistId(e)} />
    );
  }
  return (
    <div>
      <S.SidebarItem>{sidebarItem}</S.SidebarItem>
    </div>
  );
};

export default SidebarListItem;
