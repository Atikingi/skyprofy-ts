import styled from 'styled-components';

const COLORS = {
  'track-link': '#696969'
};

export const TrackAlbum = styled.div`
  position: relative;
  width: 245px;

  overflow: hidden;
`;

export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS['track-link']};
`;
