import React from 'react';
import SvgImage from '../../svg/svg-image';
import * as S from './player-track.style';
import { SkeletonImage, Skeleton } from '../../UI/skeletons/skeletons.style';

interface PropsType {
  trackLink: string,
  trackName: string,
  authorLink: string,
  authorName: string,
  isLoading: boolean
}

const PlayerTrack = ({ trackLink, trackName, authorLink, authorName, isLoading = true }: PropsType) => {
  return (
        <S.TrackPlay>
          <S.TrackPlayContain>
            <S.TrackPlayImageWrapper>
              {isLoading
                ? <SkeletonImage/>
                : <S.TrackPlaySVGWrapper>
                <SvgImage href="img/icon/sprite.svg#icon-note" ariaLabel="music"/>
              </S.TrackPlaySVGWrapper>}
            </S.TrackPlayImageWrapper>
            <S.TrackPlayAuthor>
              {isLoading ? <Skeleton/> : <S.TrackPlayAuthorLink href={trackLink}>{trackName}</S.TrackPlayAuthorLink>
              }
            </S.TrackPlayAuthor>
            <S.TrackPlayAlbum>
              {isLoading ? <Skeleton/> : <S.TrackPlayAlbumLink href={authorLink}>{authorName}</S.TrackPlayAlbumLink>}
            </S.TrackPlayAlbum>
          </S.TrackPlayContain>
          <S.TrackPlayLikeDisWrapper>
            <S.TrackPlayLikeButton>
              <S.TrackPlayLikeDisButtonSVGWrapper>
                <SvgImage href="img/icon/sprite.svg#icon-like" ariaLabel="like"/>
              </S.TrackPlayLikeDisButtonSVGWrapper>
            </S.TrackPlayLikeButton>
            <S.TrackPlayDisButton>
              <S.TrackPlayLikeDisButtonSVGWrapper>
                <SvgImage href="img/icon/sprite.svg#icon-dislike" ariaLabel="dislike"/>
              </S.TrackPlayLikeDisButtonSVGWrapper>
            </S.TrackPlayDisButton>
          </S.TrackPlayLikeDisWrapper>
        </S.TrackPlay>
  );
};

export default PlayerTrack;
