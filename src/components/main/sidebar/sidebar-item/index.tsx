import React from 'react';
import * as S from '../style';
import * as Skeleton from '../../../UI/skeletons/style';

interface Props {
  src: string;
  alt: string;
  isLoading: boolean;
}

const SidebarListItem = ({ src, alt, isLoading }: Props) => {
  let sidebarItem;
  if (isLoading) {
    sidebarItem = <Skeleton.Skeleton/>;
  } else {
    sidebarItem = <S.SidebarImage src={src} alt={alt}/>;
  }
  return (
    <div>
       <S.SidebarItem>
          {sidebarItem}
      </S.SidebarItem>
    </div>
  );
};

export default SidebarListItem;
