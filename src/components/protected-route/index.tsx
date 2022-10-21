import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getCookie from '../../utils/get-cookie';
import { setLogin } from '../../store/slices/authSlice';

interface Props {
  redirectPath?: string,
  isLogin: boolean
}

export const ProtectedRoute = ({ redirectPath = 'skyprofy-ts/Login', isLogin }: Props) => {
  if (!isLogin) {
    return <Navigate to={redirectPath} replace={true}/>;
  }

  return <Outlet/>;
};

export default ProtectedRoute;
