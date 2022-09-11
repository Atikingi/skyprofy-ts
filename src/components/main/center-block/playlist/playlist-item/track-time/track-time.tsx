import React from 'react';
import { Skeleton } from '../../../../../UI/skeletons/skeletons.style';
import SvgImage from '../../../../../svg/svg-image';
import * as S from './track-time.style';

interface PropsType {
  isLoading: boolean;
  trackTime: string;
}

const TrackTime = ({
  isLoading,
  trackTime
}: PropsType) => {
  return (
    <S.TrackTime>
      {isLoading
        ? <Skeleton/>
        : <S.TrackTimeWrapper>
          <S.TrackTimeSVGWRapper>
            <SvgImage
              href="img/icon/sprite.svg#icon-like"
              ariaLabel="time"
            />
          </S.TrackTimeSVGWRapper>
          <S.TrackTimeText>{trackTime}</S.TrackTimeText>
        </S.TrackTimeWrapper>
      }
    </S.TrackTime>
  );
};

export default TrackTime;
