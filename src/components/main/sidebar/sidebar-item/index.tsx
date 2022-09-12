import React from 'react';
import * as S from '../style';
import * as Skeleton from '../../../UI/skeletons/style';

interface Props {
  href: string;
  src: string;
  alt: string;
  isLoading: boolean;
}

const SidebarListItem = ({ href, src, alt, isLoading }: Props) => {
  let sidebarItem;
  if (isLoading) {
    sidebarItem = <Skeleton.Skeleton/>;
  } else {
    <S.SidebarImage src={src} alt={alt}/>;
  }
  return (
    <div>
       <S.SidebarItem>
        <S.SidebarLink href={href}>
          {sidebarItem}
        </S.SidebarLink>
      </S.SidebarItem>
    </div>
  );
};

export default SidebarListItem;
