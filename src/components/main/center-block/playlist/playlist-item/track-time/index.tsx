import LikeIcon from '../../../../../icons/likeIcon';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../../../context/themeContext';
import * as S from './style';

interface Props {
  trackTime: string;
  isFavorite: boolean;
}

const TrackTime = ({ trackTime, isFavorite }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.TrackTime>
      <S.TrackTimeWrapper>
        <S.TrackLikeIconWrapper
          isFavorite={isFavorite}
          isDarkTheme={isDarkTheme}
          data-testid='Favorite'
        >
          <LikeIcon aria-label="like" />
        </S.TrackLikeIconWrapper>
        <S.TrackTimeText>{trackTime}</S.TrackTimeText>
      </S.TrackTimeWrapper>
    </S.TrackTime>
  );
};

export default TrackTime;
