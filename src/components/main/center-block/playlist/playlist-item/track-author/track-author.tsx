import React from 'react';
import { Skeleton } from '../../../../../UI/skeletons/skeletons.style';
import * as S from './track-author.style';

interface PropsType {
  isLoading: boolean;
  trackAuthorLink: string;
  trackAuthorText: string;
}

const TrackAuthor = ({
  isLoading,
  trackAuthorLink,
  trackAuthorText
}: PropsType) => {
  return (
    <S.TrackAuthor>
      {isLoading
        ? <Skeleton/>
        : <S.TrackAuthorLink href={trackAuthorLink}>
          {trackAuthorText}
        </S.TrackAuthorLink>}
    </S.TrackAuthor>
  );
};

export default TrackAuthor;
