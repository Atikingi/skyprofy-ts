import styled from 'styled-components';

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

export const TrackPlayImageWrapper = styled.div`
  position: relative;
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;

  overflow: hidden;
`;

export const TrackPlaySVGWrapper = styled.div`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4E4E4E;
`;

export const TrackPlayAuthor = styled.div`
  position: relative;
  grid-area: author;
  min-width: 49px;

  overflow: hidden;
`;

export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  white-space: nowrap;
`;

export const TrackPlayAlbum = styled.div`
  position: relative;
  grid-area: album;
  min-width: 49px;

  overflow: hidden;
`;

export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #FFFFFF;
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
  stroke: #ACACAC;
  cursor: pointer;
`;

export const TrackPlayLikeDisButtonSVGWrapper = styled.div`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  
  :active {
    fill: #696969;
    stroke: #FFFFFF;
    cursor: pointer;
  }
  
  :hover {
    stroke: #ACACAC;
    cursor: pointer;
  }
`;

export const TrackPlayDisButton = styled(TrackPlayLikeButton)`
  margin-left: 28.5px;
`;
