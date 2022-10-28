import React from 'react';
import WatchIcon from '../../../../icons/watchIcon';
import * as S from './style';

const PlaylistTitle = () => {
  return (
    <S.PlaylistContentTitle>
      <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
      <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
      <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
      <S.PlaylistTitleCol04>
        <S.PlaylistWatchIconWrapper>
          <WatchIcon aria-label="time" />
        </S.PlaylistWatchIconWrapper>
      </S.PlaylistTitleCol04>
    </S.PlaylistContentTitle>
  );
};

export default PlaylistTitle;
