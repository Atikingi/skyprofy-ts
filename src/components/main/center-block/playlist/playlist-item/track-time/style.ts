import styled from 'styled-components';

const COLORS = {
  'track-icon': '#696969',
  'track-time': '#696969'
};

export const TrackTime = styled.div`
  position: relative;
  width: 61px;
  overflow: hidden;
`;

export const TrackTimeWrapper = styled.div`
  display: flex;
`;

export const TrackTimeSVGWRapper = styled.div`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: ${COLORS['track-icon']};
`;

export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: ${COLORS['track-time']};
`;
