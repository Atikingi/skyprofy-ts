import React from 'react';
import { Skeleton } from '../../../../../UI/skeletons/style';
import * as S from './style';

interface Props {
  isLoading: boolean,
  trackAlbumLink: string,
  trackAlbumText: string
}

const TrackAlbum = ({
  isLoading,
  trackAlbumLink,
  trackAlbumText
}: Props) => {
  return (
    <S.TrackAlbum>
      {isLoading
        ? <Skeleton/>
        : <S.TrackAlbumLink href={trackAlbumLink}>
          {trackAlbumText}
        </S.TrackAlbumLink>}
    </S.TrackAlbum>
  );
};

export default TrackAlbum;
