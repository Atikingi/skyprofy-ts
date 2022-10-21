import React, { useContext } from 'react';
import * as S from './style';
import { ThemeContext } from '../../../../../context/themeContext';

interface Props {
  id: string;
  trackAuthorLink: string;
  trackAuthorText: string;
  onClick: (arg0: MouseEvent) => void;
}

const TrackAuthor = ({ trackAuthorLink, trackAuthorText, id, onClick }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.TrackAuthor id={id} onClick={() => onClick}>
      <S.TrackAuthorLink
        id={id}
        onClick={(e) => onClick}
        isDarkTheme={isDarkTheme}
        href={trackAuthorLink}
      >
        {trackAuthorText}
      </S.TrackAuthorLink>
    </S.TrackAuthor>
  );
};

export default TrackAuthor;
