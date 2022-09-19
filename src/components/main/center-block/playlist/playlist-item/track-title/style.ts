import styled from 'styled-components';

const COLORS = {
  'track-title-dark': '#313131',
  'track-title-light': '#F6F4F4',
  'track-link-dark': '#FFFFFF',
  'track-link-light': '#000000',
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
  width: 51px;
  height: 51px;
  padding: 16px;
  background: ${props => props.isDarkTheme ? COLORS['track-title-dark'] : COLORS['track-title-light']};
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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.isDarkTheme ? COLORS['track-link-dark'] : COLORS['track-link-light']};
`;

export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS['track-text']};
`;
