import React, { useContext } from 'react';
import { Skeleton } from '../../../../../UI/skeletons/style';
import * as S from './style';
import { ThemeContext } from '../../../../../context/themeContext';

interface Props {
  isLoading: boolean;
  trackAuthorLink: string;
  trackAuthorText: string;
}

const TrackAuthor = ({
  isLoading,
  trackAuthorLink,
  trackAuthorText
}: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.TrackAuthor>
      {isLoading
        ? <Skeleton/>
        : <S.TrackAuthorLink isDarkTheme={isDarkTheme} href={trackAuthorLink}>
          {trackAuthorText}
        </S.TrackAuthorLink>}
    </S.TrackAuthor>
  );
};

export default TrackAuthor;
