import React from 'react';
import { Skeleton } from '../../../../../UI/skeletons/style';
import * as S from './style';
import LikeIcon from '../../../../../icons/likeIcon';

interface Props {
  isLoading: boolean;
  trackTime: string;
}

const TrackTime = ({ isLoading, trackTime }: Props) => {
  return (
    <S.TrackTime>
      {isLoading
        ? <Skeleton />
        : <S.TrackTimeWrapper>
          <S.TrackLikeIconWrapper>
            <LikeIcon aria-label='like'/>
          </S.TrackLikeIconWrapper>
          <S.TrackTimeText>{trackTime}</S.TrackTimeText>
        </S.TrackTimeWrapper>
      }
    </S.TrackTime>
  );
};

export default TrackTime;
