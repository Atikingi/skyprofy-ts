import React, { useContext } from 'react';
import * as S from './style';
import { SkeletonImage, Skeleton } from '../../UI/skeletons/style';
import { ThemeContext } from '../../context/themeContext';
import LikeIcon from '../../icons/likeIcon';
import DislikeIcon from '../../icons/dislikeIcon';
import NoteIcon from '../../icons/noteIcon';

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
  const { isDarkTheme } = useContext(ThemeContext);

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
        <NoteIcon aria-label='music'/>
      </S.TrackPlayIconWrapper>
    );
    trackTitleAuthor = (
      <S.TrackPlayAuthorLink href={trackLink} isDarkTheme={isDarkTheme}>
        {trackName}
      </S.TrackPlayAuthorLink>
    );
    trackTitleAlbum = (
      <S.TrackPlayAlbumLink href={authorLink} isDarkTheme={isDarkTheme}>
        {authorName}
      </S.TrackPlayAlbumLink>
    );
  }
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImageWrapper isDarkTheme={isDarkTheme}>{trackIcon}</S.TrackPlayImageWrapper>
        <S.TrackPlayAuthor>{trackTitleAuthor}</S.TrackPlayAuthor>
        <S.TrackPlayAlbum>{trackTitleAlbum}</S.TrackPlayAlbum>
      </S.TrackPlayContain>
      <S.TrackPlayLikeDisWrapper>
        <S.TrackPlayLikeButton>
          <S.TrackPlayLikeDisButtonIconWrapper isDarkTheme={isDarkTheme}>
            <LikeIcon aria-label="like"/>
          </S.TrackPlayLikeDisButtonIconWrapper>
        </S.TrackPlayLikeButton>
        <S.TrackPlayDisButton>
          <S.TrackPlayLikeDisButtonIconWrapper isDarkTheme={isDarkTheme}>
            <DislikeIcon aria-label="dislike"/>
          </S.TrackPlayLikeDisButtonIconWrapper>
        </S.TrackPlayDisButton>
      </S.TrackPlayLikeDisWrapper>
    </S.TrackPlay>
  );
};

export default PlayerTrack;
