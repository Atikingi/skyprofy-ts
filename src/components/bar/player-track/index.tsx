import React from 'react';
import SvgImage from '../../svg';
import * as S from './style';
import { SkeletonImage, Skeleton } from '../../UI/skeletons/style';

interface Props {
  trackLink: string;
  trackName: string;
  authorLink: string;
  authorName: string;
  isLoading: boolean;
}

const PlayerTrack = ({
  trackLink,
  trackName,
  authorLink,
  authorName,
  isLoading = true
}: Props) => {
  let trackIcon;
  let trackTitleAuthor;
  let trackTitleAlbum;
  if (isLoading) {
    trackIcon = <SkeletonImage />;
    trackTitleAuthor = <Skeleton />;
    trackTitleAlbum = <Skeleton />;
  } else {
    trackIcon = (
      <S.TrackPlayIconWrapper>
        <SvgImage href="/img/icon/sprite.svg#icon-note" ariaLabel="music" />
      </S.TrackPlayIconWrapper>
    );
    trackTitleAuthor = (
      <S.TrackPlayAuthorLink href={trackLink}>
        {trackName}
      </S.TrackPlayAuthorLink>
    );
    trackTitleAlbum = (
      <S.TrackPlayAlbumLink href={authorLink}>
        {authorName}
      </S.TrackPlayAlbumLink>
    );
  }
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImageWrapper>{trackIcon}</S.TrackPlayImageWrapper>
        <S.TrackPlayAuthor>{trackTitleAuthor}</S.TrackPlayAuthor>
        <S.TrackPlayAlbum>{trackTitleAlbum}</S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLikeDisWrapper>
        <S.TrackPlayLikeButton>
          <S.TrackPlayLikeDisButtonIconWrapper>
            <SvgImage href="/img/icon/sprite.svg#icon-like" ariaLabel="like" />
          </S.TrackPlayLikeDisButtonIconWrapper>
        </S.TrackPlayLikeButton>
        <S.TrackPlayDisButton>
          <S.TrackPlayLikeDisButtonIconWrapper>
            <SvgImage
              href="/img/icon/sprite.svg#icon-dislike"
              ariaLabel="dislike"
            />
          </S.TrackPlayLikeDisButtonIconWrapper>
        </S.TrackPlayDisButton>
      </S.TrackPlayLikeDisWrapper>
    </S.TrackPlay>
  );
};

export default PlayerTrack;
