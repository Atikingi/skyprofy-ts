import React from 'react';
import * as S from './sidebar.style';

interface PropsType {
  name: string,
}

const SidebarUser = ({ name }: PropsType) => {
  return (
        <S.SidebarUser>
            <S.SidebarUserName>{name}</S.SidebarUserName>
            <S.SidebarUserAvatar></S.SidebarUserAvatar>
        </S.SidebarUser>
  );
};

export default SidebarUser;
