import React, { useContext, useEffect } from 'react';
import LikeIcon from '../../icons/likeIcon';
import DislikeIcon from '../../icons/dislikeIcon';
import * as S from './style';
import { ThemeContext } from '../../context/themeContext';
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation
} from '../../../services/music';
import { useDispatch, useSelector } from 'react-redux';
import { clearPage } from '../../../store/slices/playerSlice';

const playerFavoriteButtons = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const currentTrackId = useSelector((state: any) => state.player.id);

  const [addTrack, { data, isError, error }] = useAddFavoriteTrackMutation();
  const [deleteTrack, { data: deleteData, isError: isDeleteError, error: deleteError }] = useDeleteFavoriteTrackMutation();

  const onAddTrack = () => {
    addTrack(currentTrackId);
    dispatch(clearPage());
  };

  const onDeleteTrack = () => {
    deleteTrack(currentTrackId);
  };

  useEffect(() => {
    if (isError) {
      console.log(error);
    }

    if (isDeleteError) {
      console.log(deleteError);
    }

    console.log(data);
    console.log(deleteData);
  }, [data, deleteData]);

  return (
    <S.TrackPlayLikeDisWrapper>
      <S.TrackPlayLikeButton onClick={onAddTrack}>
        <S.TrackPlayLikeDisButtonIconWrapper isDarkTheme={isDarkTheme}>
          <LikeIcon aria-label="like"/>
        </S.TrackPlayLikeDisButtonIconWrapper>
      </S.TrackPlayLikeButton>
      <S.TrackPlayDisButton onClick={onDeleteTrack}>
        <S.TrackPlayLikeDisButtonIconWrapper isDarkTheme={isDarkTheme}>
          <DislikeIcon aria-label="dislike"/>
        </S.TrackPlayLikeDisButtonIconWrapper>
      </S.TrackPlayDisButton>
    </S.TrackPlayLikeDisWrapper>
  );
};

export default playerFavoriteButtons;
