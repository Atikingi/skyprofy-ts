import styled from 'styled-components';

const COLORS = {
  'playlist-title': '#696969',
  'playlist-icon': '#696969'
};

export const PlaylistContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: ${COLORS['playlist-title']};
  text-transform: uppercase;
`;

export const PlaylistTitleCol01 = styled(PlaylistTitleCol)`
  width: 447px;
`;

export const PlaylistTitleCol02 = styled(PlaylistTitleCol)`
  width: 321px;
`;

export const PlaylistTitleCol03 = styled(PlaylistTitleCol)`
  width: 245px;
`;

export const PlaylistTitleCol04 = styled(PlaylistTitleCol)`
  width: 60px;
  text-align: end;
`;

export const PlaylistWatchIconWrapper = styled.div`
  width: 12px;
  height: 17px;
  fill: transparent;
  stroke: ${COLORS['playlist-icon']};
`;
