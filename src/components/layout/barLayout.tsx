import { Outlet } from 'react-router-dom';
import React from 'react';
import Bar from '../bar';
import * as S from '../bar/style';
import { refreshToken } from '../../utils/refresh-token';

export const BarLayout = () => {
  refreshToken();

  return (
    <S.Bar>
      <Outlet />
      <Bar />
    </S.Bar>
  );
};

export default BarLayout;
