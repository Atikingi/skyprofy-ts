import React, { useContext } from 'react';
import * as S from './style';
import { Skeleton, SkeletonImage } from '../../../../../UI/skeletons/style';
import { ThemeContext } from '../../../../../context/themeContext';
import NoteIcon from '../../../../../icons/noteIcon';

interface Props {
  isLoading: boolean,
  trackTitleLink: string,
  trackTitleText: string
}

const TrackTitle = ({
  isLoading,
  trackTitleLink,
  trackTitleText
}: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <S.TrackTitle>
      <S.TrackImageWrapper>
        {isLoading
          ? <SkeletonImage />
          : <S.TrackTitleImage isDarkTheme={isDarkTheme}>
            <S.TrackIconWrapper>
              <NoteIcon aria-label='music'/>
            </S.TrackIconWrapper>
          </S.TrackTitleImage>
        }
      </S.TrackImageWrapper>
      <S.TrackTitleText>
        {isLoading
          ? <Skeleton />
          : <S.TrackTitleLink isDarkTheme={isDarkTheme} href={trackTitleLink}>
            {trackTitleText}
            <S.TrackTitleSpan></S.TrackTitleSpan>
          </S.TrackTitleLink>
        }
      </S.TrackTitleText>
    </S.TrackTitle>
  );
};

export default TrackTitle;
