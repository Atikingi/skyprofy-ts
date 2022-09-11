import React from 'react';
import * as S from './track-title.style';
import SvgImage from '../../../../../svg/svg-image';
import { Skeleton, SkeletonImage } from '../../../../../UI/skeletons/skeletons.style';

interface PropsType {
  isLoading: boolean,
  trackTitleLink: string,
  trackTitleText: string
}

const TrackTitle = ({
  isLoading,
  trackTitleLink,
  trackTitleText
}: PropsType) => {
  return (
    <S.TrackTitle>
      <S.TrackImageWrapper>
        {isLoading
          ? <SkeletonImage />
          : <S.TrackTitleImage>
            <S.TrackSVGWrapper>
              <SvgImage
                href="img/icon/sprite.svg#icon-note"
                ariaLabel={'music'}
              />
            </S.TrackSVGWrapper>
          </S.TrackTitleImage>
        }
      </S.TrackImageWrapper>
      <S.TrackTitleText>
        {isLoading
          ? <Skeleton />
          : <S.TrackTitleLink href={trackTitleLink}>
            {trackTitleText}
            <S.TrackTitleSpan></S.TrackTitleSpan>
          </S.TrackTitleLink>
        }
      </S.TrackTitleText>
    </S.TrackTitle>
  );
};

export default TrackTitle;
