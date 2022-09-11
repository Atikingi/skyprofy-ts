import React from 'react';
import * as S from './sidebar.style';
import * as Skeleton from '../../UI/skeletons/skeletons.style';

interface PropsType {
  href: string;
  src: string;
  alt: string;
  isLoading: boolean;
}

const SidebarListItem = ({ href, src, alt, isLoading }: PropsType) => {
  return (
    <div>
       <S.SidebarItem>
        <S.SidebarLink href={href}>
          {isLoading ? <Skeleton.Skeleton/> : <S.SidebarImage src={src} alt={alt}/>}
        </S.SidebarLink>
      </S.SidebarItem>
    </div>
  );
};

export default SidebarListItem;
