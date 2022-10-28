import React from 'react';
import * as S from './style';

const TrackSkeleton = () => {
  return (
    <S.TrackSkeletonWrapper>
      <S.TrackTitleWrapper>
        <S.TrackImageSkeleton />
        <S.TrackTitleSkeleton />
      </S.TrackTitleWrapper>
      <S.TrackAuthorSkeleton />
      <S.TrackAlbumSkeleton />
      <S.TrackTimeSkeleton />
    </S.TrackSkeletonWrapper>
  );
};

export default TrackSkeleton;
