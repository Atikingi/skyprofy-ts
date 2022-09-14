import React from 'react';
import * as S from './style';
import SvgImage from '../../../../../svg';
import { Skeleton, SkeletonImage } from '../../../../../UI/skeletons/style';

interface Props {
  isLoading: boolean,
  trackTitleLink: string,
  trackTitleText: string
}

const TrackTitle = ({
  isLoading,
  trackTitleLink,
  trackTitleText
}: Props) => {
  return (
    <S.TrackTitle>
      <S.TrackImageWrapper>
        {isLoading
          ? <SkeletonImage />
          : <S.TrackTitleImage>
            <S.TrackSVGWrapper>
              <SvgImage
                href='/skyprofy-ts/img/icon/sprite.svg#icon-note'
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
