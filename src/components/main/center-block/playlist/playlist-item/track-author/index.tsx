import React from 'react';
import { Skeleton } from '../../../../../UI/skeletons/style';
import * as S from './style';

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
