import NoteIcon from '../../../../../icons/noteIcon';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../../../context/themeContext';
import * as S from './style';

interface Props {
  id: string;
  trackTitleLink: string;
  trackTitleText: string;
  onClick: (arg0: MouseEvent) => void;
}

const TrackTitle = ({ trackTitleLink, trackTitleText, id, onClick }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.TrackTitle onClick={() => onClick}>
      <S.TrackImageWrapper>
        <S.TrackTitleImage isDarkTheme={isDarkTheme}>
          <S.TrackIconWrapper>
            <NoteIcon aria-label="music" />
          </S.TrackIconWrapper>
        </S.TrackTitleImage>
      </S.TrackImageWrapper>
      <S.TrackTitleText id={id}>
        <S.TrackTitleLink
          id={id}
          onClick={() => onClick}
          isDarkTheme={isDarkTheme}
          href={trackTitleLink}
        >
          {trackTitleText}
          <S.TrackTitleSpan></S.TrackTitleSpan>
        </S.TrackTitleLink>
      </S.TrackTitleText>
    </S.TrackTitle>
  );
};

export default TrackTitle;
