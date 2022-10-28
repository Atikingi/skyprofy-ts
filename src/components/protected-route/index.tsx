import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  redirectPath?: string;
  isLogin: boolean;
}

export const ProtectedRoute = ({
  redirectPath = 'skyprofy-ts/Login',
  isLogin
}: Props) => {
  if (!isLogin) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
