import React from 'react';
import * as S from './style';

interface Props {
  id: string,
  trackAlbumLink: string;
  trackAlbumText: string;
  onClick: (arg0: MouseEvent) => void;
}

const TrackAlbum = ({ trackAlbumLink, trackAlbumText, id, onClick }: Props) => {
  return (
    <S.TrackAlbum id={id} onClick={() => onClick}>
      <S.TrackAlbumLink onClick={(e) => onClick} id={id} href={trackAlbumLink}>
        {trackAlbumText}
      </S.TrackAlbumLink>
    </S.TrackAlbum>
  );
};

export default TrackAlbum;
