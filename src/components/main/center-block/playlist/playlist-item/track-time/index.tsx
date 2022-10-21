import React, { useContext, useEffect, useState } from 'react';
import * as S from './style';
import LikeIcon from '../../../../../icons/likeIcon';
import { ThemeContext } from '../../../../../context/themeContext';

interface Props {
  trackTime: string;
  isFavorite: boolean
}

const TrackTime = ({ trackTime, isFavorite }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.TrackTime>
      <S.TrackTimeWrapper>
        <S.TrackLikeIconWrapper isFavorite={isFavorite} isDarkTheme={isDarkTheme}>
          <LikeIcon aria-label="like" />
        </S.TrackLikeIconWrapper>
        <S.TrackTimeText>{trackTime}</S.TrackTimeText>
      </S.TrackTimeWrapper>
    </S.TrackTime>
  );
};

export default TrackTime;
