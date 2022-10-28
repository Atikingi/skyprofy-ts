import styled from 'styled-components';

const COLORS = {
  'skeleton-background': '#313131'
};

export const Skeleton = styled.div`
  width: 100%;
  height: 19px;

  background-color: ${COLORS['skeleton-background']};

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #656464 50%, transparent 100%);
    animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }
`;

export const SkeletonImage = styled(Skeleton)`
  width: 51px;
  height: 51px;
`;

export const TrackSkeletonWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 51px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TrackTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
  gap: 17px;

  overflow: hidden;
`;

export const TrackImageSkeleton = styled(Skeleton)`
  position: relative;
  overflow: hidden;
  width: 51px;
  height: 51px;
  padding: 16px;
`;

export const TrackTitleSkeleton = styled(Skeleton)`
  position: relative;
  overflow: hidden;
  width: 371px;
`;

export const TrackAuthorSkeleton = styled(Skeleton)`
  position: relative;
  overflow: hidden;
  width: 321px;
`;

export const TrackAlbumSkeleton = styled(Skeleton)`
  position: relative;
  overflow: hidden;
  width: 245px;
`;

export const TrackTimeSkeleton = styled(Skeleton)`
  position: relative;
  overflow: hidden;
  width: 61px;
`;
