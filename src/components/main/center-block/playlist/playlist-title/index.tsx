import React from 'react';
import SvgImage from '../../../../svg';
import * as S from './style';

const PlaylistTitle = () => {
  return (
        <S.PlaylistContentTitle>
          <S.PlaylistTitleCol01>Трек</S.PlaylistTitleCol01>
          <S.PlaylistTitleCol02>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
          <S.PlaylistTitleCol03>АЛЬБОМ</S.PlaylistTitleCol03>
          <S.PlaylistTitleCol04>
            <S.PlaylistSVGWrapper>
              <SvgImage href="/img/icon/sprite.svg#icon-watch" ariaLabel='time'/>
            </S.PlaylistSVGWrapper>
          </S.PlaylistTitleCol04>
        </S.PlaylistContentTitle>
  );
};

export default PlaylistTitle;
