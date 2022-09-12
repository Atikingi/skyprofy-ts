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
