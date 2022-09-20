import styled from 'styled-components';

const COLORS = {
  'track-icon': '#4E4E4E',
  'track-text': '#4E4E4E'
};

export const TrackTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;

  overflow: hidden;
`;

export const TrackImageWrapper = styled.div`
  position: relative;
  width: 51px;
  margin-right: 17px;

  overflow: hidden;
`;

export const TrackTitleImage = styled.div<{isDarkTheme: boolean}>`
  --bg-color: ${props => props.isDarkTheme ? '#313131' : '#F6F4F4'};
  width: 51px;
  height: 51px;
  padding: 16px;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`;

export const TrackSVGWrapper = styled.div`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: ${COLORS['track-icon']};
`;

export const TrackTitleText = styled.div`
  position: relative;
  width: 371px;

  overflow: hidden;
`;

export const TrackTitleLink = styled.a<{isDarkTheme: boolean}>`
  --color: ${props => props.isDarkTheme ? '#FFFFFF' : '#000000'};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: var(--color);
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS['track-text']};
`;
