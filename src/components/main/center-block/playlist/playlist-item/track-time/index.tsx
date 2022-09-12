import React from 'react';
import { Skeleton } from '../../../../../UI/skeletons/style';
import SvgImage from '../../../../../svg';
import * as S from './style';

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
          <S.TrackTimeSVGWRapper>
            <SvgImage href="img/icon/sprite.svg#icon-like" ariaLabel="time" />
          </S.TrackTimeSVGWRapper>
          <S.TrackTimeText>{trackTime}</S.TrackTimeText>
        </S.TrackTimeWrapper>
      }
    </S.TrackTime>
  );
};

export default TrackTime;
