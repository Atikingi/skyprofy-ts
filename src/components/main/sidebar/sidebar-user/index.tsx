import React from 'react';
import * as S from '../style';

interface Props {
  name: string,
}

const SidebarUser = ({ name }: Props) => {
  return (
        <S.SidebarUser>
            <S.SidebarUserName>{name}</S.SidebarUserName>
            <S.SidebarUserAvatar></S.SidebarUserAvatar>
        </S.SidebarUser>
  );
};

export default SidebarUser;
