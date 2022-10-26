import { SkeletonImage, Skeleton } from '../../UI/skeletons/style';
import NoteIcon from '../../icons/noteIcon';
import PlayerFavoriteButtons from '../player-favorite-buttons';
import { useGetTrackByIdQuery } from '../../../services/music';
import { useAppSelector } from '../../../store/hooks';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import * as S from './style';

const PlayerTrack = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const trackId = useAppSelector(state => state.player.id);
  const { data, isLoading, isSuccess } = useGetTrackByIdQuery(trackId);

  let trackIcon;
  let trackTitleAuthor;
  let trackTitleTrack;

  if (isLoading) {
    trackIcon = <SkeletonImage />;
    trackTitleAuthor = <Skeleton />;
    trackTitleTrack = <Skeleton />;
  }

  if (isSuccess) {
    trackIcon = (
      <S.TrackPlayIconWrapper>
        <NoteIcon aria-label="music" />
      </S.TrackPlayIconWrapper>
    );
    trackTitleTrack = (
      <S.TrackPlayLink href={data.track_file} isDarkTheme={isDarkTheme}>
        {data.name}
      </S.TrackPlayLink>
    );
    trackTitleAuthor = (
      <S.TrackPlayAuthorLink href={data.track_file} isDarkTheme={isDarkTheme}>
        {data.author}
      </S.TrackPlayAuthorLink>
    );
  }
  return (
    <S.TrackPlay>
      <S.TrackPlayContain>
        <S.TrackPlayImageWrapper isDarkTheme={isDarkTheme}>
          {trackIcon}
        </S.TrackPlayImageWrapper>
        <S.TrackPlayName>{trackTitleTrack}</S.TrackPlayName>
        <S.TrackPlayAuthor>{trackTitleAuthor}</S.TrackPlayAuthor>
      </S.TrackPlayContain>
      <PlayerFavoriteButtons />
    </S.TrackPlay>
  );
};

export default PlayerTrack;
