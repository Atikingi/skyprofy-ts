import styled from 'styled-components';

const COLORS = {
  'track-lnk': '#FFFFFF'
};

export const TrackAuthor = styled.div`
  position: relative;
  width: 321px;
  display: flex;
  justify-content: flex-start;

  overflow: hidden;
`;

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS['track-lnk']};
  text-align: left;
`;
