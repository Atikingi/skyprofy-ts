import React from 'react';
import { Skeleton } from '../../../../../UI/skeletons/skeletons.style';
import * as S from './track-album.style';

interface PropsType {
  isLoading: boolean,
  trackAlbumLink: string,
  trackAlbumText: string
}

const TrackAlbum = ({
  isLoading,
  trackAlbumLink,
  trackAlbumText
}: PropsType) => {
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
