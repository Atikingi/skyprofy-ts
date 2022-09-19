import styled from 'styled-components';

const COLORS = {
  'player-background-dark': '#313131',
  'player-background-light': '#F6F4F4',
  'player-button': '#FFFFFF',
  'player-button-hover': '#ACACAC',
  'player-link-dark': '#FFFFFF',
  'player-link-light': '#000000',
  'player-icon-secondary': '#696969'
};

export const TrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author''image album';
  align-items: center;
`;

export const TrackPlayImageWrapper = styled.div<{isDarkTheme: boolean}>`
  position: relative;
  width: 51px;
  height: 51px;
  background-color: ${props => props.isDarkTheme ? COLORS['player-background-dark'] : COLORS['player-background-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;

  overflow: hidden;
`;

export const TrackPlayIconWrapper = styled.div`
  width: 18px;
  height: 17px;
  fill: transparent;
`;

export const TrackPlayAuthor = styled.div`
  position: relative;
  grid-area: author;
  min-width: 49px;

  overflow: hidden;
`;

export const TrackPlayAuthorLink = styled.a<{isDarkTheme: boolean}>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.isDarkTheme ? COLORS['player-link-dark'] : COLORS['player-link-light']};
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  position: relative;
  grid-area: album;
  min-width: 49px;

  overflow: hidden;
`;

export const TrackPlayAlbumLink = styled.a<{isDarkTheme: boolean}>`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: ${props => props.isDarkTheme ? COLORS['player-link-dark'] : COLORS['player-link-light']};
`;

export const TrackPlayLikeDisWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`;

export const TrackPlayLikeButton = styled.div`
  padding: 5px;
  fill: transparent;
  stroke: ${COLORS['player-button']};
  cursor: pointer;
`;

export const TrackPlayLikeDisButtonIconWrapper = styled.div`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: ${COLORS['player-icon-secondary']};
  
  :active {
    fill: ${COLORS['player-icon-secondary']};
    stroke: ${COLORS['player-button']};
    cursor: pointer;
  }
  
  :hover {
    stroke: ${COLORS['player-button-hover']};
    cursor: pointer;
  }
`;

export const TrackPlayDisButton = styled(TrackPlayLikeButton)`
  margin-left: 28.5px;
`;
