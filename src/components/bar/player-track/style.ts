import styled from 'styled-components';

export const TrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image track''image author';
  align-items: center;
`;

export const TrackPlayImageWrapper = styled.div<{isDarkTheme: boolean}>`
  --bg-color: ${props => props.isDarkTheme ? '#313131' : '#F6F4F4'};
  position: relative;
  width: 51px;
  height: 51px;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
  transition: background-color 0.5s ease;
  overflow: hidden;
`;

export const TrackPlayIconWrapper = styled.div`
  width: 18px;
  height: 17px;
  fill: transparent;
  color: #4E4E4E;
`;

export const TrackPlayAuthor = styled.div`
  position: relative;
  grid-area: author;
  min-width: 49px;

  overflow: hidden;
`;

export const TrackPlayAuthorLink = styled.a<{isDarkTheme: boolean}>`
  --bg-color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 24px;
  color: var(--bg-color);
  white-space: nowrap;
`;

export const TrackPlayName = styled.div`
  position: relative;
  grid-area: track;
  min-width: 120px;

  overflow: hidden;
`;

export const TrackPlayLink = styled.a<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: var(--color);
`;
