import LikeIcon from '../../icons/likeIcon';
import DislikeIcon from '../../icons/dislikeIcon';
import React, { useContext } from 'react';
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation
} from '../../../services/music';
import { useAppSelector } from '../../../store/hooks';
import { ThemeContext } from '../../context/themeContext';
import * as S from './style';

const playerFavoriteButtons = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const currentTrackId = useAppSelector((state) => state.player.id);

  const [addTrack, { isError, error }] = useAddFavoriteTrackMutation();
  const [
    deleteTrack,
    { isError: isDeleteError, error: deleteError }
  ] = useDeleteFavoriteTrackMutation();

  const onAddTrack = () => {
    void addTrack(currentTrackId);
  };

  const onDeleteTrack = () => {
    void deleteTrack(currentTrackId);
  };

  if (isError) {
    console.log(error);
  }

  if (isDeleteError) {
    console.log(deleteError);
  }

  return (
    <S.TrackPlayLikeDisWrapper>
      <S.TrackPlayLikeButton onClick={onAddTrack}>
        <S.TrackPlayLikeDisButtonIconWrapper isDarkTheme={isDarkTheme}>
          <LikeIcon aria-label="like" />
        </S.TrackPlayLikeDisButtonIconWrapper>
      </S.TrackPlayLikeButton>
      <S.TrackPlayDisButton onClick={onDeleteTrack}>
        <S.TrackPlayLikeDisButtonIconWrapper isDarkTheme={isDarkTheme}>
          <DislikeIcon aria-label="dislike" />
        </S.TrackPlayLikeDisButtonIconWrapper>
      </S.TrackPlayDisButton>
    </S.TrackPlayLikeDisWrapper>
  );
};

export default playerFavoriteButtons;
